import { useContext, createContext, useState } from 'react';

export const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('Default');

    const themes = {
        Default: {
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
        Dracula: {
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
        Nautilus: {
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
        Monokai: {
            backgroundColor: '#272822',
            navBarColor: '#272822',
            arrayBarColor: '#A6E22E',
            selectedArrayColor: '#f9357c',
            sortedColor: '#f9357c',
            fontColor: 'white',
            buttonColor: '#272822',
            disabledButtonColor: '#1D1E1A',
            buttonHoverColor: 'white',
            buttonFontColor: 'black',
        },
        Phantom: {
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
        Carbon: {
            backgroundColor: '#575D5E',
            navBarColor: '#575D5E',
            arrayBarColor: '#E3D9C6',
            selectedArrayColor: '#ED6B21',
            sortedColor: '#ED6B21',
            fontColor: '#E3D9C6',
            buttonColor: '#575D5E',
            disabledButtonColor: '#828282',
            buttonHoverColor: '#ED6B21',
            buttonFontColor: '#E3d9c6',
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
                themes,
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
