import React, { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FC, ReactElement } from 'react';
import { v4 } from 'uuid';

import { Page } from '#/types';

interface RouterProviderProps {
    pages: Page[];
}

const RouterProvider: FC<RouterProviderProps> = (props) => {
    const { pages } = props;

    const RoutesJSX: ReactElement[] = pages.map((page: Page) => (
        <Route
            key={v4()}
            path={page.path}
            element={page.element}
        />
    ));

    return (
        <BrowserRouter>
            <Routes>{RoutesJSX}</Routes>
        </BrowserRouter>
    );
};

export { RouterProvider };
