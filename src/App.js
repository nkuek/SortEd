import { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import SortingVisualizer from './components/SortingVisualizer';
import { useMediaQuery } from 'react-responsive';

const generateRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function App() {
    document.body.style.height = `${window.innerHeight}px`;
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
    const [array, setArray] = useState([]);
    const [loading, setLoading] = useState(false);
    const [arrayLength, setArrayLength] = useState(30);
    const [animationSpeed, setAnimationSpeed] = useState(10);

    const resetArray = () => {
        const arrayBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < arrayBars.length; i++) {
            arrayBars[i].style.backgroundColor = 'black';
        }
        const array = [];
        for (let i = 0; i < arrayLength; i++) {
            array.push(generateRandomInt(50, window.innerHeight * 0.8));
        }
        setArray(array);
    };

    useEffect(() => {
        if (isMobile) setArrayLength(10);
        else setArrayLength(30);
    }, [isMobile]);

    useEffect(() => {
        resetArray();
    }, [arrayLength]);
    return (
        <>
            <Navigation
                resetArray={resetArray}
                array={array}
                setLoading={setLoading}
                animationSpeed={animationSpeed}
            />
            <SortingVisualizer
                arrayLength={arrayLength}
                setArrayLength={setArrayLength}
                array={array}
                loading={loading}
                animationSpeed={animationSpeed}
                setAnimationSpeed={setAnimationSpeed}
            />
        </>
    );
}

export default App;
