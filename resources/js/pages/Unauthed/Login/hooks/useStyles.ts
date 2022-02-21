import useMediaQuery from '@mui/material/useMediaQuery';
import useTheme from '@mui/material/styles/useTheme';
import useMakeStyles from 'app/hooks/makeStyles';

export const useStyles = () => {
    const theme = useTheme();

    const isTablet = useMediaQuery(theme.breakpoints.down('sm'));

    return useMakeStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },

        loginContainer: {
            marginTop: '10%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '10px',
            width: !isTablet ? '45%' : '90%',
            overflow: 'hidden',
            border: '1px solid #e0e0e0',
            backgroundColor: '#F9FAFB',
        },

        loginHeader: {
            padding: '20px',
            backgroundColor: theme.palette.primary.main,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },

        loginHeaderText: {
            color: 'white',
        },

        loginForm: {
            padding: '20px',
            width: '80%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        },

        passwordField: {
            marginTop: '20px',
        },

        loginButton: {
            marginTop: '40px',
        },
    });
};
