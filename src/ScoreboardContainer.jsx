import React, { useContext } from 'react'
import Score from './Score'
import { MyContext } from "./MyProvider";

function ScoreboardContainer() {

  const data = useContext(MyContext);

  const dataToUse = window.location.pathname === '/scoreboard' ? data.scores : data.scores.slice(0,5);

  const scoresList = dataToUse.map((score) => {
    return <Score key={score.timeStamp} score={score}/>
  })

  return (
    <div>
      <h1>Top 5 Guesses:</h1>
      <ol>
        {scoresList}
      </ol>
    </div>
  )
}

export default ScoreboardContainer;