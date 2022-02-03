import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProtectedRoute from './components/Auth/ProtectedRoute'
import LandingPage from './components/LandingPage'
import Login from './components/ProvideCredentials'
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

        <Route path='/login'>
          <Login/>
        </Route>

        <Route path='/home/:id'>
          <Home />
        </Route>

        <Route path='/update/:id'>
          <UpdateUsr/>
        </Route>

        <ProtectedRoute>
          
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
