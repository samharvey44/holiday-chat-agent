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
            width: '100%',
            marginTop: '50px',
            marginBottom: '50px',
        },

        createContainer: {
            width: !isTablet ? '45%' : '90%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            borderRadius: '10px',
            overflow: 'hidden',
        },

        createHeader: {
            padding: '20px',
            backgroundColor: theme.palette.primary.main,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            flexDirection: 'column',
        },

        createHeaderText: {
            color: 'white',
        },

        createInnerContainer: {
            padding: '25px',
        },

        submitContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
    });
};
