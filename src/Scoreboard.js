import React, { useState, useEffect } from 'react'
import GuessForm from './GuessForm'
import Timer from './Timer';
import ScoreboardContainer from './ScoreboardContainer'

function Scoreboard({ distance, duration, inGame, onGameStart }) {

  const [scores, setScores] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/scores')
    .then((res) => res.json())
    .then((data) => {
      data.sort(({overallScore:a}, {overallScore:b}) => b-a)
      setScores(data);
    });
  }, [])

  function onNewAnswer(newAnswer) {
    setScores(
      [...scores, newAnswer].sort(({overallScore:a}, {overallScore:b}) => b-a)
    );
  };
  
  return (
    <div id='scoreboard'>
        <Timer inGame={inGame} onGameStart={onGameStart}/> 
        {/* Toggle */}
        <GuessForm onNewAnswer={onNewAnswer} distance={distance} duration={duration} onGameStart={onGameStart}/>
        <ScoreboardContainer scores={scores}/>
    </div>
  )
}

export default Scoreboard;