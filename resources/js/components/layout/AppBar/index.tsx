import Typography from '@mui/material/Typography';
import MUIAppBar from '@mui/material/AppBar';
import { Outlet } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useRecoilValue } from 'recoil';
import React, { Fragment } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import useGetTimeOfDay from 'app/hooks/getTimeOfDay';
import useLogoutUser from 'app/hooks/user/logout';
import { useStyles } from './hooks/useStyles';
import useNavigate from 'app/hooks/navigate';
import { ERoles, EPages } from 'app/enums';
import usePage from 'app/hooks/page/get';
import userAtom from 'app/atoms/user';

const AppBar: React.FC = () => {
    const user = useRecoilValue(userAtom);
    const timeOfDay = useGetTimeOfDay();
    const navigate = useNavigate();
    const logout = useLogoutUser();
    const styles = useStyles();
    const page = usePage();

    return (
        <Box sx={styles.appBarRoot}>
            <MUIAppBar position="static">
                <Box sx={styles.appBarInner}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Box sx={styles.greetingContainer}>
                                <Typography variant="h6">
                                    {`Good ${timeOfDay}${
                                        user ? `, ${user.name}!` : '!'
                                    }`}
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            {!!user && (
                                <Box sx={styles.buttonContainer}>
                                    {user.role.name === ERoles.Admin && (
                                        <Fragment>
                                            <Button
                                                color={
                                                    page.name === EPages.Home
                                                        ? 'secondary'
                                                        : 'primary'
                                                }
                                                sx={styles.button}
                                                variant={
                                                    page.name === EPages.Home
                                                        ? 'outlined'
                                                        : 'text'
                                                }
                                                onClick={() => {
                                                    navigate(EPages.Home);
                                                }}
                                            >
                                                Home
                                            </Button>

                                            <Button
                                                color={
                                                    page.name === EPages.Admin
                                                        ? 'secondary'
                                                        : 'primary'
                                                }
                                                sx={styles.button}
                                                variant={
                                                    page.name === EPages.Admin
                                                        ? 'outlined'
                                                        : 'text'
                                                }
                                                onClick={() => {
                                                    navigate(EPages.Admin);
                                                }}
                                            >
                                                Admin
                                            </Button>
                                        </Fragment>
                                    )}

                                    <Button
                                        sx={styles.button}
                                        variant="text"
                                        onClick={() => {
                                            logout();
                                        }}
                                    >
                                        Logout
                                    </Button>
                                </Box>
                            )}
                        </Grid>
                    </Grid>
                </Box>
            </MUIAppBar>

            <Outlet />
        </Box>
    );
};

export default AppBar;
