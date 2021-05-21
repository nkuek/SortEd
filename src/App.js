import { useState, useEffect } from 'react';
import { useArray } from './context/ArrayContext';
import Navigation from './components/Navigation';
import SortingVisualizer from './components/SortingVisualizer';
import { useMediaQuery } from 'react-responsive';
import { useTheme } from './context/ThemeContext';

function App() {
    document.body.style.height = `${window.innerHeight}px`;
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
    const {
        array,
        arrayLength,
        setArrayLength,
        resetArray,
        setAnimationSpeed,
    } = useArray();
    const [sorting, setSorting] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showHelper, setShowHelper] = useState(true);
    const {
        theme,
        themes,
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
        if (sorting) return;
        if (isMobile) setArrayLength(20);
        else setArrayLength(40);
        // eslint-disable-next-line
    }, [isMobile, setArrayLength]);

    useEffect(() => {
        resetArray();
        document.querySelectorAll('.array-bar').forEach((array) => {
            array.style.backgroundColor = arrayBarColor;
        });
        // eslint-disable-next-line
    }, [arrayLength, arrayBarColor]);

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
        }
    }, [
        theme,
        isLoaded,
        backgroundColor,
        navBarColor,
        buttonColor,
        fontColor,
        buttonFontColor,
        buttonHoverColor,
        arrayBarColor,
    ]);

    useEffect(() => {
        if (array.length > 0) {
            if (
                localStorage.getItem('theme') &&
                themes[JSON.parse(localStorage.getItem('theme'))]
            ) {
                setTheme(JSON.parse(localStorage.getItem('theme')));
            }
            if (localStorage.getItem('array-size'))
                setArrayLength(JSON.parse(localStorage.getItem('array-size')));
            if (localStorage.getItem('array-speed'))
                setAnimationSpeed(
                    JSON.parse(localStorage.getItem('array-speed'))
                );
            setIsLoaded(true);
            document.querySelectorAll('.array-bar').forEach((array) => {
                array.style.backgroundColor = arrayBarColor;
            });
        }
    }, [array, arrayBarColor, setTheme, setAnimationSpeed, setArrayLength]);

    return (
        <>
            <Navigation
                setLoading={setLoading}
                setShowHelper={setShowHelper}
                sorting={sorting}
                setSorting={setSorting}
            />
            <SortingVisualizer
                loading={loading}
                showHelper={showHelper}
                sorting={sorting}
            />
        </>
    );
}

export default App;
