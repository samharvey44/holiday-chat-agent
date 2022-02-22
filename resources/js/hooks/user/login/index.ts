import { useSetRecoilState } from 'recoil';

import userAtom from 'app/atoms/user';
import api from 'app/services/api';

export default () => {
    const setUser = useSetRecoilState(userAtom);

    return (cb: (success: boolean) => void = () => null) => {
        api.get('/me')
            .then(({ data: { data } }) => {
                setUser(data);

                cb(true);
            })
            .catch(() => {
                cb(false);
            });
    };
};
