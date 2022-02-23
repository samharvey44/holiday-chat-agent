import { atom } from 'recoil';

import { ICity } from './interfaces';

export default atom<ICity[]>({
    key: 'citiesAtom',
    default: [],
});
