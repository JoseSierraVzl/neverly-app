// app/_layout.tsx
import '~/providers/i18nProvider';
import '../global.css';
import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import { store } from '~/store';
import ThemeProvider from '~/providers/ThemeProvider';
import { LanguageProvider } from '~/providers/LanguageProvider';

export const unstable_settings = {
    initialRouteName: '(tabs)',
};

export default function RootLayout() {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <LanguageProvider />
                <Stack>
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                </Stack>
            </ThemeProvider>
        </Provider>
    );
}
