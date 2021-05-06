import { useContext, createContext, useState } from 'react';

export const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dracula');

    const themes = {
        default: [
            'white',
            'black',
            'black',
            'red',
            'teal',
            'black',
            'white',
            'gray',
            '#bab8b8',
        ],
        dracula: [
            '#282a36',
            '#44475a',
            '#bd93f9',
            '#50fa7b',
            '#ff79c6',
            '#f8f8f2',
            '#44475a',
            '#828282',
            '#50fa7b',
        ],
        nautilus: [
            '#132237',
            '#0b4c6c',
            '#1cbaac',
            '#A42529',
            '#ebb723',
            'white',
            '#0b4c6c',
            '#0e1a29',
            '#ebb723',
        ],
    };

    let [
        backgroundColor,
        navBarColor,
        arrayBarColor,
        selectedArrayColor,
        sortedColor,
        fontColor,
        buttonColor,
        disabledButtonColor,
        buttonHoverColor,
    ] = themes[theme];

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
                backgroundColor,
                navBarColor,
                arrayBarColor,
                selectedArrayColor,
                sortedColor,
                fontColor,
                buttonColor,
                disabledButtonColor,
                buttonHoverColor,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
