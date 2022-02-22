import Slide from '@mui/material/Slide';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import React from 'react';

import { useStyles } from './hooks/useStyles';

const Home: React.FC = () => {
    const classes = useStyles();

    return (
        <Slide direction="up" in>
            <Grid container spacing={3}>
                <Grid item xs={12}></Grid>
            </Grid>
        </Slide>
    );
};

export default Home;
