import { atom } from 'recoil';

import { ICountry } from './interfaces';

export default atom<ICountry[]>({
    key: 'countriesAtom',
    default: [],
});
