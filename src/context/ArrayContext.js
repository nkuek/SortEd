import { useContext, createContext, useState } from 'react';

export const ArrayContext = createContext();

export const useArray = () => {
    return useContext(ArrayContext);
};

const generateRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const ArrayProvider = ({ children }) => {
    const [array, setArray] = useState([]);
    const [arrayLength, setArrayLength] = useState(0);
    const [animationSpeed, setAnimationSpeed] = useState(-3);

    const resetArray = () => {
        const array = [];
        for (let i = 0; i < arrayLength; i++) {
            array.push(generateRandomInt(50, window.innerHeight * 0.8));
        }
        setArray(array);
    };

    return (
        <ArrayContext.Provider
            value={{
                array,
                setArray,
                resetArray,
                arrayLength,
                setArrayLength,
                animationSpeed,
                setAnimationSpeed,
            }}
        >
            {children}
        </ArrayContext.Provider>
    );
};
