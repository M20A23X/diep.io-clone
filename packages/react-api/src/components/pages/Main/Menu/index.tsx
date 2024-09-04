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

import { Settings } from './Settings';

import s from './Menu.module.scss';

import { Button } from '#/components/atoms';

type MenuTab = 'Settings' | 'Support' | 'Socials' | 'Changelog';

const MenuTabs: { icon: IconDefinition; text: MenuTab }[] = [
    { icon: faGear, text: 'Settings' },
    { icon: faQuestionCircle, text: 'Support' },
    { icon: faUsers, text: 'Socials' },
    { icon: faListSquares, text: 'Changelog' }
];

const Menu: FC = () => {
    const [isMenuOpened, setMenuOpenState] = useState<boolean>(false);
    const [openedTab, setOpenedTab] = useState<MenuTab | null>(null);

    const MenuTabsJSX: ReactElement[] = MenuTabs.map((tab) => (
        <>
            <hr className={'tab_divider'} />
            <h2
                key={tab.text}
                className={'tab'}
                onClick={() => {
                    setOpenedTab(tab.text);
                    setMenuOpenState(false);
                }}
            >
                <FontAwesomeIcon
                    icon={tab.icon}
                    className={'tab_icon'}
                />
                <span>{tab.text}</span>
            </h2>
        </>
    ));

    let OpenedTab: ReactElement | null;
    switch (openedTab) {
        case 'Settings':
            OpenedTab = <Settings setOpenedTab={setOpenedTab} />;
            break;
        case 'Socials':
            OpenedTab = <Settings setOpenedTab={setOpenedTab} />;
            break;
        default:
            OpenedTab = null;
            break;
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
                            <FontAwesomeIcon
                                icon={faExternalLink}
                                className={'sidebar_tab_special_icon__blue'}
                            />
                        </h2>
                    </div>
                </div>
            </div>
            {OpenedTab}
        </>
    );
};

export type { MenuTab };
export { Menu };
