import { Stack } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';
import LanguageSelect from '~/components/features/LanguageSelect';
import { useTheme } from '~/providers/ThemeProvider';

export default function Home() {
    const { getColor } = useTheme();

    return (
        <>
            <Stack.Screen
                options={{
                    title: 'Profile',
                    headerShadowVisible: false,
                    headerTintColor: getColor('primaryDark'),
                    headerStyle: {
                        backgroundColor: getColor('secondary10'),
                    },
                }}
            />            <View style={styles.container} className="bg-secondary-10">
                <Text>Profile</Text>
                <LanguageSelect />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
});
