import React from 'react';

export interface IPage {
    name: string;
    path: string;
    role: string | null;
    authed: boolean;
    Element: React.FC;
}
