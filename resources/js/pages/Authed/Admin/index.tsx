import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useSnackbar } from 'notistack';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import Box from '@mui/material/Box';
import { useFormik } from 'formik';

import useHandleRequestErrors from 'app/hooks/request/handleErrors';
import useGetTemperatures from 'app/hooks/temperatures/get';
import useGetCategories from 'app/hooks/categories/get';
import useGetContinents from 'app/hooks/continents/get';
import useGetCountries from 'app/hooks/countries/get';
import useGetLocations from 'app/hooks/locations/get';
import temperaturesAtom from 'app/atoms/temperatures';
import DropDown from 'app/components/common/DropDown';
import { formInitialValues } from './initialValues';
import continentsAtom from 'app/atoms/continents';
import categoriesAtom from 'app/atoms/categories';
import useGetCities from 'app/hooks/cities/get';
import countriesAtom from 'app/atoms/countries';
import locationsAtom from 'app/atoms/locations';
import { useStyles } from './hooks/useStyles';
import citiesAtom from 'app/atoms/cities';
import { formSchema } from './schema';
import api from 'app/services/api';

const Admin = () => {
    const handleRequestErrors = useHandleRequestErrors();
    const { enqueueSnackbar } = useSnackbar();
    const styles = useStyles();

    const temperatures = useRecoilValue(temperaturesAtom);
    const continents = useRecoilValue(continentsAtom);
    const categories = useRecoilValue(categoriesAtom);
    const countries = useRecoilValue(countriesAtom);
    const locations = useRecoilValue(locationsAtom);
    const cities = useRecoilValue(citiesAtom);

    const getTemperatures = useGetTemperatures();
    const getContinents = useGetContinents();
    const getCategories = useGetCategories();
    const getCountries = useGetCountries();
    const getLocations = useGetLocations();
    const getCities = useGetCities();

    useEffect(() => {
        if (temperatures.length === 0) {
            getTemperatures();
        }

        if (continents.length === 0) {
            getContinents();
        }

        if (categories.length === 0) {
            getCategories();
        }

        if (countries.length === 0) {
            getCountries();
        }

        if (locations.length === 0) {
            getLocations();
        }

        if (cities.length === 0) {
            getCities();
        }
    }, []);

    const formikFields = useFormik({
        initialValues: formInitialValues,
        validationSchema: formSchema,
        onSubmit: (values, { resetForm }) => {
            api.post('/holidays', values)
                .then(() => {
                    enqueueSnackbar('Holiday created successfully.', {
                        variant: 'success',
                    });

                    resetForm();
                })
                .catch((error) => {
                    handleRequestErrors(
                        error,
                        'Failed to create holiday.',
                        'hotelName',
                        'pricePerNight',
                        'rating',
                        'country',
                        'continent',
                        'city',
                        'location',
                        'category',
                        'temperature',
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
                                variant="outlined"
                                sx={styles.createContainer}
                            >
                                <Box sx={styles.createHeader}>
                                    <Typography
                                        variant="h5"
                                        sx={styles.createHeaderText}
                                    >
                                        <b>Create a New Holiday</b>
                                    </Typography>

                                    <Typography
                                        variant="subtitle1"
                                        sx={styles.createHeaderText}
                                    >
                                        Add a new holiday for the Chat Agent to
                                        display to users.
                                    </Typography>
                                </Box>

                                <Box sx={styles.createInnerContainer}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                variant="filled"
                                                name="hotelName"
                                                label="Enter hotel name..."
                                                value={
                                                    formikFields.values
                                                        .hotelName
                                                }
                                                onChange={
                                                    formikFields.handleChange
                                                }
                                                error={
                                                    formikFields.touched
                                                        .hotelName &&
                                                    !!formikFields.errors
                                                        .hotelName
                                                }
                                                helperText={
                                                    formikFields.touched
                                                        .hotelName
                                                        ? formikFields.errors
                                                              .hotelName
                                                        : undefined
                                                }
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                variant="filled"
                                                name="pricePerNight"
                                                label="Enter price per night..."
                                                value={
                                                    formikFields.values
                                                        .pricePerNight
                                                }
                                                onChange={
                                                    formikFields.handleChange
                                                }
                                                error={
                                                    formikFields.touched
                                                        .pricePerNight &&
                                                    !!formikFields.errors
                                                        .pricePerNight
                                                }
                                                helperText={
                                                    formikFields.touched
                                                        .pricePerNight
                                                        ? formikFields.errors
                                                              .pricePerNight
                                                        : undefined
                                                }
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                variant="filled"
                                                name="rating"
                                                label="Enter rating..."
                                                value={
                                                    formikFields.values.rating
                                                }
                                                onChange={
                                                    formikFields.handleChange
                                                }
                                                error={
                                                    formikFields.touched
                                                        .rating &&
                                                    !!formikFields.errors.rating
                                                }
                                                helperText={
                                                    formikFields.touched.rating
                                                        ? formikFields.errors
                                                              .rating
                                                        : undefined
                                                }
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <DropDown
                                                inputLabel="country"
                                                required={true}
                                                items={countries.map(
                                                    ({ id, name }) => ({
                                                        label: name,
                                                        value: id,
                                                    }),
                                                )}
                                                value={
                                                    formikFields.values.country
                                                }
                                                onChange={
                                                    formikFields.handleChange
                                                }
                                                error={
                                                    formikFields.touched
                                                        .country &&
                                                    !!formikFields.errors
                                                        .country
                                                }
                                                helperText={
                                                    formikFields.touched.country
                                                        ? formikFields.errors
                                                              .country
                                                        : undefined
                                                }
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <DropDown
                                                inputLabel="continent"
                                                required={true}
                                                items={continents.map(
                                                    ({ id, name }) => ({
                                                        label: name,
                                                        value: id,
                                                    }),
                                                )}
                                                value={
                                                    formikFields.values
                                                        .continent
                                                }
                                                onChange={
                                                    formikFields.handleChange
                                                }
                                                error={
                                                    formikFields.touched
                                                        .continent &&
                                                    !!formikFields.errors
                                                        .continent
                                                }
                                                helperText={
                                                    formikFields.touched
                                                        .continent
                                                        ? formikFields.errors
                                                              .continent
                                                        : undefined
                                                }
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <DropDown
                                                defaultOption="None"
                                                inputLabel="city"
                                                required={false}
                                                items={cities.map(
                                                    ({ id, name }) => ({
                                                        label: name,
                                                        value: id,
                                                    }),
                                                )}
                                                value={formikFields.values.city}
                                                onChange={
                                                    formikFields.handleChange
                                                }
                                                error={
                                                    formikFields.touched.city &&
                                                    !!formikFields.errors.city
                                                }
                                                helperText={
                                                    formikFields.touched.city
                                                        ? formikFields.errors
                                                              .city
                                                        : undefined
                                                }
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <DropDown
                                                inputLabel="location"
                                                required={true}
                                                items={locations.map(
                                                    ({ id, name }) => ({
                                                        label: name,
                                                        value: id,
                                                    }),
                                                )}
                                                value={
                                                    formikFields.values.location
                                                }
                                                onChange={
                                                    formikFields.handleChange
                                                }
                                                error={
                                                    formikFields.touched
                                                        .location &&
                                                    !!formikFields.errors
                                                        .location
                                                }
                                                helperText={
                                                    formikFields.touched
                                                        .location
                                                        ? formikFields.errors
                                                              .location
                                                        : undefined
                                                }
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <DropDown
                                                inputLabel="category"
                                                required={true}
                                                items={categories.map(
                                                    ({ id, name }) => ({
                                                        label: name,
                                                        value: id,
                                                    }),
                                                )}
                                                value={
                                                    formikFields.values.category
                                                }
                                                onChange={
                                                    formikFields.handleChange
                                                }
                                                error={
                                                    formikFields.touched
                                                        .category &&
                                                    !!formikFields.errors
                                                        .category
                                                }
                                                helperText={
                                                    formikFields.touched
                                                        .category
                                                        ? formikFields.errors
                                                              .category
                                                        : undefined
                                                }
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <DropDown
                                                inputLabel="temperature"
                                                required={true}
                                                items={temperatures.map(
                                                    ({ id, name }) => ({
                                                        label: name,
                                                        value: id,
                                                    }),
                                                )}
                                                value={
                                                    formikFields.values
                                                        .temperature
                                                }
                                                onChange={
                                                    formikFields.handleChange
                                                }
                                                error={
                                                    formikFields.touched
                                                        .temperature &&
                                                    !!formikFields.errors
                                                        .temperature
                                                }
                                                helperText={
                                                    formikFields.touched
                                                        .temperature
                                                        ? formikFields.errors
                                                              .temperature
                                                        : undefined
                                                }
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Box sx={styles.submitContainer}>
                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                >
                                                    Submit
                                                </Button>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </Grow>
    );
};

export default Admin;
