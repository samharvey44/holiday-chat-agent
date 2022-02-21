import Login from './Unauthed/Login';
import Home from './Authed/Home';

import { IPage } from './interfaces';

const unauthed: IPage[] = [
    {
        name: 'Login',
        path: '/login',
        role: null,
        authed: false,
        Element: Login,
    },
];

const authed: IPage[] = [
    {
        name: 'Home',
        path: '/home',
        role: 'user',
        authed: true,
        Element: Home,
    },
];

export const unauthedPages: IPage[] = unauthed;
export const authedPages: IPage[] = authed;
