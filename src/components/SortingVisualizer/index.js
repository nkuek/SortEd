import './SortingVisualizer.css';
import { BeatLoader } from 'react-spinners';
import { useArray } from '../../context/ArrayContext';

const SortingVisualizer = ({ loading }) => {
    const {
        array,
        arrayLength,
        setArrayLength,
        animationSpeed,
        setAnimationSpeed,
    } = useArray();

    return (
        <>
            {loading && (
                <div className="loading-container">
                    <BeatLoader color={'white'} />
                </div>
            )}
            <div className="array-option-container">
                <div className="array-size-container">
                    <label>Size</label>
                    <input
                        onChange={(e) => {
                            setArrayLength(e.target.value);
                        }}
                        type="range"
                        min="10"
                        max="100"
                        step="10"
                        value={array.length}
                    ></input>
                </div>
                <div className="array-speed-container">
                    <label>Speed</label>
                    <input
                        onChange={(e) => setAnimationSpeed(e.target.value)}
                        type="range"
                        min="-153"
                        max="-3"
                        step="-50"
                        value={animationSpeed}
                    ></input>
                </div>
            </div>
            <div className="array-container">
                {array.map((value, idx) => (
                    <div
                        className="array-bar"
                        key={idx}
                        style={{
                            width: `${Math.floor(
                                window.innerWidth / arrayLength
                            )}px`,
                            height: `${value}px`,
                        }}
                    ></div>
                ))}
            </div>
        </>
    );
};

export default SortingVisualizer;
