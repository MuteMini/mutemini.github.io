import React from 'react';
import { hydrate, render } from 'react-dom';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

const StrictApp = () => (
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

if (rootElement.hasChildNodes()) {
    console.log('App: Hydrate');
    hydrate(<StrictApp />, rootElement);
} else {
    console.log('App: Render');
    render(<StrictApp />, rootElement);
}