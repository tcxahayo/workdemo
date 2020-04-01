import React from 'react';
import { BrowserRouter as Router, Route, Link  } from "react-router-dom";
import Login from './page/login/login';
import App from './page/AppContainer'

function AppRouter(){
    return(
        <Router>
            <Route path='/' component={App} exact />
           <Route path='/login' component={Login} /> 
        </Router>
    )
}

export default AppRouter;