import '../global.css';

import { Stack } from 'expo-router';
import { Provider } from 'react-redux'
import { store } from '~/store'
import ThemeProvider from '~/providers/ThemeProvider'


export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        </Stack>
      </ThemeProvider>
    </Provider>
  )
}
