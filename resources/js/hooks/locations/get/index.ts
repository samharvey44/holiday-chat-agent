import { useSetRecoilState } from 'recoil';
import { useCallback } from 'react';

import locationsAtom from 'app/atoms/locations';
import { useSnackbar } from 'notistack';
import api from 'app/services/api';

export default function useGetLocations() {
    const setLocations = useSetRecoilState(locationsAtom);
    const { enqueueSnackbar } = useSnackbar();

    return useCallback(() => {
        api.get('/locations')
            .then(({ data: { data } }) => {
                setLocations(data);
            })
            .catch(() => {
                enqueueSnackbar('Failed to get locations!', {
                    variant: 'error',
                });
            });
    }, []);
}
