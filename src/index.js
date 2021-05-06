import React from 'react';
import { ArrayProvider } from './context/ArrayContext';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';

ReactDOM.render(
    <ThemeProvider>
        <ArrayProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </ArrayProvider>
    </ThemeProvider>,
    document.getElementById('root')
);
