import { atom } from 'recoil';

import { IUser } from './interfaces';

export default atom<IUser | null>({
    key: 'userAtom',
    default: null,
});
