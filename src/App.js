import './App.css';
import React, { useState } from 'react'
import StartButton from './StartButton';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';

function App() {

  const accessToken = 'pk.eyJ1IjoicmFjcXVlbGdsaWNrbWFuIiwiYSI6ImNsZ3FxdGpzYzAzYXczZGx6NmtkanN2Z3YifQ.yK7-WEliO2PFq4PxgG5QFw';

  const [originLng, setOriginLng] = useState(8);
  const [originLat, setOriginLat] = useState(15);
  const [destinationLng, setDestinationLng] = useState(9);
  const [destinationLat, setDestinationLat] = useState(16);

  const [inGame, setInGame] = useState(false);

  function onSetOrigin(lng, lat) {
    setOriginLng(lng);
    setOriginLat(lat);
  };

  function onSetDestination(lng, lat) {
    setDestinationLng(lng);
    setDestinationLat(lat);
  }

  function onGameStart(bool) {
    setInGame(bool)
  }
  
  return (
    <div className="App">
      <h1>Phase 2 Project</h1>

      {/* <nav className="navbar">
        <Link className='link' to='/' >Home</Link>
        <Link className='link' to='/scoreboard' >Scoreboard</Link>
      </nav> */}

      <StartButton 
        onSetOrigin={onSetOrigin} 
        onSetDestination={onSetDestination}
        accessToken={accessToken}
        onGameStart={onGameStart}
      />
      <Home 
        accessToken={accessToken}
        originLng={originLng}
        originLat={originLat}
        destinationLng={destinationLng}
        destinationLat={destinationLat}
        onGameStart={onGameStart}
        inGame={inGame}
      />
{/* 
      <Routes>
        <Route path='/start' element={<StartButton />}/>
      </Routes> */}
    </div>
  );
};

export default App;
