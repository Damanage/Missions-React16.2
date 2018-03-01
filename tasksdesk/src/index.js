import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import missions from './missions';

ReactDOM.render(<App initialData={missions} />, document.getElementById('root'));
registerServiceWorker();

