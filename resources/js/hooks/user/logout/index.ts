import { useResetRecoilState } from 'recoil';
import { useSnackbar } from 'notistack';

import userAtom from 'app/atoms/user';
import api from 'app/services/api';

export default () => {
    const clearUser = useResetRecoilState(userAtom);
    const { enqueueSnackbar } = useSnackbar();

    return () => {
        api.post('/logout')
            .then(() => {
                clearUser();
            })
            .catch(() => {
                enqueueSnackbar('Failed to logout!', { variant: 'error' });
            });
    };
};
