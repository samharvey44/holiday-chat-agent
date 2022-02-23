import useMediaQuery from '@mui/material/useMediaQuery';
import useTheme from '@mui/material/styles/useTheme';

import useMakeStyles from 'app/hooks/makeStyles';

export const useStyles = () => {
    const theme = useTheme();

    const isTablet = useMediaQuery(theme.breakpoints.down('sm'));

    return useMakeStyles({
        appBarRoot: {
            flexGrow: 1,
        },

        buttonContainer: {
            display: 'flex',
            justifyContent: !isTablet ? 'flex-end' : 'center',
        },

        button: {
            color: 'white',
            marginLeft: '20px',
        },

        appBarInner: {
            display: 'flex',
            alignItems: 'center',
            padding: '30px',
        },

        greetingContainer: {
            display: 'flex',
            justifyContent: !isTablet ? undefined : 'center',
        },
    });
};
