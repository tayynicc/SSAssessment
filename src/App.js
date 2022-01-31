import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProtectedRoute from './components/Auth/ProtectedRoute'
import LandingPage from './components/LandingPage'
import Login from './components/ProvideCredentials'


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

        <ProtectedRoute>
          
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
