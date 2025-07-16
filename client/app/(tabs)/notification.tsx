import { Stack } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Notification' }} />
      <View style={styles.container}>
        <Text>Notification</Text>
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
