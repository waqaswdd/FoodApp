import React from 'react';
import { Router, Route, } from "react-router-dom";
import { createBrowserHistory } from 'history';

import Home from '../screen/home';
import Login from '../screen/Login';


const customHistory = createBrowserHistory();

//Routes for Navigation
const MyRoutes = () => (
    <Router history={customHistory}>
        <div>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/Login' component={Login}></Route>
        </div>
    </Router>
)

export default MyRoutes;