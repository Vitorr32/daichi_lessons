import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from '../Welcome/Welcome';

import './App.css';
import Daichi from '../Daichi/Daichi';


function App() {
  return (
    <Router >
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/daichi" component={Daichi} />
      </Switch>
    </Router>
  );
}

export default App;
