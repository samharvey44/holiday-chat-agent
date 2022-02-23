import { atom } from 'recoil';

import { ITemperature } from './interfaces';

export default atom<ITemperature[]>({
    key: 'temperaturesAtom',
    default: [],
});
