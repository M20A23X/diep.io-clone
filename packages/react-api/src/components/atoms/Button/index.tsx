import React, { ButtonHTMLAttributes, FC, useContext } from 'react';
import { ISettingsContext, SettingsContext } from '#/contexts';

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<IButtonProps> = (props: IButtonProps) => {
    const { style, ...attrs } = props;
    const settingsContext: ISettingsContext | null = useContext(SettingsContext);
    return (
        <button
            {...attrs}
            style={settingsContext?.getUIStyle(style)}
        />
    );
};
export { Button };
