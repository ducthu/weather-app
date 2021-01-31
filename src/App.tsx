import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom';

// REDUX
import { useDispatch, useSelector } from 'react-redux';

// Apollo 
import { ApolloProvider } from '@apollo/client';
import { client as ApolloClient } from './services/Apollo/Client';

// PAGES
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';
import City from './components/pages/City';

//
import PrivateRoute from './components/Auth/PrivateRoute';
import PublicRoute from './components/Auth/PublicRoute';
import { RootState } from './store';
import FullPageLoading from './components/UI/FullPageLoading';

function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.auth);

  if (loading) {
    return <FullPageLoading />;
  }

  return (
    <ApolloProvider client={ApolloClient}>
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <PublicRoute path="/login" component={Login} />
        <PrivateRoute path="/city/:name" component={City} />
      </Switch>
    </ApolloProvider>
  );
}

export default App;
