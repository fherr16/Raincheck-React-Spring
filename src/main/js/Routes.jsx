import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import UserListContainer from './user/UserListController';
import HomeContainer from './home/HomeController';

const routes = (
  <NavigationContainer>
    <Switch>
      <Route path='/userList' component={UserListController} />
      <Route path="/" component={HomeController} exact />
    </Switch>
  </NavigationContainer>
);

const Root = () => (
  <Switch>
    {routes}
  </Switch>
);

export default Root;
