import { useSetRecoilState } from 'recoil';
import { useCallback } from 'react';

import countriesAtom from 'app/atoms/countries';
import { useSnackbar } from 'notistack';
import api from 'app/services/api';

export default function useGetCountries() {
    const setCountries = useSetRecoilState(countriesAtom);
    const { enqueueSnackbar } = useSnackbar();

    return useCallback(() => {
        api.get('/countries')
            .then(({ data: { data } }) => {
                setCountries(data);
            })
            .catch(() => {
                enqueueSnackbar('Failed to get countries!', {
                    variant: 'error',
                });
            });
    }, []);
}
