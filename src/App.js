import { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import SortingVisualizer from './components/SortingVisualizer';

const generateRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function App() {
    const [array, setArray] = useState([]);
    const [loading, setLoading] = useState(false);
    const [arrayLength, setArrayLength] = useState(200);

    const resetArray = () => {
        const arrayBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < arrayBars.length; i++) {
            arrayBars[i].style.backgroundColor = 'black';
        }
        const array = [];
        for (let i = 0; i < arrayLength; i++) {
            array.push(generateRandomInt(50, 1000));
        }
        setArray(array);
    };

    useEffect(() => {
        resetArray();
    }, []);

    useEffect(() => {
        resetArray();
    }, [arrayLength]);
    return (
        <>
            <Navigation
                resetArray={resetArray}
                array={array}
                setLoading={setLoading}
            />
            <SortingVisualizer
                resetArray={resetArray}
                setArrayLength={setArrayLength}
                array={array}
                loading={loading}
            />
        </>
    );
}

export default App;
