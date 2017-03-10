// Libraries
import React from 'react';
import {Router, Route, browserHistory, IndexRedirect} from 'react-router';

// Question
import HTML from './questions/html';

// Components
import Quiz from './components/Quiz.jsx';
import App from './components/App.jsx';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="quiz" questions={HTML} component={Quiz}/>
    </Router>
);

export default routes;