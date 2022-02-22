import Login from './Unauthed/Login';
import Home from './Authed/Home';

import { IPage } from './interfaces';
import { ERole } from 'app/enums';

const unauthed: IPage[] = [
    {
        name: 'Login',
        path: '/login',
        roles: [],
        authed: false,
        Element: Login,
    },
];

const authed: IPage[] = [
    {
        name: 'Home',
        path: '/home',
        roles: [ERole.User, ERole.Admin],
        authed: true,
        Element: Home,
    },
];

export const unauthedPages: IPage[] = unauthed;
export const authedPages: IPage[] = authed;
