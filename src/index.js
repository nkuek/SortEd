import React from 'react';
import { ArrayProvider } from './context/ArrayContext';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';

function Root() {
    return (
        <ThemeProvider>
            <ArrayProvider>
                <App />
            </ArrayProvider>
        </ThemeProvider>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <Root />
    </React.StrictMode>,
    document.getElementById('root')
);
