import { ERole } from 'app/enums';
import React from 'react';

export interface IPage {
    name: string;
    path: string;
    roles: ERole[];
    authed: boolean;
    Element: React.FC;
}
