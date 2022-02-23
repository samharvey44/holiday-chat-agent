import Login from './Unauthed/Login';
import Admin from './Authed/Admin';
import Home from './Authed/Home';

import { ERoles, EPages } from 'app/enums';
import Register from './Unauthed/Register';
import { IPage } from './interfaces';

const unauthed: IPage[] = [
    {
        name: EPages.Login,
        path: '/login',
        roles: [],
        authed: false,
        Element: Login,
    },

    {
        name: EPages.Register,
        path: '/register',
        roles: [],
        authed: false,
        Element: Register,
    },
];

const authed: IPage[] = [
    {
        name: EPages.Home,
        path: '/home',
        roles: [ERoles.User, ERoles.Admin],
        authed: true,
        Element: Home,
    },

    {
        name: EPages.Admin,
        path: '/admin',
        roles: [ERoles.Admin],
        authed: true,
        Element: Admin,
    },
];

export const unauthedPages: IPage[] = unauthed;
export const authedPages: IPage[] = authed;

export const pages: IPage[] = [...unauthed, ...authed];
