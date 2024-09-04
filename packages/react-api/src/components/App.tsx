import React, { FC } from 'react';

import { Page } from '#/types';

import { SettingsProvider, RouterProvider } from '#/providers';

import { MainScreen, Privacy, Terms } from '#/components/pages';

const PAGES: Page[] = [
    { path: '/', element: <MainScreen /> },
    { path: '/privacy', element: <Privacy /> },
    { path: '/terms', element: <Terms /> }
];

const App: FC = () => {
    return (
        <SettingsProvider>
            <RouterProvider pages={PAGES} />
        </SettingsProvider>
    );
};

export default App;
