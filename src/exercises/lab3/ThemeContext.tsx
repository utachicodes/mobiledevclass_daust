import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define theme colors
export const themes = {
    light: {
        background: '#f8f9fa',
        text: '#212529',
        card: '#ffffff',
        primary: '#007AFF',
        secondary: '#6c757d',
        border: '#dee2e6',
    },
    dark: {
        background: '#121212',
        text: '#f8f9fa',
        card: '#1e1e1e',
        primary: '#0a84ff',
        secondary: '#adb5bd',
        border: '#2c2c2c',
    },
};

type ThemeType = 'light' | 'dark';
type ThemeColors = typeof themes.light;

interface ThemeContextType {
    theme: ThemeType;
    colors: ThemeColors;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<ThemeType>('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const value = {
        theme,
        colors: themes[theme],
        toggleTheme,
    };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
