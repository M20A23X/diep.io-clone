import React, { FC, ReactElement, useContext } from 'react';
import { v4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';

import sm from '../../Menu.module.scss';
import s from './Settings.module.scss';

import { ISettingsContext, SettingsContext } from '#/contexts';

import { Collapsible } from '#/components/molecules';
import { Button, Input } from '#/components/atoms';

type UISetting = { name: string; getElement: (settingsCtx: ISettingsContext | null) => ReactElement };
const UI_SETTINGS: UISetting[] = [
    {
        name: 'UI Scale',
        getElement: (settingsCtx) => (
            <Input
                type={'range'}
                value={settingsCtx?.value.uiScale}
                min={0.5}
                max={2}
                units={'x'}
                handleValue={(value) => settingsCtx?.updateSettings({ uiScale: value as number })}
            />
        )
    },
    {
        name: 'Hide In-Game Exit Button',
        getElement: (settingsCtx) => (
            <Input
                type={'checkbox'}
                checked={settingsCtx?.value.hideExitBtn}
                handleValue={(value) => settingsCtx?.updateSettings({ hideExitBtn: value === true.toString() })}
            />
        )
    },
    {
        name: 'UI Border Radius',
        getElement: (settingsCtx) => (
            <Input
                type={'range'}
                value={settingsCtx?.value.uiBorderRadiusRem}
                min={0.25}
                max={4}
                step={0.05}
                units={'x'}
                handleValue={(value) => settingsCtx?.updateSettings({ uiBorderRadiusRem: value as number })}
            />
        )
    },
    {
        name: 'UI Border Intensity',
        getElement: (settingsCtx) => (
            <Input
                type={'range'}
                value={settingsCtx?.value.uiBorderIntensityPercent}
                step={5}
                units={'%'}
                handleValue={(value) => settingsCtx?.updateSettings({ uiBorderIntensityPercent: value as number })}
            />
        )
    },
    {
        name: 'Retina Resolution',
        getElement: (settingsCtx) => (
            <Input
                type={'checkbox'}
                checked={settingsCtx?.value.retinaResolution}
                handleValue={(value) => settingsCtx?.updateSettings({ retinaResolution: value === true.toString() })}
            />
        )
    },
    {
        name: 'Ignore Keyboard Layout',
        getElement: (settingsCtx) => (
            <Input
                type={'checkbox'}
                checked={settingsCtx?.value.ignoreKeyboardLayout}
                handleValue={(value) =>
                    settingsCtx?.updateSettings({ ignoreKeyboardLayout: value === true.toString() })
                }
            />
        )
    }
];

const Settings: FC = () => {
    const settingsCtx: ISettingsContext | null = useContext(SettingsContext);

    const ListItemsJSX: ReactElement[] = UI_SETTINGS.map((entry: UISetting) => (
        <li
            key={v4()}
            className={'tab tab_special'}
        >
            <span>{entry.name}</span>
            {entry.getElement(settingsCtx)}
        </li>
    ));

    return (
        <>
            <hr className={'tab_divider'} />
            <Collapsible
                ListItemsJSX={ListItemsJSX}
                isOpenedInitial={true}
            >
                <FontAwesomeIcon
                    icon={faWrench}
                    className={sm.tab_icon}
                />
                <span>General</span>
                <Button
                    className={s.settings_resetBtn}
                    onClick={(event) => {
                        event.stopPropagation();
                        settingsCtx?.resetSettings();
                    }}
                >
                    Reset All
                </Button>
            </Collapsible>
        </>
    );
};
export { Settings };
