import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { SnackbarProvider } from 'notistack';
import { RecoilRoot } from 'recoil';
import React from 'react';

import useInitializeTheme from './hooks/initializeTheme';
import Router from './router';

const Main: React.FC = () => {
    const theme = useInitializeTheme();

    return (
        <RecoilRoot>
            <SnackbarProvider maxSnack={3}>
                <ThemeProvider theme={theme}>
                    <Router />
                </ThemeProvider>
            </SnackbarProvider>
        </RecoilRoot>
    );
};

export default Main;
