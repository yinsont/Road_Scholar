import './App.css';
import React, { useState } from 'react'
import MapContainer from './MapContainer';
import Scoreboard from './Scoreboard';

function App() {

  const [distance, setDistance] = useState(0); // in meters
  const [duration, setDuration] = useState(0); // in seconds

  function onDataFetch(distance, duration) {
    // reading distance in meters --> convert to miles
    setDistance(distance/1609.344);
    // reading duration in seconds --> convert to hours
    setDuration(duration/60/60);
  }
  
  return (
    <div className="App">
      <h1>Phase 2 Project</h1>
      <div id='main-container'>
        <MapContainer onDataFetch={onDataFetch}/>
        <Scoreboard distance={distance} duration={duration}/>
      </div>
    </div>
  );
};

export default App;
