import React, { FC } from 'react';
import s from './App.module.scss';
import { MainScreen } from '#/components/pages';

const App: FC = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <MainScreen />
            </div>
        </div>
    );
};

export default App;
