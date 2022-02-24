import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import React from 'react';

import { useStyles } from './hooks/useStyles';
import { url } from 'app/helpers';
import { IProps } from './interfaces';

const HolidaysContainer: React.FC<IProps> = ({
    holidaysIn,
    setAgentIn,
    holidays,
    resetAgent,
    holidaysMeta,
    holidaysPage,
    setHolidaysPage,
}) => {
    const styles = useStyles();

    return (
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
                            We add new holidays regularly, so check back another
                            time!
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
                        <Typography variant="h4" sx={styles.holidayTitle}>
                            We found you <b>{holidaysMeta.total}</b> matching
                            holidays!
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
                                        <Box sx={styles.holidayContainer}>
                                            <Grid container spacing={3}>
                                                <Grid item xs={12} md={6}>
                                                    <Typography
                                                        variant="h6"
                                                        sx={styles.holidayText}
                                                    >
                                                        <b>Hotel Name:</b>{' '}
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
                                                        sx={styles.holidayText}
                                                    >
                                                        <b>Country:</b>{' '}
                                                        {country.name}
                                                    </Typography>

                                                    <Typography
                                                        variant="subtitle1"
                                                        sx={styles.holidayText}
                                                    >
                                                        <b>Continent:</b>{' '}
                                                        {continent.name}
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={12} md={6}>
                                                    <Box
                                                        sx={
                                                            styles.flexEndContainer
                                                        }
                                                    >
                                                        <Rating
                                                            size="large"
                                                            readOnly
                                                            precision={0.5}
                                                            value={rating}
                                                        />

                                                        <Typography
                                                            variant="subtitle1"
                                                            sx={
                                                                styles.holidayText
                                                            }
                                                        >
                                                            £{pricePerNight} per
                                                            night
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Box>

                                        <Box sx={styles.holidayContainerFooter}>
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
                                                <b>Category:</b> {category.name}
                                            </Typography>

                                            <Typography variant="subtitle1">
                                                <b>Location:</b> {location.name}
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
                                        setHolidaysPage((curr) => curr - 1);
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
                                        holidaysPage === holidaysMeta.last_page
                                    }
                                    variant="contained"
                                    color="primary"
                                    onClick={() => {
                                        setHolidaysPage((curr) => curr + 1);
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
    );
};

export default HolidaysContainer;
