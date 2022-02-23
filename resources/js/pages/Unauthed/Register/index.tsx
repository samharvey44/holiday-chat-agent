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

import useHandleRequestErrors from 'app/hooks/request/handleErrors';
import { formInitialValues } from './initialValues';
import useLoginUser from 'app/hooks/user/login';
import { useStyles } from './hooks/useStyles';
import useNavigate from 'app/hooks/navigate';
import { formSchema } from './schema';
import api from 'app/services/api';
import { EPages } from 'app/enums';

const Register = () => {
    const handleRequestErrors = useHandleRequestErrors();
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const login = useLoginUser();
    const styles = useStyles();

    const formikFields = useFormik({
        initialValues: formInitialValues,
        validationSchema: formSchema,
        onSubmit: (values) => {
            api.post('/register', {
                email: values.email,
                name: values.name,
                password: values.password,
                password_confirmation: values.passwordConfirmation,
            })
                .then(() => {
                    enqueueSnackbar('Logged in successfully!', {
                        variant: 'success',
                    });

                    login();
                })
                .catch((e) => {
                    handleRequestErrors(
                        e,
                        'Failed to register!',
                        'email',
                        'name',
                        'password',
                    );
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
                                        <b>Register</b>
                                    </Typography>

                                    <Typography
                                        variant="subtitle1"
                                        sx={styles.loginHeaderText}
                                    >
                                        Come and see the holidays we have to
                                        offer!
                                    </Typography>
                                </Box>

                                <Box sx={styles.loginForm}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                name="email"
                                                variant="filled"
                                                label="Enter your email..."
                                                value={
                                                    formikFields.values.email
                                                }
                                                onChange={
                                                    formikFields.handleChange
                                                }
                                                error={
                                                    formikFields.touched
                                                        .email &&
                                                    !!formikFields.errors.email
                                                }
                                                helperText={
                                                    formikFields.touched
                                                        .email &&
                                                    formikFields.errors.email
                                                }
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                name="name"
                                                variant="filled"
                                                label="Enter your name..."
                                                value={formikFields.values.name}
                                                onChange={
                                                    formikFields.handleChange
                                                }
                                                error={
                                                    formikFields.touched.name &&
                                                    !!formikFields.errors.name
                                                }
                                                helperText={
                                                    formikFields.touched.name &&
                                                    formikFields.errors.name
                                                }
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField
                                                sx={styles.passwordField}
                                                required
                                                fullWidth
                                                name="password"
                                                type="password"
                                                variant="filled"
                                                label="Enter a password..."
                                                value={
                                                    formikFields.values.password
                                                }
                                                onChange={
                                                    formikFields.handleChange
                                                }
                                                error={
                                                    formikFields.touched
                                                        .password &&
                                                    !!formikFields.errors
                                                        .password
                                                }
                                                helperText={
                                                    formikFields.touched
                                                        .password &&
                                                    formikFields.errors.password
                                                }
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                name="passwordConfirmation"
                                                type="password"
                                                variant="filled"
                                                label="Confirm password..."
                                                value={
                                                    formikFields.values
                                                        .passwordConfirmation
                                                }
                                                onChange={
                                                    formikFields.handleChange
                                                }
                                                error={
                                                    formikFields.touched
                                                        .passwordConfirmation &&
                                                    !!formikFields.errors
                                                        .passwordConfirmation
                                                }
                                                helperText={
                                                    formikFields.touched
                                                        .passwordConfirmation &&
                                                    formikFields.errors
                                                        .passwordConfirmation
                                                }
                                            />
                                        </Grid>
                                    </Grid>

                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        sx={styles.signupButton}
                                    >
                                        Signup
                                    </Button>

                                    <Typography
                                        variant="subtitle1"
                                        sx={styles.signInTypography}
                                    >
                                        <span style={styles.signInText}>
                                            Already have an account?
                                        </span>{' '}
                                        <b
                                            style={styles.signInLink}
                                            onClick={() => {
                                                navigate(EPages.Login);
                                            }}
                                        >
                                            Sign in!
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

export default Register;
