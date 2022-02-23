import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSnackbar } from 'notistack';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useFormik } from 'formik';
import React from 'react';

import { formInitialValues } from './initialValues';
import useLoginUser from 'app/hooks/user/login';
import { useStyles } from './hooks/useStyles';
import useNavigate from 'app/hooks/navigate';
import { formSchema } from './schema';
import api from 'app/services/api';
import { EPages } from 'app/enums';

const Login: React.FC = () => {
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const login = useLoginUser();
    const styles = useStyles();

    const formikFields = useFormik({
        initialValues: formInitialValues,
        validationSchema: formSchema,
        onSubmit: (values) => {
            api.post('/login', values)
                .then(() => {
                    enqueueSnackbar('Logged in successfully!', {
                        variant: 'success',
                    });

                    login();
                })
                .catch(() => {
                    enqueueSnackbar('Login failed!', {
                        variant: 'error',
                    });
                });
        },
    });

    return (
        <Grow in>
            <form onSubmit={formikFields.handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Box sx={styles.root}>
                            <Paper
                                sx={styles.loginContainer}
                                variant="outlined"
                            >
                                <Box sx={styles.loginHeader}>
                                    <Typography
                                        variant="h4"
                                        sx={styles.loginHeaderText}
                                    >
                                        <b>Login</b>
                                    </Typography>
                                </Box>

                                <Box sx={styles.loginForm}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="email"
                                        variant="filled"
                                        label="Enter email..."
                                        value={formikFields.values.email}
                                        onChange={formikFields.handleChange}
                                        error={
                                            formikFields.touched.email &&
                                            !!formikFields.errors.email
                                        }
                                        helperText={
                                            formikFields.touched.email &&
                                            formikFields.errors.email
                                        }
                                    />

                                    <TextField
                                        required
                                        sx={styles.passwordField}
                                        fullWidth
                                        name="password"
                                        type="password"
                                        variant="filled"
                                        label="Enter password..."
                                        value={formikFields.values.password}
                                        onChange={formikFields.handleChange}
                                        error={
                                            formikFields.touched.password &&
                                            !!formikFields.errors.password
                                        }
                                        helperText={
                                            formikFields.touched.password &&
                                            formikFields.errors.password
                                        }
                                    />

                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        sx={styles.loginButton}
                                    >
                                        Submit
                                    </Button>

                                    <Typography
                                        variant="subtitle1"
                                        sx={styles.signUpTypography}
                                    >
                                        <span style={styles.signUpText}>
                                            Don't have an account?
                                        </span>{' '}
                                        <b
                                            style={styles.signUpLink}
                                            onClick={() => {
                                                navigate(EPages.Register);
                                            }}
                                        >
                                            Sign up!
                                        </b>
                                    </Typography>
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </Grow>
    );
};

export default Login;
