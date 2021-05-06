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
        backgroundColor,
        navBarColor,
        arrayBarColor,
        buttonColor,
        fontColor,
        buttonHoverColor,
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
            document.querySelectorAll('.array-bar').forEach((array) => {
                array.style.backgroundColor = arrayBarColor;
            });
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
            setIsLoaded(true);
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
