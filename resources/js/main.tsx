import { RecoilRoot } from 'recoil';
import React from 'react';

import Router from './router';

const Main: React.FC = () => {
    return (
        <RecoilRoot>
            <Router />
        </RecoilRoot>
    );
};

export default Main;
