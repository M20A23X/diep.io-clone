import React, { CSSProperties, FC, PropsWithChildren, useState } from 'react';
import { ISettingsDefault, SettingsContext, SettingsDefault } from '#/contexts';

type SettingsProviderProps = PropsWithChildren;

const BORDER_COLOR_PER_INTENSITY = 0.15;

const SettingsProvider: FC<SettingsProviderProps> = (props: SettingsProviderProps) => {
    const { children } = props;
    const [settings, setSettings] = useState<ISettingsDefault>(SettingsDefault);

    const getBorderColor = (intensity: number) => {
        const rgb: number = intensity === 100 ? 85 : 0;
        const alpha: number = (BORDER_COLOR_PER_INTENSITY * intensity) / 10;
        return `rgba(${rgb},${rgb},${rgb},${alpha})`;
    };

    const getUIStyle = (style: CSSProperties | undefined = {}): CSSProperties => ({
        ...style,
        borderRadius: (settings?.uiBorderRadiusRem ?? SettingsDefault.uiBorderRadiusRem) + 'rem',
        borderColor: getBorderColor(settings?.uiBorderIntensityPercent ?? SettingsDefault.uiBorderIntensityPercent)
    });

    const updateSettings = (settings: Partial<ISettingsDefault>) =>
        setSettings((prevState: ISettingsDefault) => ({ ...prevState, ...settings }));
    const resetSettings = () => setSettings(SettingsDefault);

    return (
        <SettingsContext.Provider value={{ value: settings, updateSettings, getUIStyle, resetSettings }}>
            {children}
        </SettingsContext.Provider>
    );
};

export { SettingsProvider };
