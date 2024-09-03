import { createContext, CSSProperties } from 'react';
import variables from '#/styles/export.module.scss';

interface ISettingsDefault {
    hideExitBtn: boolean;
    ignoreKeyboardLayout: boolean;
    retinaResolution: boolean;
    uiBorderIntensityPercent: number;
    uiBorderRadiusRem: number;
    uiScale: number;
}

interface ISettingsContext {
    value: ISettingsDefault;
    updateSettings: (settings: Partial<ISettingsDefault>) => void;
    resetSettings: () => void;
    getUIStyle: (style: CSSProperties | undefined) => CSSProperties;
}

const SettingsDefault: ISettingsDefault = {
    hideExitBtn: false,
    ignoreKeyboardLayout: false,
    retinaResolution: true,
    uiBorderIntensityPercent: 25,
    uiBorderRadiusRem: parseFloat(variables.brDefault) ?? 0.25,
    uiScale: 1
};

const SettingsContext = createContext<ISettingsContext | null>(null);

export type { ISettingsContext, ISettingsDefault };
export { SettingsContext, SettingsDefault };
