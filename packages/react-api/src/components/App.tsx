import React, { FC } from 'react';
import s from './App.module.scss';
import { Menu } from '#/components/pages';

const App: FC = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <Menu />
            </div>
        </div>
    );
};

export default App;
