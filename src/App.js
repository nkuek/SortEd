import { useState, useEffect } from 'react';
import { useArray } from './context/ArrayContext';
import Navigation from './components/Navigation';
import SortingVisualizer from './components/SortingVisualizer';
import { useMediaQuery } from 'react-responsive';
import { useTheme } from './context/ThemeContext';

function App() {
    document.body.style.height = `${window.innerHeight}px`;
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
    const { array, arrayLength, setArrayLength, resetArray } = useArray();
    const [isLoaded, setIsLoaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [sorted, setSorted] = useState(false);
    const {
        theme,
        setTheme,
        backgroundColor,
        navBarColor,
        arrayBarColor,
        buttonColor,
        fontColor,
        buttonHoverColor,
        buttonFontColor,
    } = useTheme();

    useEffect(() => {
        if (isMobile) setArrayLength(20);
        else setArrayLength(40);
    }, [isMobile]);

    useEffect(() => {
        resetArray();
        setSorted(false);
        document.querySelectorAll('.array-bar').forEach((array) => {
            array.style.backgroundColor = arrayBarColor;
        });
    }, [arrayLength]);

    useEffect(() => {
        if (isLoaded) {
            const root = document.querySelector(':root');
            root.style.setProperty('--background', backgroundColor);
            root.style.setProperty('--foreground', navBarColor);
            root.style.setProperty('--button-color', buttonColor);
            root.style.setProperty('--font-color', fontColor);
            root.style.setProperty('--array-bar-color', arrayBarColor);
            root.style.setProperty('--button-hover', buttonHoverColor);
            root.style.setProperty('--button-font-color', buttonFontColor);
            document.querySelectorAll('.array-bar').forEach((array) => {
                array.style.backgroundColor = arrayBarColor;
            });
            document.querySelector('.MuiSelect-select').style.color = fontColor;
            document.querySelector('.MuiSelect-icon').style.color = fontColor;
            // document.querySelector(
            //     '.navigation-container'
            // ).style.backgroundColor = navBarColor;
            // document.querySelector(
            //     '.array-container'
            // ).style.backgroundColor = backgroundColor;

            // document.querySelectorAll('button').forEach((button) => {
            //     button.style.backgroundColor = buttonColor;
            //     button.style.color = fontColor;
            // });
        }
    }, [theme, isLoaded]);

    useEffect(() => {
        if (array.length > 0) {
            if (localStorage.getItem('theme'))
                setTheme(JSON.parse(localStorage.getItem('theme')));
            setIsLoaded(true);
            document.querySelectorAll('.array-bar').forEach((array) => {
                array.style.backgroundColor = arrayBarColor;
            });
        }
    }, [array]);

    return (
        <>
            <Navigation
                setLoading={setLoading}
                sorted={sorted}
                setSorted={setSorted}
            />
            <SortingVisualizer loading={loading} />
        </>
    );
}

export default App;
