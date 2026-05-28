import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useSomething must be used within a SomeProvider');
    }
    return context;
}
