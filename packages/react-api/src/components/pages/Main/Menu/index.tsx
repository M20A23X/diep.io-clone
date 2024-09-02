import React, { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faClose,
    faGear,
    faQuestionCircle,
    faUsers,
    faListSquares,
    faChessBoard,
    faExternalLink,
    IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';

import s from './Menu.module.scss';

const MenuEntries: { icon: IconDefinition; text: string }[] = [
    { icon: faGear, text: 'Settings' },
    { icon: faQuestionCircle, text: 'Support' },
    { icon: faUsers, text: 'Socials' },
    { icon: faListSquares, text: 'Changelog' }
];

const Menu: FC = () => {
    const [isMenuOpened, setMenuOpened] = useState<boolean>(false);

    const EntriesJSX = MenuEntries.map((entry) => (
        <>
            <hr />
            <h2 className={s.sidebar_entry}>
                <FontAwesomeIcon
                    icon={entry.icon}
                    className={s.sidebar_entry_icon}
                />
                <span>{entry.text}</span>
            </h2>
        </>
    ));

    return (
        <>
            <button
                className={cn(s.menu_btn, { [s.menu_btn__pressed]: isMenuOpened })}
                onClick={() => setMenuOpened(true)}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
                <span>&nbsp;Menu</span>
            </button>
            <div className={s.sidebar_wrapper}>
                <div className={isMenuOpened ? s.sidebar_animator__opened : s.sidebar_animator__closed}>
                    <div className={s.sidebar}>
                        <h1
                            className={cn(s.sidebar_entry, s.sidebar_entry_special)}
                            onClick={() => setMenuOpened(false)}
                        >
                            <span>MENU</span>
                            <FontAwesomeIcon
                                icon={faClose}
                                className={s.sidebar_entry_special_icon}
                            />
                        </h1>
                        {EntriesJSX}
                        <hr />
                        <h2 className={cn(s.sidebar_entry, s.sidebar_entry_special)}>
                            <span>
                                <FontAwesomeIcon
                                    icon={faChessBoard}
                                    className={s.sidebar_entry_icon}
                                />
                                <span>io Games</span>
                            </span>
                            <FontAwesomeIcon
                                icon={faExternalLink}
                                className={s.sidebar_entry_special_icon__blue}
                            />
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export { Menu };
