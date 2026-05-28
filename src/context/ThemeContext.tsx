import { createContext, useState } from 'react';
import type { ReactNode } from 'react';

type ThemeContextType = {
    backgroundId: string;
    fontId: string;
    setBackgroundId: (id: string) => void;
    setFontId: (id: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [backgroundId, setBackgroundId] = useState<string>(() => {
        return localStorage.getItem('backgroundId') || 'black';
    });
    const [fontId, setFontId] = useState<string>(() => {
        return localStorage.getItem('fontId') || 'default';
    });

    const handleSetBackgroundId = (id: string) => {
        setBackgroundId(id);
        localStorage.setItem('backgroundId', id);
    };

    const handleSetFontId = (id: string) => {
        setFontId(id);
        localStorage.setItem('fontId', id);
    };

    return (
        <ThemeContext.Provider value={{
            backgroundId,
            fontId,
            setBackgroundId: handleSetBackgroundId,
            setFontId: handleSetFontId
        }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContext;
