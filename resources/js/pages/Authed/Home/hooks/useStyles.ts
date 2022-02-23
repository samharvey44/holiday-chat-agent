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
            marginBottom: '20px',
        },

        chatContainer: {
            marginTop: !isTablet ? '100px' : '50px',
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
            flexWrap: 'wrap',
        },

        chatBubbleContainerRight: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            flexWrap: 'wrap',
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
            marginTop: '10px',
        },

        finalChatBubble: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
        },

        submitButton: {
            marginTop: '10px',
        },

        pricePerNightField: {
            width: '200px',
            marginTop: '10px',
        },

        noHolidaysContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '100px',
        },

        noHolidaysIcon: {
            height: '300px',
            width: '300px',
        },

        startOverButton: {
            marginTop: '20px',
        },

        startOverButtonHolidays: {
            marginBottom: '20px',
        },

        holidaysContainer: {
            marginTop: !isTablet ? '100px' : '50px',
            width: !isTablet ? '65%' : '90%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
        },

        holidayContainer: {
            borderTopRightRadius: '10px',
            borderTopLeftRadius: '10px',
            backgroundColor: theme.palette.primary.main,
            padding: '20px',
            flexGrow: 1,
        },

        holidayText: {
            marginBottom: '5px',
            color: 'white',
        },

        holidayTitle: {
            marginBottom: '20px',
            textAlign: 'center',
        },

        gridItem: {
            display: 'flex',
            flexDirection: 'column',
        },

        flexEndContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: !isTablet ? 'flex-end' : 'flex-start',
        },

        holidayContainerFooter: {
            display: 'flex',
            alignItems: 'center',
            border: `2px solid ${theme.palette.primary.main}`,
            borderBottomLeftRadius: '5px',
            borderBottomRightRadius: '5px',
            padding: '10px',
        },

        footerItem: {
            marginRight: '10px',
        },
    });
};
