import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './App';
import './global.css';
import {StateContextProvider} from "./Contexts/ResultContextProvider";

ReactDom.render(
    <StateContextProvider>
        <Router>
            <App/>
        </Router>
    </StateContextProvider>,
    document.getElementById('root'),
);