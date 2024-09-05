import React, { FC, ReactElement, useEffect, useState } from 'react';
import { v4 } from 'uuid';

import s from './Changelog.module.scss';

type LogEntry = { date: string; html: string };
const CHANGELOG: LogEntry[] = [
    {
        date: 'BIG NEWS - September 3rb, 2024',
        html: 'Diep has officially been acquired by 3AM Experiences. For more information join the new official discord server!&nbsp;<a  href="https://discord.com/invite/P64PZaaMtv">Join now!</a>'
    },
    {
        date: 'August 28th, 2024',
        html: '<ul><li>Breakout gamemode!<ul><li>Based on the 2016 original</li></ul></li></ul>'
    }
];

const Changelog: FC = () => {
    const [changelog, setChangelog] = useState<LogEntry[]>();
    //todo
    useEffect(() => {
        console.log('todo fetching changelog...');
    }, [setChangelog]);

    const LogsSJX: ReactElement[] = CHANGELOG.map((entry: LogEntry) => (
        <>
            <hr className={'tab_divider'} />
            <div
                key={v4()}
                className={'tab tab_special'}
            >
                <span className={s.header}>{entry.date}</span>
                <span
                    dangerouslySetInnerHTML={{ __html: entry.html }}
                    className={s.html}
                />
            </div>
        </>
    ));

    return <>{LogsSJX}</>;
};
export { Changelog };
