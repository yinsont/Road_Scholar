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
      <h1>{window.location.pathname === '/scoreboard' ? 'Scoreboard' : 'Leaderboard'}</h1>
      <ol>
        {scoresList}
      </ol>
      <h1>hi</h1>
    </div>
  )
}

export default ScoreboardContainer;