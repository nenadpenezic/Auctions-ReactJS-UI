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
import { AddProduct } from './pages/AddProduct/AddProduct';
import { Profile } from './pages/Profile/Profile';
import { Item } from './components/Item/Item';
import { ItemDetails } from './pages/ItemDetails/ItemDetails';

function App() {

  const {user} = useContext(Context);
  console.log("App")
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
            <Route element={<Home/>} path='/' exact />
            <Route element = {<CompleteAccount/>} path='/complete' exact/>
            <Route element={<LogIn/>} path='/login' exact/>
            <Route element={<Register/>} path='/register' exact/>
            <Route element = {<AddProduct/>} path ='/add-item' exact />
            <Route element = {<Profile/>} path ='/profile/:userID' exact />
            <Route element = {<ItemDetails/>} path ='/item' exact />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
