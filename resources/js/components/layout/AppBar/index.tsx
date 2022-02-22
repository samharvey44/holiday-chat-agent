import Typography from '@mui/material/Typography';
import MUIAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Outlet } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useRecoilValue } from 'recoil';
import Box from '@mui/material/Box';
import React from 'react';

import useLogoutUser from 'app/hooks/user/logout';
import useTimeOfDay from 'app/hooks/timeOfDay';
import { useStyles } from './hooks/useStyles';
import userAtom from 'app/atoms/user';

const AppBar: React.FC = () => {
    const user = useRecoilValue(userAtom);
    const timeOfDay = useTimeOfDay();
    const logout = useLogoutUser();
    const classes = useStyles();

    return (
        <Box sx={classes.appBarRoot}>
            <MUIAppBar position="static">
                <Box sx={classes.toolbarInner}>
                    <Typography variant="subtitle1" sx={classes.greetingText}>
                        <b>{`Good ${timeOfDay}${
                            user ? `, ${user.name}!` : '!'
                        }`}</b>
                    </Typography>

                    <Toolbar>
                        {!!user && (
                            <Button
                                sx={classes.logoutButton}
                                variant="text"
                                onClick={() => {
                                    logout();
                                }}
                            >
                                Logout
                            </Button>
                        )}
                    </Toolbar>
                </Box>
            </MUIAppBar>

            <Outlet />
        </Box>
    );
};

export default AppBar;
