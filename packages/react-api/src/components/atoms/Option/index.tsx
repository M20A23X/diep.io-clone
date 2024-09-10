import React, { FC, LiHTMLAttributes, PropsWithChildren } from 'react';

import s from './Option.module.scss';

interface IOptionProps extends PropsWithChildren, LiHTMLAttributes<HTMLLIElement> {
    handleClick: (itemID: number) => void;
    itemId: number;
}

const Option: FC<IOptionProps> = (props: IOptionProps) => {
    const { children, itemId, handleClick, style, ...attrs } = props;

    return (
        <li
            {...attrs}
            itemID={itemId.toString()}
            className={s.optionWrapper}
            onClick={() => handleClick(itemId)}
        >
            {children}
        </li>
    );
};

export { Option };
