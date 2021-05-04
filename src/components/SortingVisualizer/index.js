import './SortingVisualizer.css';

const SortingVisualizer = ({ array, loading }) => {
    return (
        <>
            {loading && (
                <div className="loading-container">
                    <div className="loading">Loading...</div>
                </div>
            )}
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
