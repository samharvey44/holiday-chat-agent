import { useSetRecoilState } from 'recoil';
import { useCallback } from 'react';

import questionsAtom from 'app/atoms/questions';
import { useSnackbar } from 'notistack';
import api from 'app/services/api';

export default function getQuestions() {
    const setQuestions = useSetRecoilState(questionsAtom);
    const { enqueueSnackbar } = useSnackbar();

    return useCallback(() => {
        api.get('/questions')
            .then(({ data: { data } }) => {
                setQuestions(data);
            })
            .catch(() => {
                enqueueSnackbar('Failed to get questions!', {
                    variant: 'error',
                });
            });
    }, []);
}
