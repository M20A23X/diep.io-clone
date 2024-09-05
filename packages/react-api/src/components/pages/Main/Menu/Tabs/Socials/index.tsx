import React, { FC, ReactElement } from 'react';
import { v4 } from 'uuid';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faYoutube, faDiscord, faReddit } from '@fortawesome/free-brands-svg-icons';

import s from './Socials.module.scss';

import Fandom from '#/assets/images/fandom.svg';

type Link = { name: string; icon: IconProp; link: string };
const LINKS: Link[] = [
    { name: 'YouTube', icon: faYoutube, link: 'https://www.youtube.com/channel/UCwafGcuGGypkqpV7eZdmlSw' },
    { name: 'Discord', icon: faDiscord, link: 'https://discord.gg/P64PZaaMtv' },
    { name: 'Reddit', icon: faReddit, link: 'https://www.reddit.com/r/diepio/' },
    { name: 'Fandom', icon: Fandom, link: 'https://diepio.gamepedia.com/Diep.io_Wiki' }
];

const Socials: FC = () => {
    const LinksJSX: ReactElement[] = LINKS.map((entry: Link) => {
        const iconClassName: string = cn('tab_special_icon', s.card_icon);
        const IconJSX: ReactElement =
            typeof entry.icon === 'string' ? (
                <img
                    src={entry.icon}
                    alt={entry.name}
                    className={iconClassName}
                />
            ) : (
                <FontAwesomeIcon
                    icon={entry.icon}
                    className={iconClassName}
                />
            );

        return (
            <a
                key={v4()}
                href={entry.link}
                target={'_blank'}
                rel='noopener noreferrer'
                id={entry.name.toLowerCase()}
                className={cn(s.card, s.youtube)}
            >
                {IconJSX}
                <span>{entry.name}</span>
            </a>
        );
    });

    return (
        <>
            <hr className={'tab_divider'} />
            <div className={cn('tab tab_special', s.support)}>{LinksJSX}</div>
        </>
    );
};

export { Socials };
