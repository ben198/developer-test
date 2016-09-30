import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import 'normalize.css/normalize.css';
import './styles.scss';

render(
    <App/>,
    document.getElementById('appRoot')
);