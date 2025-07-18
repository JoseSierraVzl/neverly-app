import { Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/store';
import { toggleTheme } from '~/store/themeSlice';

export default function ThemeToggle() {
    const theme = useSelector((state: RootState) => state.theme);
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTheme());
    };

    return (
        <Pressable onPress={handleToggle} className="rounded-full p-2" accessibilityLabel="Toggle Theme">
            <FontAwesome
                name={theme === 'dark' ? 'sun-o' : 'moon-o'}
                size={24}
                color={theme === 'dark' ? '#fbbf24' : '#374151'}
            />
        </Pressable>
    );
}
