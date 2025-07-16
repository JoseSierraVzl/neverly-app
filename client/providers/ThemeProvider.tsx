import { View } from 'react-native'
import { vars } from 'nativewind'
import { useSelector } from 'react-redux'
import { RootState } from '~/store'

const themes = {
  light: vars({
    '--color-primary': '#4F46E5',
    '--color-secondary': '#6366F1',
    '--color-background': '#F9FAFB',
    '--color-primary-dark': '#111827',
    '--color-secondary-light': '#111827',
    '--color-error': '#EF4444',
  }),
  dark: vars({
    '--color-primary': '#F9FAFB',
    '--color-secondary': '#4F46E5',
    '--color-background': '#111827',
    '--color-primary-dark': '#F9FAFB',
    '--color-secondary-light': '#D1D5DB',
    '--color-error': '#F87171',
  }),
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSelector((state: RootState) => state.theme)

  return (
    <View style={themes[theme]} className="flex-1">
      {children}
    </View>
  )
}
