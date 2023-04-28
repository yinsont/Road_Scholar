import './App.css';
import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ScoreboardContainer from './ScoreboardContainer';
import Questions from './Questions';
import MyProvider from './MyProvider';
import Error from './Error';

function App() {

  return (
    <MyProvider>
      <div className="App">

        <div className='navbar'>
          <img 
            src='road-scholar-logo.png' 
            alt='logo picture' 
          ></img>
          <nav>
            <Link className='link' to='/' > Home </Link>
            <Link className='link' to='/questions' > Questions </Link>
            <Link className='link' to='/scoreboard' > Scoreboard </Link>
          </nav>
        </div>
      

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/questions' element={<Questions />}/>
          <Route path='/scoreboard' element={<ScoreboardContainer />}/>
          <Route path='*' element={<Error />}/>
        </Routes> 
      </div>
    </MyProvider>
    
  );
};

export default App;