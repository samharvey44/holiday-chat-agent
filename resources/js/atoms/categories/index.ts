import { atom } from 'recoil';

import { ICategory } from './interfaces';

export default atom<ICategory[]>({
    key: 'categoriesAtom',
    default: [],
});
