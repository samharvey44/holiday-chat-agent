import { atom } from 'recoil';

import { IQuestion } from './interfaces';

export default atom<IQuestion[]>({
    key: 'questionAtom',
    default: [],
});
