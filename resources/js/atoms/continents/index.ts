import { atom } from 'recoil';

import { IContinent } from './interfaces';

export default atom<IContinent[]>({
    key: 'continentsAtom',
    default: [],
});
