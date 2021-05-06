import { useState, useEffect } from 'react';
import { useArray } from '../../context/ArrayContext';
import {
    mergeSortAnimations,
    bubbleSortAnimations,
    insertionSortAnimations,
    quickSortAnimations,
    selectionSortAnimations,
} from '../SortingAlgorithms/';
import './Navigation.css';

const Navigation = ({ setLoading, sorted, setSorted }) => {
    const { array, resetArray, animationSpeed } = useArray();
    const [sorting, setSorting] = useState(false);

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
        }
    }, [sorting]);

    useEffect(() => {
        if (sorted) {
            document.querySelectorAll('.sort-button').forEach((button) => {
                button.disabled = true;
                button.style.cursor = 'initial';
            });
        } else {
            document.querySelectorAll('.sort-button').forEach((button) => {
                button.disabled = false;
                button.style.cursor = 'pointer';
            });
        }
    });

    const color1 = 'red';
    const color2 = 'black';
    const sortedColor = 'teal';

    const animator = (animations, colorChangeLength) => {
        // grab all DOM array-bar elements
        const arrayBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < animations.length; i++) {
            // the color change element will be different depending on the sorting algo
            // denoted by the colorChangeLength
            // see individual sorting algos for more details
            const isColorChange = i % colorChangeLength < 2;
            if (isColorChange) {
                // animations[i] contains different elements depending on if it is a color change element or not
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % colorChangeLength === 0 ? color1 : color2;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * Math.abs(animationSpeed));
            } else {
                setTimeout(() => {
                    // notice how animations[i][1] is different than above code
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
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
            // triggers resetArray function on next button click
            setSorted(true);
        }, Math.abs(animationSpeed) * animations.length);
    };

    const resetState = () => {
        setSorting(true);
        // useful for better UX for slower algos like bubble and insertion sort
        // triggers loading animation
        setLoading(true);
    };

    const mergeSort = () => {
        resetState();
        setTimeout(() => {
            setLoading(false);
            const animations = mergeSortAnimations(array);
            animator(animations, 3);
        }, 300);
    };

    const bubbleSort = () => {
        resetState();
        setTimeout(() => {
            setLoading(false);
            const animations = bubbleSortAnimations(array);
            animator(animations, 4);
        }, 200);
    };

    const insertionSort = () => {
        resetState();
        setTimeout(() => {
            setLoading(false);
            const animations = insertionSortAnimations(array);
            animator(animations, 4);
        }, 200);
    };

    const quickSort = () => {
        resetState();
        setTimeout(() => {
            setLoading(false);
            const animations = quickSortAnimations(array);
            animator(animations, 4);
        }, 300);
    };

    const selectionSort = () => {
        resetState();
        setTimeout(() => {
            setLoading(false);
            const animations = selectionSortAnimations(array);
            animator(animations, 4);
        });
    };

    return (
        <div className="navigation-container">
            <div className="new-array">
                <button
                    onClick={() => {
                        setSorted(false);
                        resetArray();
                    }}
                >
                    New Array
                </button>
            </div>
            <div className="sorting-container">
                <button onClick={bubbleSort} className="sort-button">
                    Bubble
                </button>
                <button onClick={insertionSort} className="sort-button">
                    Insertion
                </button>
                <button onClick={selectionSort} className="sort-button">
                    Selection
                </button>
                <button onClick={quickSort} className="sort-button">
                    Quick
                </button>
                <button onClick={mergeSort} className="sort-button">
                    Merge
                </button>
            </div>
        </div>
    );
};

export default Navigation;
