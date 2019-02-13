import * as React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import LandingPage from './views/LandingPage';

const App: React.SFC<{}> = () => {
  return (
    <Switch>
      <Route exact path='/' component={LandingPage} />
    </Switch>
  );
}

export default withRouter(App);
