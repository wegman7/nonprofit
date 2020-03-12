import React from 'react';
import { Route } from 'react-router-dom';

// import Home from './containers/Home';
import OrganizationProfileList from './containers/OrganizationProfileListView';
import HelperProfileList from './containers/HelperProfileListView';
import OrganizationProfileDetail from './containers/OrganizationProfileDetailView';
import UpdateProfile from './containers/UpdateProfile';
import HelperProfileDetail from './containers/HelperProfileDetailView';
import Login from './containers/Login';
import Signup from './containers/Signup';

const BaseRouter = () => (
    <div>
        {/* <Route exact path='/' component={Home} /> */}
        <Route exact path='/' component={OrganizationProfileList} />
        <Route exact path='/contributors/' component={HelperProfileList} />
        <Route exact path='/profiles/:profileID' component={OrganizationProfileDetail} />
        <Route exact path='/contributors/profiles/:profileID' component={HelperProfileDetail} />
        <Route exact path='/update/:profileID/' component={UpdateProfile} />
        <Route exact path='/login/' component={Login} />
        <Route exact path='/signup/' component={Signup} />
    </div>
);

export default BaseRouter;