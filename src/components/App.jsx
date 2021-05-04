import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../domain/routes';
import Navbar from './Navbar';
import NoMatch from './NoMatch';
import './styles.css';

const App = () => (
  <div className="container">
    <Navbar />
    <Switch>
      {routes.map(({
        path, exact, fetchInitialData, component: C,
      }) => (
        <Route
          key={path}
          path={path}
          exact={exact}
          render={(props) => <C fetchInitialData={fetchInitialData} {...props} />}
        />
      ))}
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  </div>
);

export default App;
