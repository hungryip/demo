import React from 'react';
import { Router, Redirect, hashHistory, browserHistory, Route, IndexRoute } from 'react-router';

import AppContainer from './containers/appContainer';
import TodoContainer from './containers/Todo/todoContainer';

export default (
    <Router history={browserHistory}>
        <Route component={AppContainer}>
            <Route path="/" component={TodoContainer} />
        </Route>
    </Router>
)