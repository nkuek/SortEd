import { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import SortingVisualizer from './components/SortingVisualizer';

function App() {
    const [array, setArray] = useState([]);
    const [loading, setLoading] = useState(false);

    const resetArray = () => {
        const arrayBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < arrayBars.length; i++) {
            arrayBars[i].style.backgroundColor = 'black';
        }
        const array = [];
        const generateRandomInt = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };
        for (let i = 0; i < 200; i++) {
            array.push(generateRandomInt(50, 1000));
        }
        setArray(array);
    };

    useEffect(() => {
        resetArray();
    }, []);
    return (
        <>
            <Navigation
                resetArray={resetArray}
                array={array}
                setLoading={setLoading}
            />
            <SortingVisualizer
                setArray={setArray}
                array={array}
                loading={loading}
            />
        </>
    );
}

export default App;
