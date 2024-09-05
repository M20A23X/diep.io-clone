import React, { FC, ReactElement, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChessBoard,
    faChevronLeft,
    faClose,
    faExternalLink,
    faGear,
    faListSquares,
    faQuestionCircle,
    faUsers,
    IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';

import { Changelog, Settings, Socials, Support } from './Tabs';

import s from './Menu.module.scss';

import { Button } from '#/components/atoms';

type MenuTab = 'Settings' | 'Support' | 'Socials' | 'Changelog';
type Tab = { icon: IconDefinition; name: MenuTab; element: ReactElement };

const MENU_TABS: Tab[] = [
    { icon: faGear, name: 'Settings', element: <Settings /> },
    { icon: faQuestionCircle, name: 'Support', element: <Support /> },
    { icon: faUsers, name: 'Socials', element: <Socials /> },
    { icon: faListSquares, name: 'Changelog', element: <Changelog /> }
];

const Menu: FC = () => {
    const [isMenuOpened, setMenuOpenState] = useState<boolean>(false);
    const [openedTabIdx, setOpenedTabIdx] = useState<number | null>(null);

    const MenuTabsJSX: ReactElement[] = MENU_TABS.map((tab: Tab, index) => (
        <>
            <hr className={'tab_divider'} />
            <h2
                key={tab.name}
                className={'tab'}
                onClick={() => {
                    setOpenedTabIdx(index);
                    setMenuOpenState(false);
                }}
            >
                <FontAwesomeIcon
                    icon={tab.icon}
                    className={'tab_icon'}
                />
                <span>{tab.name}</span>
            </h2>
        </>
    ));

    let OpenedTabJSX: ReactElement | null = null;
    if (openedTabIdx !== null) {
        const { name, icon, element }: Tab = MENU_TABS[openedTabIdx];
        OpenedTabJSX = (
            <div className={s.tab_wrapper}>
                <h1 className={'tab tab_special'}>
                    <span>
                        <FontAwesomeIcon
                            icon={icon}
                            className={s.tab_icon}
                        />
                        <span className={s.tab_name}>{name}</span>
                    </span>
                    <FontAwesomeIcon
                        icon={faClose}
                        className={'tab_special_icon'}
                        onClick={() => setOpenedTabIdx(null)}
                    />
                </h1>
                {element}
            </div>
        );
    }

    return (
        <>
            <Button
                className={cn(s.menu_btn, { [s.menu_btn__pressed]: isMenuOpened })}
                onClick={() => setMenuOpenState(true)}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
                <span>&nbsp;Menu</span>
            </Button>
            <div className={s.menu_wrapper}>
                <div className={isMenuOpened ? s.sidebar_animator__opened : s.sidebar_animator__closed}>
                    <div className={s.sidebar}>
                        <h1
                            className={cn('tab', 'tab_special')}
                            onClick={() => setMenuOpenState(false)}
                        >
                            <span>MENU</span>
                            <FontAwesomeIcon
                                icon={faClose}
                                className={'tab_special_icon'}
                            />
                        </h1>
                        {MenuTabsJSX}
                        <hr className={'tab_divider'} />
                        <h2
                            className={cn('tab', 'tab_special')}
                            onClick={() => {
                                window.open('https://iogames.space/', '_blank', 'noopener noreferrer');
                            }}
                        >
                            <span>
                                <FontAwesomeIcon
                                    icon={faChessBoard}
                                    className={'tab_icon'}
                                />
                                <span>io Games</span>
                            </span>
                            <a href={'https://iogames.space/'}>
                                <FontAwesomeIcon icon={faExternalLink} />
                            </a>
                        </h2>
                    </div>
                </div>
            </div>
            {OpenedTabJSX}
        </>
    );
};

export { Menu };
