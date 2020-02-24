import React from 'react';
import { Route } from 'react-router-dom';

import ProfileList from './containers/ProfileListView';
import ProfileDetail from './containers/ProfileDetailView';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ProfileList} />
        <Route exact path='/:profileID' component={ProfileDetail} />
    </div>
);

export default BaseRouter;