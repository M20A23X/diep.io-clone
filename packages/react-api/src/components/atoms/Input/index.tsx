import React, {
    ChangeEvent,
    CSSProperties,
    FC,
    FormEvent,
    InputHTMLAttributes,
    MouseEvent,
    MutableRefObject,
    ReactElement,
    useContext,
    useEffect,
    useRef,
    useState
} from 'react';
import { v4 } from 'uuid';
import cn from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';

import s from './Input.module.scss';
import variables from '#/styles/export.module.scss';

import { ISettingsContext, SettingsContext } from '#/contexts';

const STEP_DIVIDER_DEFAULT = 100;
const THUMB_WIDTH: number = parseFloat(variables.inputRangeThumbWidth);

const parseNumberValue = (value: string | number) => (typeof value === 'number' ? value : parseFloat(value));

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    value?: number | string;
    units?: string;
    handleValue: (value: number | string) => void;
}

const Input: FC<IInputProps> = (props: IInputProps) => {
    const {
        units,
        handleValue,
        style,
        value: initialValue,
        checked,
        onChange,
        onClick,
        step,
        onInput,
        ...attrs
    } = props;

    const settingsContext: ISettingsContext | null = useContext(SettingsContext);
    const inputRef: MutableRefObject<HTMLInputElement | null> = useRef(null);

    const [value, setValue] = useState<number | string | undefined>(
        checked !== undefined ? checked.toString() : initialValue
    );
    const [clientWidth, setClientWidth] = useState<number>(0);

    useEffect(() => {
        if (inputRef.current?.clientWidth) setClientWidth(inputRef.current.clientWidth);
    }, [inputRef.current]);

    const inputStyle: CSSProperties | undefined = settingsContext?.getUIStyle(style);

    let InputJSX: ReactElement;
    // eslint-disable-next-line sonarjs/no-small-switch
    switch (attrs.type) {
        case 'checkbox':
            const handleCheckBoxValueChange = (event: ChangeEvent<HTMLInputElement>) => {
                const newValue: string = event.target.checked.toString();
                setValue(newValue);
                onChange?.(event);
                if (newValue !== undefined) handleValue(newValue);
            };

            const checkboxId: string = attrs.id ?? v4();
            const boolValue: boolean = value === true.toString();

            InputJSX = (
                <span>
                    <label
                        htmlFor={checkboxId}
                        className={s.container}
                    >
                        <span className={s.value}>{boolValue ? 'On' : 'Off'}</span>
                        <FontAwesomeIcon
                            icon={boolValue ? faToggleOn : faToggleOff}
                            className={cn(s.inputCheckBox, { [s.checked]: boolValue })}
                        />
                    </label>
                    <input
                        {...attrs}
                        id={checkboxId}
                        checked={boolValue}
                        onChange={handleCheckBoxValueChange}
                        className={s.inputCheckBox_native}
                    />
                </span>
            );
            break;
        case 'range':
            const handleInput = (event: FormEvent<HTMLInputElement>) => {
                setValue(parseFloat(event.currentTarget.value));
                onInput?.(event);
            };
            const handleRangeValueChange = (event: MouseEvent<HTMLInputElement>) => {
                onClick?.(event);
                if (value !== undefined) handleValue(value);
            };
            const min: number = parseNumberValue(attrs.min ?? '0');
            const max: number = parseNumberValue(attrs.max ?? '100');
            const rangeStep: number = step ? parseNumberValue(step) : max / STEP_DIVIDER_DEFAULT;
            const progressWidth: string =
                ((clientWidth - THUMB_WIDTH) * ((value as number) - min)) / (max - min) + 0.5 * THUMB_WIDTH + 'px';

            InputJSX = (
                <span className={s.container}>
                    <label className={s.value}>
                        {value}
                        {units}
                    </label>
                    <input
                        {...attrs}
                        value={value}
                        ref={inputRef}
                        step={rangeStep}
                        style={{ ...inputStyle, width: progressWidth }}
                        onInput={handleInput}
                        onClick={handleRangeValueChange}
                        className={s.inputRange}
                    />
                </span>
            );

            break;
        default:
            const handleTextValueChange = (event: ChangeEvent<HTMLInputElement>) => {
                setValue(event.target.value);
                onChange?.(event);
                if (value !== undefined) handleValue(value);
            };

            InputJSX = (
                <input
                    {...attrs}
                    value={value}
                    style={inputStyle}
                    onChange={handleTextValueChange}
                />
            );
            break;
    }

    return <>{InputJSX}</>;
};
export { Input };
