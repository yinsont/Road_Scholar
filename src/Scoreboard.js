import React from 'react'
import GuessForm from './GuessForm'
import Timer from './Timer';
import ScoreboardContainer from './ScoreboardContainer'

function Scoreboard({ distance, duration }) {
  return (
    <div id='scoreboard'>
        <Timer />
        <GuessForm distance={distance} duration={duration}/>
        <ScoreboardContainer />
    </div>
  )
}

export default Scoreboard;