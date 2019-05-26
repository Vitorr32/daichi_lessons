import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from '../Welcome/Welcome';
import Daichi from '../Daichi/Daichi';
import Chapter from '../Chapter/Chapter';

import './App.css';

function App() {
  return (
    <Router >
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/daichi" exact component={Daichi} />
        <Route path="/daichi/:chapter" component={Chapter} />
      </Switch>
    </Router>
  );
}

export default App;
