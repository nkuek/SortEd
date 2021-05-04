import { useState, useEffect } from 'react';
import { mergeSortAnimations } from '../SortingAlgorithms/MergeSort';
import { bubbleSortAnimations } from '../SortingAlgorithms/BubbleSort';
import './Navigation.css';

const Navigation = ({ resetArray, array, animationSpeed, setLoading }) => {
    const [sorted, setSorted] = useState(false);
    const [sorting, setSorting] = useState(false);

    useEffect(() => {
        if (sorting) {
            document.querySelectorAll('button').forEach((button) => {
                button.disabled = true;
                button.style.cursor = 'initial';
            });
            document.querySelectorAll('input').forEach((input) => {
                input.disabled = true;
                input.style.cursor = 'initial';
            });
        } else {
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

    const color1 = 'red';
    const color2 = 'black';
    const sortedColor = 'teal';

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
                }, i * Math.abs(animationSpeed));
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * Math.abs(animationSpeed));
            }
        }
        for (let i = 0; i < arrayBars.length; i++) {
            setTimeout(() => {
                arrayBars[i].style.backgroundColor = sortedColor;
            }, Math.abs(animationSpeed) * animations.length);
        }

        setTimeout(() => {
            setSorting(false);
            setSorted(true);
        }, Math.abs(animationSpeed) * animations.length);
    };

    const mergeSort = () => {
        if (sorted) resetArray();
        setSorting(true);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            const animations = mergeSortAnimations(array);
            animator(animations, 3);
        }, 300);
    };

    const bubbleSort = () => {
        if (sorted) resetArray();
        setSorting(true);
        setLoading(true);
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
                    New Array
                </button>
            </div>
            <div className="sorting-container">
                <button onClick={bubbleSort} className="merge-sort">
                    Bubble
                </button>
                <button onClick={mergeSort} className="merge-sort">
                    Merge
                </button>
                <button className="merge-sort">Insertion </button>
                <button className="merge-sort">Quick</button>
                <button className="merge-sort">Heap</button>
            </div>
        </div>
    );
};

export default Navigation;
