import React, { useState, useEffect, Fragment } from 'react';
import Typography from '@mui/material/Typography';
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
import questionsAtom from 'app/atoms/questions';
import { useStyles } from './hooks/useStyles';

const Home: React.FC = () => {
    const questions = useRecoilValue(questionsAtom);
    const { enqueueSnackbar } = useSnackbar();
    const getQuestions = useGetQuestions();
    const styles = useStyles();

    const [firstMessageIn, setFirstMessageIn] = useState(false);
    const [secondMessageIn, setSecondMessageIn] = useState(false);
    const [questionsIn, setQuestionsIn] = useState(false);

    const [currentQuestion, setCurrentQuestion] = useState(1);

    const [selectedAnswers, setSelectedAnswers] = useState<IQuestionWithAnswer>(
        {},
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

    return (
        <Slide direction="down" in>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Box sx={styles.root}>
                        <Paper sx={styles.chatContainer}>
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
                                                <Fragment>
                                                    <Grow
                                                        key={id}
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
                                                            </Box>
                                                        </Grid>
                                                    </Grow>
                                                </Fragment>
                                            ),
                                        )}

                                        {currentQuestion >=
                                            questions.length && (
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
                                        )}
                                    </Grid>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </Slide>
    );
};

export default Home;
