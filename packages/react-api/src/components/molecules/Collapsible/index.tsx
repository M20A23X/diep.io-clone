import React, { FC, PropsWithChildren, ReactElement, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';

import s from './Collapsible.module.scss';

interface ICollapsibleProps extends PropsWithChildren {
    ListItemsJSX: ReactElement[];
    isOpenedInitial?: boolean;
}

const Collapsible: FC<ICollapsibleProps> = (props: ICollapsibleProps) => {
    const { children, ListItemsJSX, isOpenedInitial } = props;

    const [isOpened, setOpenState] = useState<boolean>(isOpenedInitial ?? false);
    const toggleOpen = () => setOpenState((prevState) => !prevState);

    return (
        <div>
            <div
                className={cn(s.clickable, 'tab')}
                onClick={() => toggleOpen()}
            >
                <div className={s.clickable_head}>{children}</div>
                <FontAwesomeIcon icon={isOpened ? faChevronUp : faChevronDown} />
            </div>
            <hr className={'tab_divider'} />
            <div className={s.list}>{isOpened ? <ul>{ListItemsJSX}</ul> : null}</div>
        </div>
    );
};

export { Collapsible };
