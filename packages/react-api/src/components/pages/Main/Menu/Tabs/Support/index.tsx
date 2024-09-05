import React, { FC, ReactElement } from 'react';
import { v4 } from 'uuid';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

import s from './Support.module.scss';

type Link = { name: string; link: { action: string; href: string; isExternal?: boolean } };
const LINKS: Link[] = [
    { name: 'Help Request', link: { action: 'Submit', href: 'https://example.com', isExternal: true } },
    { name: 'Privacy', link: { action: 'View', href: '/privacy/' } },
    { name: 'Terms', link: { action: 'View', href: '/terms/' } }
];

const Support: FC = () => {
    const LinksJSX: ReactElement[] = LINKS.map((entry: Link) => {
        const linkText: ReactElement = (
            <>
                <span className={s.link_text}>{entry.link.action}</span>
                <FontAwesomeIcon
                    icon={faExternalLink}
                    className={cn('tab_special_icon', s.link_icon)}
                />
            </>
        );

        return (
            <>
                <hr className={'tab_divider'} />
                <h2
                    key={v4()}
                    className={'tab tab_special'}
                >
                    <span className={s.support}>{entry.name}</span>
                    {entry.link.isExternal ? (
                        <a
                            href={'https://example.com'}
                            target={'_blank'}
                            rel='noopener noreferrer'
                        >
                            {linkText}
                        </a>
                    ) : (
                        <NavLink to={entry.link.href}>{linkText}</NavLink>
                    )}
                </h2>
            </>
        );
    });

    return LinksJSX;
};

export { Support };
