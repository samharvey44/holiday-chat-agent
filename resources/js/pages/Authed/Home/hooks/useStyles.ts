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

        chatContainer: {
            marginTop: '100px',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '10px',
            width: !isTablet ? '45%' : '90%',
            overflow: 'hidden',
            maxHeight: '700px',
        },

        scrollContainer: {
            overflow: 'auto',
        },

        chatHeader: {
            padding: '20px',
            backgroundColor: theme.palette.primary.main,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            flexDirection: 'column',
        },

        chatHeaderText: {
            color: 'white',
        },

        chatInnerContainer: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '15px',
        },

        chatBubbleContainerLeft: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
        },

        chatBubbleContainerRight: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
        },

        chatBubble: {
            backgroundColor: theme.palette.secondary.main,
            padding: '15px',
            maxWidth: '70%',
            display: 'inline-block',
            borderRadius: '5px',
        },

        chatText: {
            color: '#0A0908',
        },

        answer: {
            marginLeft: '10px',
        },
    });
};
