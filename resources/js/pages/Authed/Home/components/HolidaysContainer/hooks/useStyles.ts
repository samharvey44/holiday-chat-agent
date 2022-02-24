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

        paginationContainer: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
            alignItems: 'center',
        },

        paginationText: {
            marginLeft: '10px',
            marginRight: '10px',
            textAlign: 'center',
        },
    });
};
