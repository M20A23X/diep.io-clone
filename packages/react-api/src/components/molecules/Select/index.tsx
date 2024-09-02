import React, { CSSProperties, ReactElement, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import cn from 'classnames';
import s from './Select.module.scss';
import { Option } from '#/components/atoms';

interface ISelectProps<T extends object | string> {
    name: string;
    options: T[];
    getOptionHtml: (entry: T) => ReactElement;
    getOptionStyle?: (entry: T) => CSSProperties;
    tabIndex: number;
    className: string;
}

function Select<T extends object | string>(props: ISelectProps<T>) {
    const { name, options, getOptionStyle, getOptionHtml, className, tabIndex } = props;
    const [isActive, setActive] = useState(false);
    const [selectedOptionIdx, setSelectedOptionIdx] = useState(0);

    const toggleActive = () => setActive((prevState) => !prevState);
    const handleOptionClick = (index: number) => {
        setSelectedOptionIdx(index);
        setActive(false);
    };

    const OptionsJSX: ReactElement[] = options.map((entry: T, index) => (
        <Option
            key={entry.toString() + index}
            itemId={index}
            handleClick={() => handleOptionClick(index)}
            style={getOptionStyle?.(entry) ?? {}}
            onBlur={() => setActive(false)}
            onBlurCapture={() => setActive(false)}
        >
            {getOptionHtml(entry)}
        </Option>
    ));

    const Options = isActive
        ? [...OptionsJSX.slice(0, selectedOptionIdx), ...OptionsJSX.slice(selectedOptionIdx + 1)]
        : OptionsJSX[selectedOptionIdx];

    return (
        <div
            className={cn(s.selectWrapper, className, { active: isActive })}
            onClick={() => toggleActive()}
            tabIndex={tabIndex}
            onBlur={() => setActive(false)}
        >
            <label htmlFor={name}>{name}</label>
            <div className={s.selectControlWrapper}>
                <div
                    id={name}
                    className={s.selectControl}
                >
                    {OptionsJSX[selectedOptionIdx]}
                </div>
                <FontAwesomeIcon
                    icon={isActive ? faChevronUp : faChevronDown}
                    className={s.chevron}
                />
            </div>
            {isActive ? <ul className={s.optionsList}>{Options}</ul> : null}
        </div>
    );
}

export { Select };
