import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';

import { authedPages, unauthedPages } from './pages';
import { useRecoilValue } from 'recoil';
import userAtom from './atoms/user';

const Router: React.FC = () => {
    const user = useRecoilValue(userAtom);

    let pages = !!user ? authedPages : unauthedPages;

    pages = pages.filter((page) =>
        page.role ? user?.role.name === page.role : true,
    );

    return (
        <BrowserRouter>
            <Routes>
                {pages.map(({ path, Element }) => (
                    <Route key={path} path={path} element={<Element />} />
                ))}

                <Route
                    path="*"
                    element={
                        <Navigate replace to={!!user ? '/home' : '/login'} />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
