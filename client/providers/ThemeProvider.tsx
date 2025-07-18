import { View } from 'react-native';
import { vars } from 'nativewind';
import { useSelector } from 'react-redux';
import { RootState } from '~/store';

const themeValues = {
    default: {
        light: {
            primary: '#4F46E5',
            secondary: '#6366F1',
            secondary10: 'rgba(99, 102, 241, 0.1)',
            background: '#F9FAFB',
            primaryDark: '#111827',
            secondaryLight: '#6B7280',
            error: '#EF4444',
        },
        dark: {
            primary: '#6366F1',
            secondary: '#4F46E5',
            secondary10: 'rgba(99, 102, 241, 0.1)',
            background: '#111827',
            primaryDark: '#F9FAFB',
            secondaryLight: '#D1D5DB',
            error: '#F87171',
        },
    },
};

const themeVars = {
    default: {
        light: vars({
            '--color-primary': themeValues.default.light.primary,
            '--color-secondary': themeValues.default.light.secondary,
            '--color-secondary-10': themeValues.default.light.secondary10,
            '--color-background': themeValues.default.light.background,
            '--color-primary-dark': themeValues.default.light.primaryDark,
            '--color-secondary-light': themeValues.default.light.secondaryLight,
            '--color-error': themeValues.default.light.error,
        }),
        dark: vars({
            '--color-primary': themeValues.default.dark.primary,
            '--color-secondary': themeValues.default.dark.secondary,
            '--color-secondary-10': themeValues.default.dark.secondary10,
            '--color-background': themeValues.default.dark.background,
            '--color-primary-dark': themeValues.default.dark.primaryDark,
            '--color-secondary-light': themeValues.default.dark.secondaryLight,
            '--color-error': themeValues.default.dark.error,
        }),
    },
};

export function useTheme() {
    const theme = useSelector((state: RootState) => state.theme);
    const currentTheme = 'default';

    return {
        themeVars: themeVars[currentTheme][theme],
        colors: themeValues[currentTheme][theme],
        isDark: theme === 'dark',
        currentTheme,
        getColor: (colorKey: keyof typeof themeValues.default.light) => {
            return themeValues[currentTheme][theme][colorKey];
        },
    };
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const { themeVars } = useTheme();

    return (
        <View style={themeVars} className="flex-1">
            {children}
        </View>
    );
}
