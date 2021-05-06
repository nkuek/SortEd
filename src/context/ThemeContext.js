import { useContext, createContext, useState } from 'react';

export const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('default');

    const themes = {
        default: {
            backgroundColor: 'white',
            navBarColor: 'black',
            arrayBarColor: 'black',
            selectedArrayColor: 'red',
            sortedColor: 'teal',
            fontColor: 'black',
            buttonColor: 'white',
            disabledButtonColor: 'gray',
            buttonHoverColor: '#bab8b8',
        },
        dracula: {
            backgroundColor: '#282a36',
            navBarColor: '#44475a',
            arrayBarColor: '#bd93f9',
            selectedArrayColor: '#50fa7b',
            sortedColor: '#ff79c6',
            fontColor: '#f8f8f2',
            buttonColor: '#44475a',
            disabledButtonColor: '#828282',
            buttonHoverColor: '#50fa7b',
        },
        nautilus: {
            backgroundColor: '#132237',
            navBarColor: '#0b4c6c',
            arrayBarColor: '#1cbaac',
            selectedArrayColor: '#A42529',
            sortedColor: '#ebb723',
            fontColor: 'white',
            buttonColor: '#0b4c6c',
            disabledButtonColor: '#0e1a29',
            buttonHoverColor: '#ebb723',
        },
        monokai: {
            backgroundColor: '#272822',
            navBarColor: '#272822',
            arrayBarColor: '#A6E22E',
            selectedArrayColor: '#E6DB74',
            sortedColor: '#f9357c',
            fontColor: 'white',
            buttonColor: '#272822',
            disabledButtonColor: '#1D1E1A',
            buttonHoverColor: 'white',
        },
    };

    let {
        backgroundColor,
        navBarColor,
        arrayBarColor,
        selectedArrayColor,
        sortedColor,
        fontColor,
        buttonColor,
        disabledButtonColor,
        buttonHoverColor,
    } = themes[theme];

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
