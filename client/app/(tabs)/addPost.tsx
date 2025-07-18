import { Stack } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';
import { useThemeColors } from '~/providers/ThemeProvider';

export default function Home() {
    const colors = useThemeColors();

    return (
        <>
            <Stack.Screen
                options={{
                    title: 'New Post',
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: colors.secondary10,
                    },
                }}
            />
            <View style={styles.container} className="bg-secondary-10">
                <Text>New Post</Text>
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
