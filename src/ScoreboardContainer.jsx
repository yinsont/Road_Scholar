import React, { useContext } from 'react'
import Score from './Score'
import { MyContext } from "./MyProvider";

function ScoreboardContainer() {

  const data = useContext(MyContext);

  const dataToUse = window.location.pathname === '/scoreboard' ? data.scores : data.scores.slice(0,5);

  const scoresList = dataToUse.map((score) => {
    return <Score key={score.timeStamp} name={score.name} score={score.overallScore} text={' points'}/>
  })

  const distanceScoresList = dataToUse.sort(function(a, b){return a.distancePercentError-b.distancePercentError}).map((score) => {
    return <Score key={score.timeStamp} name={score.name} score={score.distancePercentError} text={' % Error'}/>
  })

  const durationScoresList = dataToUse.sort(function(a, b){return a.durationPercentError-b.durationPercentError}).map((score) => {
    return <Score key={score.timeStamp} name={score.name} score={score.durationPercentError} text={' % Error'}/>
  })

  return (
    <div>
      <h1>{window.location.pathname === '/scoreboard' ? 'Scoreboard' : 'Leaderboard:'}</h1>
      {window.location.pathname === '/scoreboard' ? 
      <div id='scoreboard-columns'>
        <div className='score-column'>
          <h3>Overall Scores:</h3>
          <ol>
            {scoresList}
          </ol>
        </div>
        <div className='score-column'>
          <h3>Distance Scores:</h3>
          <ol>
            {distanceScoresList}
          </ol>
        </div>
        <div className='score-column'>
          <h3>Duration Scores:</h3>
          <ol>
            {durationScoresList}
          </ol>
        </div>
      </div>
      : 
      <ol>
        {scoresList}
      </ol>
      }

    </div>
  )
}

export default ScoreboardContainer;