import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Context } from './Context/AuthContext';

import Login from './pages/Login';
import Users from './pages/Users';

function CustonRoutes({ isPrivate, ...rest }) {
  const { loading, authenticated } = useContext(Context);

  if (loading) {
    return <h1>Loading...</h1>
}

  if (isPrivate && !authenticated) {
    return <Redirect to="/login" />
  }

  return <Route {...rest} />
}

export default function Routes() {
  return (
    <Switch>
      <CustonRoutes exact path="/login" component={Login} />
      <CustonRoutes isPrivate exact path="/users" component={Users} />
    </Switch>
  );
}