import React, { useState, useEffect } from 'react'
import GuessForm from './GuessForm'
import Timer from './Timer';
import ScoreboardContainer from './ScoreboardContainer'

function Scoreboard({ distance, duration, inGame, onGameStart }) {
  
  return (
    <div id='scoreboard'>
        <Timer inGame={inGame} onGameStart={onGameStart}/>
        <GuessForm distance={distance} duration={duration} onGameStart={onGameStart}/>
        <ScoreboardContainer />
    </div>
  )
}

export default Scoreboard;