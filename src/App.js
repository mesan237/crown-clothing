import React from 'react';
import './App.css';

import HomePage from './pages/homePage.component';

import {Route, Routes} from 'react-router-dom';

 const HatsPage= () => {
  return(
    <div>
      HATS PAGE
    </div>
  )
 }

function App() { 
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/hats' element={<HatsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
