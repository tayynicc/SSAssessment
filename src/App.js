import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from './components/LandingPage'
import Home from './components/Home';
import UpdateUsr from './components/UpdateUsr';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path='/' exact={true}>
          <LandingPage />
        </Route> 

        <Route path='/home/:id'>
          <Home />
        </Route>

        <Route path='/update/:id'>
          <UpdateUsr/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
