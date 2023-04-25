import React from 'react'
import GuessForm from './GuessForm'
import Timer from './Timer';

function Scoreboard({ distance, duration }) {
  return (
    <div id='scoreboard'>
        <Timer />
        <GuessForm distance={distance} duration={duration}/>
        <div id='scoreboard'>Scoreboard goes here</div>
    </div>
  )
}

export default Scoreboard;