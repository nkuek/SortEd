import './SortingVisualizer.css';
import { BeatLoader } from 'react-spinners';
import { useArray } from '../../context/ArrayContext';
import { useTheme } from '../../context/ThemeContext';
import { Select, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const root = document.querySelector(':root');
const fontColor = getComputedStyle(root).getPropertyValue('--font-color');
const CustomSelect = withStyles({
    select: {
        color: fontColor,
    },
    icon: {
        color: fontColor,
    },
})(Select);

const SortingVisualizer = ({ loading, showHelper, sorting }) => {
    const {
        array,
        arrayLength,
        setArrayLength,
        animationSpeed,
        setAnimationSpeed,
    } = useArray();

    const { theme, setTheme, themes } = useTheme();

    return (
        <>
            {loading && (
                <div className="loading-container">
                    <BeatLoader color={'white'} />
                </div>
            )}
            <div className="array-option-container">
                <div className="array-size-speed">
                    <div className="array-size-container">
                        <label>Size</label>
                        <input
                            onChange={(e) => {
                                setArrayLength(e.target.value);
                                localStorage.setItem(
                                    'array-size',
                                    JSON.stringify(e.target.value)
                                );
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
                            onChange={(e) => {
                                setAnimationSpeed(e.target.value);
                                localStorage.setItem(
                                    'array-speed',
                                    JSON.stringify(e.target.value)
                                );
                            }}
                            type="range"
                            min="-153"
                            max="-3"
                            step="25"
                            value={animationSpeed}
                        ></input>
                    </div>
                </div>
                {sorting && (
                    <div className="cancel-container">
                        <div
                            className="cancel-button"
                            onClick={() => window.location.reload()}
                        >
                            Cancel
                        </div>
                    </div>
                )}
                {showHelper && (
                    <div className="helper-container">
                        <div>Click on a sorting button to begin!</div>
                    </div>
                )}
                <div className="array-theme">
                    <label>Theme</label>
                    <CustomSelect
                        onChange={(e) => {
                            localStorage.setItem(
                                'theme',
                                JSON.stringify(e.target.value)
                            );
                            setTheme(e.target.value);
                        }}
                        value={theme}
                    >
                        {Object.keys(themes).map((theme) => (
                            <MenuItem key={theme} value={theme}>
                                {theme}
                            </MenuItem>
                        ))}
                    </CustomSelect>
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
