import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import i18n from './i18nProvider';
import { RootState } from '~/store';

export function LanguageProvider() {
    const language = useSelector((state: RootState) => state.language);

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language]);

    return null;
}
