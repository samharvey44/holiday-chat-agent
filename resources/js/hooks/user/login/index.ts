import { useSetRecoilState } from 'recoil';
import { useSnackbar } from 'notistack';

import userAtom from 'app/atoms/user';
import api from 'app/services/api';

export default () => {
    const setUser = useSetRecoilState(userAtom);
    const { enqueueSnackbar } = useSnackbar();

    return () => {
        api.get('/me')
            .then(({ data: { data } }) => {
                setUser(data);
            })
            .catch(() => {
                enqueueSnackbar('Failed to get user!', { variant: 'error' });
            });
    };
};
