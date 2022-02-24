import React, { useState, useEffect, useCallback } from 'react';
import { useSnackbar } from 'notistack';
import Grid from '@mui/material/Grid';

import { IQuestionWithAnswer } from 'app/atoms/questions/interfaces';
import HolidaysContainer from './components/HolidaysContainer';
import AgentContainer from './components/AgentContainer';
import { IHoliday, IMeta } from 'app/interfaces';
import api from 'app/services/api';

const Home: React.FC = () => {
    const { enqueueSnackbar } = useSnackbar();

    const [holidaysIn, setHolidaysIn] = useState(false);
    const [agentIn, setAgentIn] = useState(true);

    const [currentQuestion, setCurrentQuestion] = useState(1);

    const [selectedAnswers, setSelectedAnswers] = useState<IQuestionWithAnswer>(
        {
            pricePerNight: '',
        },
    );

    const [holidaysMeta, setHolidaysMeta] = useState<IMeta>({
        current_page: 1,
        total: 0,
        last_page: 1,
    });
    const [holidays, setHolidays] = useState<IHoliday[]>([]);
    const [holidaysPage, setHolidaysPage] = useState(1);

    const handleGetHolidays = useCallback(
        (page: number) => {
            api.get('/holidays', {
                params: {
                    page,
                    ...selectedAnswers,
                },
            })
                .then(({ data: { data, meta } }) => {
                    setHolidaysMeta(meta);
                    setHolidays(data);

                    setAgentIn(false);
                })
                .catch(() => {
                    enqueueSnackbar('Failed to get holidays!', {
                        variant: 'error',
                    });
                });
        },
        [selectedAnswers],
    );

    useEffect(() => {
        if (!holidaysIn) return;

        handleGetHolidays(holidaysPage);
    }, [holidaysPage]);

    const resetAgent = () => {
        setCurrentQuestion(1);
        setSelectedAnswers({
            pricePerNight: '',
        });

        setHolidaysIn(false);
        setHolidaysPage(1);
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <AgentContainer
                    agentIn={agentIn}
                    setHolidaysIn={setHolidaysIn}
                    handleGetHolidays={handleGetHolidays}
                    selectedAnswers={selectedAnswers}
                    setSelectedAnswers={setSelectedAnswers}
                    currentQuestion={currentQuestion}
                    setCurrentQuestion={setCurrentQuestion}
                />

                <HolidaysContainer
                    holidaysIn={holidaysIn}
                    setAgentIn={setAgentIn}
                    holidays={holidays}
                    resetAgent={resetAgent}
                    holidaysMeta={holidaysMeta}
                    holidaysPage={holidaysPage}
                    setHolidaysPage={setHolidaysPage}
                />
            </Grid>
        </Grid>
    );
};

export default Home;
