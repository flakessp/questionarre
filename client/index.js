// Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './components/App.jsx';

// Question
import HTML from './questions/html';

// Styles
require('./styles/app.scss');

ReactDOM.render(<App questions={HTML}/>, document.getElementById('root'));
