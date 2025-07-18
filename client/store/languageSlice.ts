import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type LanguageState = 'en' | 'es';

const initialState = 'en' as LanguageState;

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (_, action: PayloadAction<LanguageState>) => action.payload,
    },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
