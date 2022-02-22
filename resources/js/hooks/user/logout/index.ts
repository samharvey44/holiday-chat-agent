import { useResetRecoilState } from 'recoil';
import { useSnackbar } from 'notistack';

import questionsAtom from 'app/atoms/questions';
import userAtom from 'app/atoms/user';
import api from 'app/services/api';

export default () => {
    const clearQuestions = useResetRecoilState(questionsAtom);
    const clearUser = useResetRecoilState(userAtom);
    const { enqueueSnackbar } = useSnackbar();

    return () => {
        api.post('/logout')
            .then(() => {
                clearQuestions();
                clearUser();
            })
            .catch(() => {
                enqueueSnackbar('Failed to logout!', { variant: 'error' });
            });
    };
};
