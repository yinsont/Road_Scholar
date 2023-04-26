import './App.css';
import React, { useState } from 'react'
import StartButton from './StartButton';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ScoreboardContainer from './ScoreboardContainer';
import Instructions from './Instructions';

function App() {

  return (
    <div className="App">
      <h1>Phase 2 Project</h1>

      <nav className="navbar">
        <Link className='link' to='/' > Home </Link>
        <Link className='link' to='/instructions' > Instructions </Link>
        <Link className='link' to='/scoreboard' > Scoreboard </Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/instructions' element={<Instructions />}/>
        <Route path='/scoreboard' element={<ScoreboardContainer />}/>
      </Routes> 
    </div>
  );
};

export default App;
