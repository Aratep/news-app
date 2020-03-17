import React from 'react';
// import {Route, Switch, Redirect} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';

import {PrivateRoute} from "./components/hoc/PrivateRoutes"
import LoginPage from "./pages/login/LoginPage";
import HomePage from "./pages/home/HomePage";
import ProfilePage from "./pages/profile/ProfilePage";
import NewsPage from "./pages/news/NewsPage";

const AppRoutes = () => (
    <Switch>
        <Route exact path="/auth" component={LoginPage}/>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/home" component={HomePage}/>
        <PrivateRoute exact path="/profile" component={ProfilePage}/>
        <Route exact path="/news" component={NewsPage}/>
        {/*<Route path="/driver-order/:id" component={Order}/>*/}
        {/*<Redirect from='*' to={pathTo}/>*/}
    </Switch>
);

export default AppRoutes