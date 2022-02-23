import { atom } from 'recoil';

import { ILocation } from './interfaces';

export default atom<ILocation[]>({
    key: 'locationsAtom',
    default: [],
});
