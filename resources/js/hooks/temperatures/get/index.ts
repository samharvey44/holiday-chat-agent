import { useSetRecoilState } from 'recoil';
import { useCallback } from 'react';

import temperaturesAtom from 'app/atoms/temperatures';
import { useSnackbar } from 'notistack';
import api from 'app/services/api';

export default function useGetTemperatures() {
    const setTemperatures = useSetRecoilState(temperaturesAtom);
    const { enqueueSnackbar } = useSnackbar();

    return useCallback(() => {
        api.get('/temperatures')
            .then(({ data: { data } }) => {
                setTemperatures(data);
            })
            .catch(() => {
                enqueueSnackbar('Failed to get temperatures!', {
                    variant: 'error',
                });
            });
    }, []);
}
