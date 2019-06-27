import React from 'react';
import { Router, Route, } from "react-router-dom";
import { createBrowserHistory } from 'history';

import Home from '../screen/home';
import Login from '../screen/Login';
import Registration from '../screen/Registration';
import userPanel from '../screen/Dashboard';



const customHistory = createBrowserHistory();

//Routes for Navigation
const MyRoutes = () => (
    <Router history={customHistory}>
        <div>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/Login' component={Login}></Route>
            <Route exact path='/Registration' component={Registration}></Route>
            <Route exact path='/Dashboard' component={userPanel}></Route>
            
        </div>
    </Router>
)

export default MyRoutes;