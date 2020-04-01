import React, {Suspense} from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import './App.scss';
import {Home} from './components/Home/Home';

const App: () => JSX.Element = () => {
  const customHistory = createBrowserHistory();
  return (
    <Router history={customHistory}>
      <Suspense fallback={<div>ke</div>}>
        <Switch>
          <Route path='/' exact>
            <Home/>
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
