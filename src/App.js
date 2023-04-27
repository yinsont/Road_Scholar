import './App.css';
import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ScoreboardContainer from './ScoreboardContainer';
import Instructions from './Instructions';
import MyProvider from './MyProvider';
import Error from './Error';

function App() {

  return (
    <MyProvider>
      <div className="App">

        <div className='navbar'>
          <nav>
            <Link className='link' to='/' > Home </Link>
            <Link className='link' to='/instructions' > Instructions </Link>
            <Link className='link' to='/scoreboard' > Scoreboard </Link>
          </nav>
        </div>
        

        <h1>Phase 2 Project</h1>

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/instructions' element={<Instructions />}/>
          <Route path='/scoreboard' element={<ScoreboardContainer />}/>
          <Route path='*' element={<Error />}/>
        </Routes> 
      </div>
    </MyProvider>
    
  );
};

export default App;
