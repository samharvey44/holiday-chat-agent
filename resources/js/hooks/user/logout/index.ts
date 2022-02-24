import { useResetRecoilState } from 'recoil';
import { useSnackbar } from 'notistack';

import temperaturesAtom from 'app/atoms/temperatures';
import categoriesAtom from 'app/atoms/categories';
import continentsAtom from 'app/atoms/continents';
import locationsAtom from 'app/atoms/locations';
import questionsAtom from 'app/atoms/questions';
import countriesAtom from 'app/atoms/countries';
import citiesAtom from 'app/atoms/cities';
import userAtom from 'app/atoms/user';
import api from 'app/services/api';

export default () => {
    const clearTemperatures = useResetRecoilState(temperaturesAtom);
    const clearCategories = useResetRecoilState(categoriesAtom);
    const clearContinents = useResetRecoilState(continentsAtom);
    const clearLocations = useResetRecoilState(locationsAtom);
    const clearCountries = useResetRecoilState(countriesAtom);
    const clearQuestions = useResetRecoilState(questionsAtom);
    const clearCities = useResetRecoilState(citiesAtom);
    const clearUser = useResetRecoilState(userAtom);

    const { enqueueSnackbar } = useSnackbar();

    return () => {
        api.post('/logout')
            .then(() => {
                clearTemperatures();
                clearCategories();
                clearContinents();
                clearLocations();
                clearCountries();
                clearQuestions();
                clearCities();
                clearUser();
            })
            .catch(() => {
                enqueueSnackbar('Failed to logout!', { variant: 'error' });
            });
    };
};
