import { Route, Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import React from 'react';

import userAtom from 'app/atoms/user';
import { IProps } from './interfaces';

const Redirect: React.FC<IProps> = ({ path }) => {
    const user = useRecoilValue(userAtom);

    return (
        <Route
            path={path}
            element={<Navigate replace to={!!user ? '/home' : '/login'} />}
        />
    );
};

export default Redirect;
