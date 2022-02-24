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
            marginTop: '50px',
            marginBottom: '50px',
        },

        loginContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '10px',
            width: !isTablet ? '45%' : '90%',
            overflow: 'hidden',
        },

        loginHeader: {
            padding: '20px',
            backgroundColor: theme.palette.primary.main,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            flexDirection: 'column',
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

        signupButton: {
            marginTop: '40px',
        },

        passwordField: {
            marginTop: '20px',
        },

        signInText: {
            marginTop: '20px',
        },

        signInLink: {
            color: theme.palette.primary.main,
            cursor: 'pointer',
        },

        signInTypography: {
            marginTop: '20px',
        },
    });
};
