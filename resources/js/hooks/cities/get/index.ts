import { useSetRecoilState } from 'recoil';
import { useCallback } from 'react';

import citiesAtom from 'app/atoms/cities';
import { useSnackbar } from 'notistack';
import api from 'app/services/api';

export default function useGetCities() {
    const setCities = useSetRecoilState(citiesAtom);
    const { enqueueSnackbar } = useSnackbar();

    return useCallback(() => {
        api.get('/cities')
            .then(({ data: { data } }) => {
                setCities(data);
            })
            .catch(() => {
                enqueueSnackbar('Failed to get cities!', {
                    variant: 'error',
                });
            });
    }, []);
}
