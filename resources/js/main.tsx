import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { SnackbarProvider } from 'notistack';
import { RecoilRoot } from 'recoil';
import React from 'react';

import useInitializeTheme from './hooks/initializeTheme';
import Router from './router';
import MainGate from './components/gates/MainGate';

const Main: React.FC = () => {
    const theme = useInitializeTheme();

    return (
        <RecoilRoot>
            <SnackbarProvider
                maxSnack={3}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
            >
                <ThemeProvider theme={theme}>
                    <MainGate>
                        {(ready) => (ready ? <Router /> : null)}
                    </MainGate>
                </ThemeProvider>
            </SnackbarProvider>
        </RecoilRoot>
    );
};

export default Main;
