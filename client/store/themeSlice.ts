import { createSlice, PayloadAction, CaseReducer } from '@reduxjs/toolkit'

export type ThemeState = 'light' | 'dark'

// Evita que TS infiera 'light' literal, explícita que es ThemeState
const initialState = 'light' as ThemeState

const toggleThemeReducer: CaseReducer<ThemeState> = (state) =>
  state === 'light' ? 'dark' : 'light'

const setThemeReducer: CaseReducer<ThemeState, PayloadAction<ThemeState>> = (_, action) =>
  action.payload

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: setThemeReducer,
    toggleTheme: toggleThemeReducer,
  },
})

export const { setTheme, toggleTheme } = themeSlice.actions
export default themeSlice.reducer
