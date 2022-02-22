import React from 'react';

import { IProps } from './interfaces';
import AuthGate from '../AuthGate';

const MainGate: React.FC<IProps> = ({ children }) => (
    <AuthGate>{(authReady) => children(authReady)}</AuthGate>
);

export default MainGate;
