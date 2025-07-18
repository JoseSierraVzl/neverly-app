import { Stack } from 'expo-router';
import { View, Text } from 'react-native';
import { useTheme } from '~/providers/ThemeProvider';
import { useTranslation } from 'react-i18next';

export default function Home() {
    const { getColor } = useTheme();
    const { t } = useTranslation();
    return (
        <>
            <Stack.Screen
                options={{
                    title: 'Home',
                    headerShadowVisible: false,
                    headerTintColor: getColor('primaryDark'),
                    headerStyle: {
                        backgroundColor: getColor('secondary10'),
                    },
                }}
            />
            <View className="flex-1 bg-secondary-10 p-6">
                <Text className="text-primary-dark">{t('welcome')}</Text>
            </View>
        </>
    );
}
