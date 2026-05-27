import { createContext, useState} from 'react';

type ThemeContextType = {
    backgroundId: string;
    fontId: string;
    setBackgroundId: (id: string) => void;
    setFontId: (id: string) => void;
}

const ThemeContext = createContext<ThemeContextType>({
    backgroundId: 'black',
    fontId: 'default',
    setBackgroundId: () => {},
    setFontId: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [backgroundId, setBackgroundId] = useState('black');
    const [fontId, setFontId] = useState('default');

    return (
        <ThemeContext.Provider value={{ backgroundId, fontId, setBackgroundId, setFontId }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContext;