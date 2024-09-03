import React, { FC } from 'react';

import s from './App.module.scss';

import { SettingsProvider } from '#/providers';
import { MainScreen } from '#/components/pages';

const App: FC = () => {
    return (
        <SettingsProvider>
            <div className={s.wrapper}>
                <div className={s.content}>
                    <MainScreen />
                </div>
            </div>
        </SettingsProvider>
    );
};

export default App;
