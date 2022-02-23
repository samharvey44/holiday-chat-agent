import { useSetRecoilState } from 'recoil';
import { useCallback } from 'react';

import categoriesAtom from 'app/atoms/categories';
import { useSnackbar } from 'notistack';
import api from 'app/services/api';

export default function useGetCategories() {
    const setCategories = useSetRecoilState(categoriesAtom);
    const { enqueueSnackbar } = useSnackbar();

    return useCallback(() => {
        api.get('/categories')
            .then(({ data: { data } }) => {
                setCategories(data);
            })
            .catch(() => {
                enqueueSnackbar('Failed to get categories!', {
                    variant: 'error',
                });
            });
    }, []);
}
