import { useContext, createContext, useState } from 'react';

export const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('default');

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
            '#bd93f9',
            '#828282',
            '#50fa7b',
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
