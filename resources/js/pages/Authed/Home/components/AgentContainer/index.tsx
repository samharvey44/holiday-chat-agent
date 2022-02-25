import React, { Fragment, useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useRecoilValue } from 'recoil';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import Box from '@mui/material/Box';

import useGetQuestions from 'app/hooks/questions/get';
import questionsAtom from 'app/atoms/questions';
import { useStyles } from './hooks/useStyles';
import { IProps } from './interfaces';

const AgentContainer: React.FC<IProps> = ({
    agentIn,
    setHolidaysIn,
    handleGetHolidays,
    selectedAnswers,
    setSelectedAnswers,
    currentQuestion,
    setCurrentQuestion,
}) => {
    const questions = useRecoilValue(questionsAtom);
    const getQuestions = useGetQuestions();
    const styles = useStyles();

    const [firstMessageIn, setFirstMessageIn] = useState(false);
    const [secondMessageIn, setSecondMessageIn] = useState(false);
    const [questionsIn, setQuestionsIn] = useState(false);

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

    return (
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
                        <Typography variant="h5" sx={styles.chatHeaderText}>
                            <b>Chat to our Virtual Holiday Agent!</b>
                        </Typography>

                        <Typography
                            variant="subtitle1"
                            sx={styles.chatHeaderText}
                        >
                            Answer a few simple questions, and we will suggest
                            you some matching holidays.
                        </Typography>
                    </Box>

                    <Box sx={styles.scrollContainer}>
                        <Box sx={styles.chatInnerContainer}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Grow in={firstMessageIn} mountOnEnter>
                                        <Box
                                            sx={styles.chatBubbleContainerLeft}
                                        >
                                            <Box sx={styles.chatBubble}>
                                                <Typography
                                                    variant="subtitle1"
                                                    sx={styles.chatText}
                                                >
                                                    Hello! I'm the Holiday First
                                                    virtual chat agent!
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Grow>
                                </Grid>

                                <Grid item xs={12}>
                                    <Grow in={secondMessageIn} mountOnEnter>
                                        <Box
                                            sx={styles.chatBubbleContainerLeft}
                                        >
                                            <Box sx={styles.chatBubble}>
                                                <Typography
                                                    variant="subtitle1"
                                                    sx={styles.chatText}
                                                >
                                                    Answer some simple
                                                    questions, and I'll suggest
                                                    you some holidays!
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Grow>
                                </Grid>

                                {questions.map(
                                    ({ id, key, text, order, answers }) => (
                                        <Fragment key={id}>
                                            <Grow
                                                in={
                                                    currentQuestion >= order &&
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
                                                    currentQuestion >= order &&
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
                                                        {answers.map((a) => {
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
                                                                    key={a.id}
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
                                                        })}

                                                        <Button
                                                            variant={
                                                                selectedAnswers[
                                                                    key
                                                                ] === 'any'
                                                                    ? 'contained'
                                                                    : 'outlined'
                                                            }
                                                            disabled={
                                                                !!selectedAnswers[
                                                                    key
                                                                ] &&
                                                                selectedAnswers[
                                                                    key
                                                                ] !== 'any'
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
                                                            sx={styles.answer}
                                                        >
                                                            <Typography variant="h6">
                                                                <b>Any</b>
                                                            </Typography>
                                                        </Button>
                                                    </Box>
                                                </Grid>
                                            </Grow>
                                        </Fragment>
                                    ),
                                )}

                                {currentQuestion > questions.length &&
                                    questions.length > 0 && (
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
                                                                maximum you wish
                                                                pay per night?
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
                                                            onChange={(e) => {
                                                                let value =
                                                                    e.target
                                                                        .value;

                                                                if (
                                                                    value.length ===
                                                                    0
                                                                ) {
                                                                    value = '0';
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
                                                                    (curr) => ({
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
    );
};

export default AgentContainer;
