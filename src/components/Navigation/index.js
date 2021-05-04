import { useState, useEffect } from 'react';
import { mergeSortAnimations } from '../SortingAlgorithms/MergeSort';
import { bubbleSortAnimations } from '../SortingAlgorithms/BubbleSort';
import './Navigation.css';

const Navigation = ({ resetArray, array, setLoading }) => {
    const [sorted, setSorted] = useState(false);
    const [sorting, setSorting] = useState(false);

    useEffect(() => {
        if (sorting) {
            document.querySelectorAll('button').forEach((button) => {
                button.disabled = true;
                button.style.cursor = 'initial';
            });
        } else {
            document.querySelectorAll('button').forEach((button) => {
                button.disabled = false;
                button.style.cursor = 'pointer';
            });
        }
    }, [sorting]);

    const color1 = 'red';
    const color2 = 'black';
    const sortedColor = 'teal';
    const ANIMATION_SPEED_MS = 3;

    const animator = (animations, colorChangeLength) => {
        const arrayBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = i % colorChangeLength < 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % colorChangeLength === 0 ? color1 : color2;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
        for (let i = 0; i < arrayBars.length; i++) {
            setTimeout(() => {
                arrayBars[i].style.backgroundColor = sortedColor;
            }, ANIMATION_SPEED_MS * animations.length);
        }

        setTimeout(() => {
            setSorting(false);
            setSorted(true);
        }, ANIMATION_SPEED_MS * animations.length);
    };

    const mergeSort = () => {
        setSorting(true);
        if (sorted) resetArray();
        setTimeout(() => {
            const animations = mergeSortAnimations(array);
            animator(animations, 3);
        }, 100);
    };

    const bubbleSort = () => {
        setSorting(true);
        setLoading(true);
        if (sorted) resetArray();
        setTimeout(() => {
            setLoading(false);
            const animations = bubbleSortAnimations(array);
            animator(animations, 4);
        }, 100);
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
                    Randomize Array
                </button>
            </div>
            <div className="sorting-container">
                <button onClick={bubbleSort} className="merge-sort">
                    Bubble Sort
                </button>
                <button onClick={mergeSort} className="merge-sort">
                    Merge Sort
                </button>
                <button className="merge-sort">Quick Sort</button>
                <button className="merge-sort">Heap Sort</button>
            </div>
        </div>
    );
};

export default Navigation;
