import React, { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';

import { Menu } from './Menu';
import s from './Main.module.scss';

import { Button, Input } from '#/components/atoms';
import { Select } from '#/components/molecules';

import Logo from '#/assets/images/logo.png';
import USA from '#/assets/images/flag-usa.svg';
import GE from '#/assets/images/flag-ge.svg';

type Region = { flag: string; name: string; players: number };
type GameMode = 'Maze' | '4 Teams' | 'FFA' | 'Domination' | '2 Teams' | 'Sandbox';
type Team = 'team-blue' | 'team-red' | 'team-purple' | 'team-green';

const TEAM: Team = 'team-blue';
const GAME_MODES: GameMode[] = ['Maze', '4 Teams', 'FFA', 'Domination', '2 Teams', 'Sandbox'];
const REGIONS: Region[] = [
    { flag: USA, name: 'Los Angeles', players: 236 },
    { flag: GE, name: 'Frankfurt', players: 23 }
];
const MainScreen: FC = () => {
    const [isLoading, setLoading] = useState<boolean>(false);

    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <Menu />
                <div className={cn(s.enterForm, { [s.menu__loading]: isLoading })}>
                    <img
                        src={Logo}
                        alt='logo'
                        className={s.logo}
                    />
                    <div className={s.serverSelector}>
                        <Select
                            tabIndex={0}
                            name={'Game Mode'}
                            options={GAME_MODES}
                        />
                        <Select
                            tabIndex={1}
                            name={'Region'}
                            options={REGIONS}
                            className={s.serverSelector_region}
                            renderOption={(entry: Region) => (
                                <>
                                    <img
                                        src={entry.flag}
                                        alt={entry.name}
                                        className={s.serverSelector_region_flag}
                                    />
                                    &nbsp;
                                    {entry.name}&nbsp;
                                    <span className={s.serverSelector_region_players}>({entry.players})</span>
                                </>
                            )}
                        />
                    </div>
                    <div className={s.inputGroup}>
                        {isLoading ? (
                            <span className={s.inputGroup_loader}>Connecting...</span>
                        ) : (
                            <>
                                <Input
                                    type='text'
                                    className={s.inputGroup_username}
                                    handleValue={(value) => {
                                        console.log(value);
                                    }}
                                />
                                <Button
                                    type={'submit'}
                                    className={s.inputGroup_button}
                                >
                                    Play!
                                </Button>
                            </>
                        )}
                    </div>
                    <Button
                        className={s.copyLink}
                        id={TEAM.toLowerCase()}
                    >
                        <FontAwesomeIcon icon={faLink} />
                        <span>Copy Party Link</span>
                    </Button>
                    <div className={s.sessionBtns}>
                        <Button
                            className={s.sessionBtns_button}
                            disabled
                        >
                            Login
                        </Button>
                        <Button
                            className={s.sessionBtns_button}
                            disabled
                        >
                            Friends
                        </Button>
                        <Button className={s.sessionBtns_button}>Achievements</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { MainScreen };
