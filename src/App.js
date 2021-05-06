import { useState, useEffect } from 'react';
import { useArray } from './context/ArrayContext';
import Navigation from './components/Navigation';
import SortingVisualizer from './components/SortingVisualizer';
import { useMediaQuery } from 'react-responsive';

function App() {
    document.body.style.height = `${window.innerHeight}px`;
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
    const { arrayLength, setArrayLength, resetArray } = useArray();
    const [loading, setLoading] = useState(false);
    const [sorted, setSorted] = useState(false);

    useEffect(() => {
        if (isMobile) setArrayLength(20);
        else setArrayLength(40);
    }, [isMobile]);

    useEffect(() => {
        resetArray();
        setSorted(false);
    }, [arrayLength]);

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
