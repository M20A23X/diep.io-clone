import React, { CSSProperties, HTMLAttributes, LiHTMLAttributes, ReactElement, useContext, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import cn from 'classnames';
import s from './Select.module.scss';
import { Option } from '#/components/atoms';
import { ISettingsContext, SettingsContext } from '#/contexts';

interface ISelectProps<T extends object | string> extends HTMLAttributes<HTMLDivElement> {
    name: string;
    options: T[];
    optionAttrs?: LiHTMLAttributes<HTMLLIElement>;
    renderOption?: (option: T) => ReactElement;
}

function Select<T extends object | string>(props: ISelectProps<T>) {
    const { name, options, optionAttrs, renderOption, className, tabIndex, ...attrs } = props;
    const [isActive, setActive] = useState(false);
    const [selectedOptionIdx, setSelectedOptionIdx] = useState(0);

    const settingsContext: ISettingsContext | null = useContext(SettingsContext);

    const toggleActive = () => setActive((prevState) => !prevState);
    const handleOptionClick = (index: number) => {
        setSelectedOptionIdx(index);
    };

    const OptionsAllJSX: ReactElement[] = options.map((entry: T, index) => (
        <Option
            {...optionAttrs}
            key={entry.toString() + index}
            id={entry.toString().toLowerCase() + index}
            itemId={index}
            handleClick={() => {
                if (index !== selectedOptionIdx) handleOptionClick(index);
            }}
            style={optionAttrs?.style}
        >
            {typeof entry === 'string' ? entry : renderOption?.(entry)}
        </Option>
    ));

    const OptionsJSX: ReactElement[] = [
        ...OptionsAllJSX.slice(0, selectedOptionIdx),
        ...OptionsAllJSX.slice(selectedOptionIdx + 1)
    ];

    return (
        <div
            className={cn(s.selectWrapper, className, { active: isActive })}
            onClick={() => toggleActive()}
            tabIndex={tabIndex}
            onBlur={() => setActive(false)}
        >
            <label htmlFor={name}>{name}</label>
            <div
                className={s.selectControlWrapper}
                style={settingsContext?.getUIStyle(attrs?.style)}
            >
                <div
                    id={name}
                    className={cn(s.selectControl, { [s.selectControl_active]: isActive })}
                >
                    {OptionsAllJSX[selectedOptionIdx]}
                </div>
                <FontAwesomeIcon
                    icon={isActive ? faChevronUp : faChevronDown}
                    className={s.chevron}
                />
            </div>
            {isActive ? (
                <ul
                    className={cn(s.optionsList, { [s.optionsList_active]: isActive })}
                    style={settingsContext?.getUIStyle(attrs?.style)}
                >
                    {OptionsJSX}
                </ul>
            ) : null}
        </div>
    );
}

export { Select };
