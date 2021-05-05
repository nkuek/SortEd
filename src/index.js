import React from 'react';
import { ArrayProvider } from './context/ArrayContext';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <ArrayProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ArrayProvider>,
    document.getElementById('root')
);
