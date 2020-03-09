import React from 'react';
import { Route } from 'react-router-dom';

// import Home from './containers/Home';
import ProfileList from './containers/ProfileListView';
import ProfileDetail from './containers/ProfileDetailView';
import Login from './containers/Login';
import Signup from './containers/Signup';

const BaseRouter = () => (
    <div>
        {/* <Route exact path='/' component={Home} /> */}
        <Route exact path='/' component={ProfileList} />
        <Route exact path='/profiles/:profileID' component={ProfileDetail} />
        <Route exact path='/login/' component={Login} />
        <Route exact path='/signup/' component={Signup} />
    </div>
);

export default BaseRouter;