import { EPages, ERoles } from 'app/enums';
import React from 'react';

export interface IPage {
    name: EPages;
    path: string;
    roles: ERoles[];
    authed: boolean;
    Element: React.FC;
}
