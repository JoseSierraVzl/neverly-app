import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/store';
import { setLanguage } from '~/store/languageSlice';
import { FontAwesome } from '@expo/vector-icons';

const LANGUAGES = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
];

export default function LanguageSelect() {
    const language = useSelector((state: RootState) => state.language);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const current = LANGUAGES.find((l) => l.code === language);

    const handleSelect = (code: 'en' | 'es') => {
        dispatch(setLanguage(code));
        setOpen(false);
    };

    return (
        <View className="relative w-40">
            <Pressable
                onPress={() => setOpen((prev) => !prev)}
                className="flex-row items-center justify-between rounded-xl border border-gray-300 bg-white px-3 py-2 shadow">
                <Text className="text-base">{current?.label}</Text>
                <FontAwesome name={open ? 'angle-up' : 'angle-down'} size={18} />
            </Pressable>

            {open && (
                <View className="absolute z-10 mt-2 w-full rounded-xl border border-gray-300 bg-white shadow">
                    {LANGUAGES.map((lang) => (
                        <Pressable
                            key={lang.code}
                            onPress={() => handleSelect(lang.code as 'en' | 'es')}
                            className="px-3 py-2 hover:bg-gray-100">
                            <Text className="text-base">{lang.label}</Text>
                        </Pressable>
                    ))}
                </View>
            )}
        </View>
    );
}
