import useMakeStyles from 'app/hooks/makeStyles';

export const useStyles = () =>
    useMakeStyles({
        appBarRoot: {
            flexGrow: 1,
        },

        logoutButton: {
            color: 'white',
        },

        toolbarInner: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },

        greetingText: {
            marginLeft: '20px',
        },
    });
