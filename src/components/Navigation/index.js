import { useState, useEffect } from 'react';
import { useArray } from '../../context/ArrayContext';
import {
    mergeSortAnimations,
    bubbleSortAnimations,
    insertionSortAnimations,
    quickSortAnimations,
    selectionSortAnimations,
} from '../SortingAlgorithms/';
import { useTheme } from '../../context/ThemeContext';
import './Navigation.css';

const Navigation = ({ setLoading, setShowHelper, sorting, setSorting }) => {
    const [selectedButton, setSelectedButton] = useState();
    const { array, resetArray, animationSpeed } = useArray();
    const { selectedArrayColor, arrayBarColor, sortedColor } = useTheme();

    useEffect(() => {
        if (sorting) {
            // disable all buttons and inputs while sorting animations are running
            document.querySelectorAll('button').forEach((button) => {
                button.disabled = true;
                button.style.cursor = 'initial';
            });
            document.querySelectorAll('input').forEach((input) => {
                input.disabled = true;
                input.style.cursor = 'initial';
            });
            selectedButton.classList.add('selected');
            setShowHelper(false);
        } else {
            // reenable all buttons and inputs once animations are complete
            document.querySelectorAll('button').forEach((button) => {
                button.disabled = false;
                button.style.cursor = 'pointer';
            });
            document.querySelectorAll('input').forEach((button) => {
                button.disabled = false;
                button.style.cursor = 'pointer';
            });
            if (selectedButton) {
                selectedButton.classList.remove('selected');
            }
        }
        // eslint-disable-next-line
    }, [sorting, selectedButton]);

    const animator = (animations) => {
        const arrayBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < animations.length; i++) {
            // color change animations occur at index 0 and 2 of every triplet in animations array
            const isColorChange = i % 3 === 0 || i % 3 === 2;

            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;

                const color = i % 3 === 0 ? selectedArrayColor : arrayBarColor;

                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * Math.abs(animationSpeed));
            } else {
                setTimeout(() => {
                    // bar height animation occurs at first index of every triplet in animations array
                    const [
                        [barOneIdx, newBarOneHeight],
                        [barTwoIdx, newBarTwoHeight],
                    ] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barOneStyle.height = `${newBarOneHeight}px`;
                    barTwoStyle.height = `${newBarTwoHeight}px`;
                }, i * Math.abs(animationSpeed));
            }
        }
        for (let i = 0; i < arrayBars.length; i++) {
            // changes color of all bars once sorting is complete
            setTimeout(() => {
                arrayBars[i].style.backgroundColor = sortedColor;
            }, Math.abs(animationSpeed) * animations.length);
        }

        setTimeout(() => {
            // triggers useEffect above to reenable buttons and inputs
            setSorting(false);
        }, Math.abs(animationSpeed) * animations.length);
    };

    const resetState = () => {
        // reset bars to original position before sorting
        const arrayBars = document.querySelectorAll('.array-bar');
        for (let i = 0; i < arrayBars.length; i++) {
            arrayBars[i].style.height = `${array[i]}px`;
            arrayBars[i].style.backgroundColor = arrayBarColor;
        }
        // disables all buttons and input to prevent simultaneous algorithm runs
        setSorting(true);

        // triggers loading animation
        setLoading(true);
    };

    // sliced array is passed into each sorting algorithm to preserve the original array since the input array will be mutated

    const mergeSort = (e) => {
        resetState();
        setSelectedButton(e.target);
        setTimeout(() => {
            setLoading(false);
            const animations = mergeSortAnimations(array.slice());
            animator(animations);
        }, 300);
    };

    const bubbleSort = (e) => {
        resetState();
        setSelectedButton(e.target);
        setTimeout(() => {
            setLoading(false);
            const animations = bubbleSortAnimations(array.slice());
            animator(animations);
        }, 300);
    };

    const insertionSort = (e) => {
        resetState();
        setSelectedButton(e.target);
        setTimeout(() => {
            setLoading(false);
            const animations = insertionSortAnimations(array.slice());
            animator(animations);
        }, 300);
    };

    const quickSort = (e) => {
        resetState();
        setSelectedButton(e.target);
        setTimeout(() => {
            setLoading(false);
            const animations = quickSortAnimations(array.slice());
            animator(animations);
        }, 300);
    };

    const selectionSort = (e) => {
        resetState();
        setSelectedButton(e.target);
        setTimeout(() => {
            setLoading(false);
            const animations = selectionSortAnimations(array.slice());
            animator(animations);
        }, 300);
    };

    return (
        <div className="navigation-container">
            <div className="new-array">
                <button onClick={resetArray}>New Array</button>
            </div>
            <div className="sorting-container">
                <button onClick={(e) => bubbleSort(e)} className="sort-button">
                    Bubble
                </button>
                <button
                    onClick={(e) => insertionSort(e)}
                    className="sort-button"
                >
                    Insertion
                </button>
                <button
                    onClick={(e) => selectionSort(e)}
                    className="sort-button"
                >
                    Selection
                </button>
                <button onClick={(e) => quickSort(e)} className="sort-button">
                    Quick
                </button>
                <button onClick={(e) => mergeSort(e)} className="sort-button">
                    Merge
                </button>
            </div>
        </div>
    );
};

export default Navigation;
