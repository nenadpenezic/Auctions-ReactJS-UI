import logo from './logo.svg';
import './App.css';

import { Header } from './components/Header/Header';
import { LogIn } from './pages/LogIn/LogIn';
import { Register } from './pages/Register/Register';
import { Home } from './pages/Home/Home';


import {CompleteAccount} from './pages/CompleteAccount/CompleteAccount'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { useContext, useState } from 'react';
import { Context } from './components/Context/ContextProvider';

function App() {

  const {user} = useContext(Context);
  
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
            <Route element={<Home/>} path='/' exact />
            <Route element = {<CompleteAccount/>} path='/complete' exact/>
            <Route element={<LogIn/>} path='/login' exact/>
            <Route element={<Register/>} path='/register' exact/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
