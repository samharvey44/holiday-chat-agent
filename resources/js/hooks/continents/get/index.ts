import { useSetRecoilState } from 'recoil';
import { useCallback } from 'react';

import continentsAtom from 'app/atoms/continents';
import { useSnackbar } from 'notistack';
import api from 'app/services/api';

export default function useGetContinents() {
    const setContinents = useSetRecoilState(continentsAtom);
    const { enqueueSnackbar } = useSnackbar();

    return useCallback(() => {
        api.get('/continents')
            .then(({ data: { data } }) => {
                setContinents(data);
            })
            .catch(() => {
                enqueueSnackbar('Failed to get continents!', {
                    variant: 'error',
                });
            });
    }, []);
}
