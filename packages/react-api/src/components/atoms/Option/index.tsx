import React, { FC, LiHTMLAttributes, PropsWithChildren, useContext } from 'react';

import s from './Option.module.scss';

import { ISettingsContext, SettingsContext } from '#/contexts';

interface IOptionProps extends PropsWithChildren, LiHTMLAttributes<HTMLLIElement> {
    handleClick: (itemID: number) => void;
    itemId: number;
}

const Option: FC<IOptionProps> = (props: IOptionProps) => {
    const { children, itemId, handleClick, style, ...attrs } = props;
    const settingsContext: ISettingsContext | null = useContext(SettingsContext);

    return (
        <li
            {...attrs}
            itemID={itemId.toString()}
            className={s.optionWrapper}
            onClick={() => handleClick(itemId)}
            style={settingsContext?.getUIStyle(style)}
        >
            {children}
        </li>
    );
};

export { Option };
