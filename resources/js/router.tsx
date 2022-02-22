import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React, { useEffect } from 'react';

import { authedPages, unauthedPages } from './pages';
import AppBar from 'app/components/layout/AppBar';
import { useRecoilValue } from 'recoil';
import userAtom from './atoms/user';

const Router: React.FC = () => {
    const user = useRecoilValue(userAtom);

    let pages = !!user ? authedPages : unauthedPages;

    if (user) {
        pages = pages.filter((page) =>
            page.roles.length > 0
                ? page.roles.find((role) => role.valueOf() === user.role.name)
                : true,
        );
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppBar />}>
                    {pages.map(({ path, Element }) => (
                        <Route key={path} path={path} element={<Element />} />
                    ))}

                    <Route
                        path="*"
                        element={
                            <Navigate
                                replace
                                to={!!user ? '/home' : '/login'}
                            />
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
