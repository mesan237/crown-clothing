import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homePage.component';
import Header from './pages/header/header.component';
import {Route, Routes} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';


function App() { 
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/shop' element={<ShopPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
