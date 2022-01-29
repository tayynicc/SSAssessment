import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ProtectedRoute from './components/Auth/ProtectedRoute'


import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' exact={true}>

        </Route> 
        <ProtectedRoute>
          
        </ProtectedRoute>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
