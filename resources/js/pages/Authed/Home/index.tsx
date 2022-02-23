import React, { useState, useEffect, Fragment, useCallback } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { useSnackbar } from 'notistack';
import Slide from '@mui/material/Slide';
import { useRecoilValue } from 'recoil';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { IQuestionWithAnswer } from 'app/atoms/questions/interfaces';
import useGetQuestions from 'app/hooks/questions/get';
import { IHoliday, IMeta } from 'app/interfaces';
import questionsAtom from 'app/atoms/questions';
import { useStyles } from './hooks/useStyles';
import api from 'app/services/api';
import { url } from 'app/helpers';

const Home: React.FC = () => {
    const questions = useRecoilValue(questionsAtom);
    const { enqueueSnackbar } = useSnackbar();
    const getQuestions = useGetQuestions();
    const styles = useStyles();

    const [firstMessageIn, setFirstMessageIn] = useState(false);
    const [secondMessageIn, setSecondMessageIn] = useState(false);
    const [questionsIn, setQuestionsIn] = useState(false);
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
        const messageTimeout = setTimeout(() => {
            setFirstMessageIn(true);

            setTimeout(() => {
                setSecondMessageIn(true);

                setTimeout(() => {
                    setQuestionsIn(true);
                }, 1500);
            }, 1500);
        }, 1000);

        return () => {
            clearTimeout(messageTimeout);
        };
    }, []);

    useEffect(() => {
        if (questions.length === 0) {
            getQuestions();
        }
    }, []);

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
                <Grow
                    in={agentIn}
                    mountOnEnter
                    unmountOnExit
                    onExited={() => {
                        setHolidaysIn(true);
                    }}
                >
                    <Box sx={styles.root}>
                        <Paper sx={styles.chatContainer} variant="outlined">
                            <Box sx={styles.chatHeader}>
                                <Typography
                                    variant="h5"
                                    sx={styles.chatHeaderText}
                                >
                                    <b>Chat to our Virtual Holiday Agent!</b>
                                </Typography>

                                <Typography
                                    variant="subtitle1"
                                    sx={styles.chatHeaderText}
                                >
                                    Answer a few simple questions, and we will
                                    suggest you some matching holidays.
                                </Typography>
                            </Box>

                            <Box sx={styles.scrollContainer}>
                                <Box sx={styles.chatInnerContainer}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            <Grow
                                                in={firstMessageIn}
                                                mountOnEnter
                                            >
                                                <Box
                                                    sx={
                                                        styles.chatBubbleContainerLeft
                                                    }
                                                >
                                                    <Box sx={styles.chatBubble}>
                                                        <Typography
                                                            variant="subtitle1"
                                                            sx={styles.chatText}
                                                        >
                                                            Hello! I'm the
                                                            Holiday First
                                                            virtual chat agent!
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Grow>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Grow
                                                in={secondMessageIn}
                                                mountOnEnter
                                            >
                                                <Box
                                                    sx={
                                                        styles.chatBubbleContainerLeft
                                                    }
                                                >
                                                    <Box sx={styles.chatBubble}>
                                                        <Typography
                                                            variant="subtitle1"
                                                            sx={styles.chatText}
                                                        >
                                                            Answer some simple
                                                            questions, and I'll
                                                            suggest you some
                                                            holidays!
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Grow>
                                        </Grid>

                                        {questions.map(
                                            ({
                                                id,
                                                key,
                                                text,
                                                order,
                                                answers,
                                            }) => (
                                                <Fragment key={id}>
                                                    <Grow
                                                        in={
                                                            currentQuestion >=
                                                                order &&
                                                            questionsIn
                                                        }
                                                        mountOnEnter
                                                    >
                                                        <Grid item xs={12}>
                                                            <Box
                                                                sx={
                                                                    styles.chatBubbleContainerLeft
                                                                }
                                                            >
                                                                <Box
                                                                    sx={
                                                                        styles.chatBubble
                                                                    }
                                                                >
                                                                    <Typography
                                                                        variant="subtitle1"
                                                                        sx={
                                                                            styles.chatText
                                                                        }
                                                                    >
                                                                        {text}
                                                                    </Typography>
                                                                </Box>
                                                            </Box>
                                                        </Grid>
                                                    </Grow>

                                                    <Grow
                                                        in={
                                                            currentQuestion >=
                                                                order &&
                                                            questionsIn
                                                        }
                                                        mountOnEnter
                                                    >
                                                        <Grid item xs={12}>
                                                            <Box
                                                                sx={
                                                                    styles.chatBubbleContainerRight
                                                                }
                                                            >
                                                                {answers.map(
                                                                    (a) => {
                                                                        const answer =
                                                                            selectedAnswers[
                                                                                key
                                                                            ];

                                                                        const isAnswered =
                                                                            !!answer;

                                                                        const isSelected =
                                                                            isAnswered &&
                                                                            answer ===
                                                                                a.text;

                                                                        return (
                                                                            <Button
                                                                                variant={
                                                                                    isSelected
                                                                                        ? 'contained'
                                                                                        : 'outlined'
                                                                                }
                                                                                key={
                                                                                    a.id
                                                                                }
                                                                                disabled={
                                                                                    isAnswered &&
                                                                                    !isSelected
                                                                                }
                                                                                onClick={
                                                                                    !isAnswered
                                                                                        ? () => {
                                                                                              setSelectedAnswers(
                                                                                                  (
                                                                                                      curr,
                                                                                                  ) => ({
                                                                                                      ...curr,
                                                                                                      [key]: a.text,
                                                                                                  }),
                                                                                              );

                                                                                              setCurrentQuestion(
                                                                                                  (
                                                                                                      curr,
                                                                                                  ) =>
                                                                                                      curr +
                                                                                                      1,
                                                                                              );
                                                                                          }
                                                                                        : undefined
                                                                                }
                                                                                sx={
                                                                                    styles.answer
                                                                                }
                                                                            >
                                                                                <Typography variant="h6">
                                                                                    <b>
                                                                                        {
                                                                                            a.text
                                                                                        }
                                                                                    </b>
                                                                                </Typography>
                                                                            </Button>
                                                                        );
                                                                    },
                                                                )}

                                                                <Button
                                                                    variant={
                                                                        selectedAnswers[
                                                                            key
                                                                        ] ===
                                                                        'any'
                                                                            ? 'contained'
                                                                            : 'outlined'
                                                                    }
                                                                    disabled={
                                                                        !!selectedAnswers[
                                                                            key
                                                                        ] &&
                                                                        selectedAnswers[
                                                                            key
                                                                        ] !==
                                                                            'any'
                                                                    }
                                                                    onClick={
                                                                        !selectedAnswers[
                                                                            key
                                                                        ]
                                                                            ? () => {
                                                                                  setSelectedAnswers(
                                                                                      (
                                                                                          curr,
                                                                                      ) => ({
                                                                                          ...curr,
                                                                                          [key]: 'any',
                                                                                      }),
                                                                                  );

                                                                                  setCurrentQuestion(
                                                                                      (
                                                                                          curr,
                                                                                      ) =>
                                                                                          curr +
                                                                                          1,
                                                                                  );
                                                                              }
                                                                            : undefined
                                                                    }
                                                                    sx={
                                                                        styles.answer
                                                                    }
                                                                >
                                                                    <Typography variant="h6">
                                                                        <b>
                                                                            Any
                                                                        </b>
                                                                    </Typography>
                                                                </Button>
                                                            </Box>
                                                        </Grid>
                                                    </Grow>
                                                </Fragment>
                                            ),
                                        )}

                                        {currentQuestion > questions.length && (
                                            <Fragment>
                                                <Grow in mountOnEnter>
                                                    <Grid item xs={12}>
                                                        <Box
                                                            sx={
                                                                styles.chatBubbleContainerLeft
                                                            }
                                                        >
                                                            <Box
                                                                sx={
                                                                    styles.chatBubble
                                                                }
                                                            >
                                                                <Typography
                                                                    variant="subtitle1"
                                                                    sx={
                                                                        styles.chatText
                                                                    }
                                                                >
                                                                    What is the
                                                                    maximum you
                                                                    wish pay per
                                                                    night?
                                                                </Typography>
                                                            </Box>
                                                        </Box>
                                                    </Grid>
                                                </Grow>

                                                <Grow in mountOnEnter>
                                                    <Grid item xs={12}>
                                                        <Box
                                                            sx={
                                                                styles.finalChatBubble
                                                            }
                                                        >
                                                            <TextField
                                                                sx={
                                                                    styles.pricePerNightField
                                                                }
                                                                variant="filled"
                                                                label="Enter a maximum cost..."
                                                                value={
                                                                    selectedAnswers.pricePerNight
                                                                }
                                                                onChange={(
                                                                    e,
                                                                ) => {
                                                                    let value =
                                                                        e.target
                                                                            .value;

                                                                    if (
                                                                        value.length ===
                                                                        0
                                                                    ) {
                                                                        value =
                                                                            '0';
                                                                    }

                                                                    if (
                                                                        isNaN(
                                                                            parseInt(
                                                                                value,
                                                                                10,
                                                                            ),
                                                                        )
                                                                    ) {
                                                                        return;
                                                                    }

                                                                    setSelectedAnswers(
                                                                        (
                                                                            curr,
                                                                        ) => ({
                                                                            ...curr,
                                                                            pricePerNight:
                                                                                value,
                                                                        }),
                                                                    );
                                                                }}
                                                            />

                                                            <Button
                                                                disabled={
                                                                    selectedAnswers
                                                                        .pricePerNight
                                                                        .length ===
                                                                    0
                                                                }
                                                                sx={
                                                                    styles.submitButton
                                                                }
                                                                variant="contained"
                                                                color="primary"
                                                                onClick={() => {
                                                                    handleGetHolidays(
                                                                        1,
                                                                    );
                                                                }}
                                                            >
                                                                Find Holidays
                                                            </Button>
                                                        </Box>
                                                    </Grid>
                                                </Grow>
                                            </Fragment>
                                        )}
                                    </Grid>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                </Grow>

                <Slide
                    in={holidaysIn}
                    direction="left"
                    mountOnEnter
                    unmountOnExit
                    onExited={() => {
                        setAgentIn(true);
                    }}
                >
                    <Box sx={styles.root}>
                        {holidays.length === 0 ? (
                            <Box sx={styles.noHolidaysContainer}>
                                <img
                                    src={url('/images/no-holidays.svg')}
                                    style={styles.noHolidaysIcon}
                                />

                                <Typography variant="h6">
                                    No holidays matched your criteria!
                                </Typography>

                                <Typography variant="subtitle1">
                                    We add new holidays regularly, so check back
                                    another time!
                                </Typography>

                                <Button
                                    onClick={resetAgent}
                                    variant="contained"
                                    color="primary"
                                    sx={styles.startOverButton}
                                >
                                    Start Over
                                </Button>
                            </Box>
                        ) : (
                            <Box sx={styles.holidaysContainer}>
                                <Typography
                                    variant="h4"
                                    sx={styles.holidayTitle}
                                >
                                    We found you <b>{holidaysMeta.total}</b>{' '}
                                    matching holidays!
                                </Typography>

                                <Button
                                    variant="contained"
                                    color="primary"
                                    sx={styles.startOverButtonHolidays}
                                    onClick={resetAgent}
                                >
                                    Start Over
                                </Button>

                                <Grid container spacing={3}>
                                    {holidays.map(
                                        ({
                                            id,
                                            createdAt,
                                            hotelName,
                                            pricePerNight,
                                            rating,
                                            temperature,
                                            continent,
                                            location,
                                            category,
                                            country,
                                            city,
                                        }) => (
                                            <Grid
                                                item
                                                xs={12}
                                                md={6}
                                                key={id}
                                                sx={styles.gridItem}
                                            >
                                                <Box
                                                    sx={styles.holidayContainer}
                                                >
                                                    <Grid container spacing={3}>
                                                        <Grid
                                                            item
                                                            xs={12}
                                                            md={6}
                                                        >
                                                            <Typography
                                                                variant="h6"
                                                                sx={
                                                                    styles.holidayText
                                                                }
                                                            >
                                                                <b>
                                                                    Hotel Name:
                                                                </b>{' '}
                                                                {hotelName}
                                                            </Typography>

                                                            {city && (
                                                                <Typography
                                                                    variant="h6"
                                                                    sx={
                                                                        styles.holidayText
                                                                    }
                                                                >
                                                                    <b>City:</b>{' '}
                                                                    {city.name}
                                                                </Typography>
                                                            )}

                                                            <Typography
                                                                variant="subtitle1"
                                                                sx={
                                                                    styles.holidayText
                                                                }
                                                            >
                                                                <b>Country:</b>{' '}
                                                                {country.name}
                                                            </Typography>

                                                            <Typography
                                                                variant="subtitle1"
                                                                sx={
                                                                    styles.holidayText
                                                                }
                                                            >
                                                                <b>
                                                                    Continent:
                                                                </b>{' '}
                                                                {continent.name}
                                                            </Typography>
                                                        </Grid>

                                                        <Grid
                                                            item
                                                            xs={12}
                                                            md={6}
                                                        >
                                                            <Box
                                                                sx={
                                                                    styles.flexEndContainer
                                                                }
                                                            >
                                                                <Rating
                                                                    size="large"
                                                                    readOnly
                                                                    precision={
                                                                        0.5
                                                                    }
                                                                    value={
                                                                        rating
                                                                    }
                                                                />

                                                                <Typography
                                                                    variant="subtitle1"
                                                                    sx={
                                                                        styles.holidayText
                                                                    }
                                                                >
                                                                    £
                                                                    {
                                                                        pricePerNight
                                                                    }{' '}
                                                                    per night
                                                                </Typography>
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
                                                </Box>

                                                <Box
                                                    sx={
                                                        styles.holidayContainerFooter
                                                    }
                                                >
                                                    <Typography
                                                        variant="subtitle1"
                                                        sx={styles.footerItem}
                                                    >
                                                        <b>Temperature:</b>{' '}
                                                        {temperature.name}
                                                    </Typography>

                                                    <Typography
                                                        variant="subtitle1"
                                                        sx={styles.footerItem}
                                                    >
                                                        <b>Category:</b>{' '}
                                                        {category.name}
                                                    </Typography>

                                                    <Typography variant="subtitle1">
                                                        <b>Location:</b>{' '}
                                                        {location.name}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        ),
                                    )}
                                </Grid>

                                {holidays.length > 0 && (
                                    <Box sx={styles.paginationContainer}>
                                        <Button
                                            disabled={holidaysPage === 1}
                                            variant="contained"
                                            color="primary"
                                            onClick={() => {
                                                setHolidaysPage(
                                                    (curr) => curr - 1,
                                                );
                                            }}
                                        >
                                            Last Page
                                        </Button>

                                        <Typography
                                            variant="subtitle1"
                                            sx={styles.paginationText}
                                        >
                                            {`Page ${holidaysMeta.current_page} of ${holidaysMeta.last_page}`}
                                        </Typography>

                                        <Button
                                            disabled={
                                                holidaysPage ===
                                                holidaysMeta.last_page
                                            }
                                            variant="contained"
                                            color="primary"
                                            onClick={() => {
                                                setHolidaysPage(
                                                    (curr) => curr + 1,
                                                );
                                            }}
                                        >
                                            Next Page
                                        </Button>
                                    </Box>
                                )}
                            </Box>
                        )}
                    </Box>
                </Slide>
            </Grid>
        </Grid>
    );
};

export default Home;
