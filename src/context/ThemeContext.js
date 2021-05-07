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
            buttonFontColor: 'black',
        },
        dracula: {
            backgroundColor: '#282a36',
            navBarColor: '#282a36',
            arrayBarColor: '#bd93f9',
            selectedArrayColor: '#50fa7b',
            sortedColor: '#ff79c6',
            fontColor: '#f8f8f2',
            buttonColor: '#282a36',
            disabledButtonColor: '#828282',
            buttonHoverColor: '#50fa7b',
            buttonFontColor: 'black',
        },
        nautilus: {
            backgroundColor: '#132237',
            navBarColor: '#132237',
            arrayBarColor: '#1cbaac',
            selectedArrayColor: '#A42529',
            sortedColor: '#ebb723',
            fontColor: 'white',
            buttonColor: '#132237',
            disabledButtonColor: '#0e1a29',
            buttonHoverColor: '#ebb723',
            buttonFontColor: 'black',
        },
        monokai: {
            backgroundColor: '#272822',
            navBarColor: '#272822',
            arrayBarColor: '#A6E22E',
            selectedArrayColor: '#88FFFF',
            sortedColor: '#f9357c',
            fontColor: 'white',
            buttonColor: '#272822',
            disabledButtonColor: '#1D1E1A',
            buttonHoverColor: 'white',
            buttonFontColor: 'black',
        },
        phantom: {
            backgroundColor: '#211333',
            navBarColor: '#211333',
            arrayBarColor: '#eed484',
            selectedArrayColor: '#5C1D40',
            sortedColor: '#5C1D40',
            fontColor: '#EEd484',
            buttonColor: '#211333',
            disabledButtonColor: '#828282',
            buttonHoverColor: '#2E1A47',
            buttonFontColor: '#EEd484',
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
        buttonFontColor,
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
                buttonFontColor,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
