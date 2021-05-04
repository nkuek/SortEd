import './SortingVisualizer.css';
import { BeatLoader } from 'react-spinners';

const SortingVisualizer = ({ array, setArrayLength, loading }) => {
    return (
        <>
            {loading && (
                <div className="loading-container">
                    <BeatLoader color={'white'} />
                </div>
            )}
            <div className="array-size-container">
                <input
                    onChange={(e) => setArrayLength(e.target.value)}
                    type="range"
                    min="20"
                    max="200"
                    step="10"
                    value={array.length}
                ></input>
            </div>
            <div className="array-container">
                {array.map((value, idx) => (
                    <div
                        className="array-bar"
                        key={idx}
                        style={{ height: `${value}px` }}
                    ></div>
                ))}
            </div>
        </>
    );
};

export default SortingVisualizer;
