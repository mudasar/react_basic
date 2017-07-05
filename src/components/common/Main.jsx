import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from '../home/Home';
import AboutPage from '../about/AboutPage';
import LoginPage from '../login/LoginPage';
import NotFound from './NotFound';

export const Main = (props) => {
    return(
        <Switch>
            <Route path="/" exact component={Home} />

            <Route path="/about" component={AboutPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="*" component={NotFound} />
        </Switch>
    )
}

export default Main;