import React from 'react'
import Score from './Score'

function FullScoreboard({ scores }) {

  const scoresList = scores.map((score) => {
    return <Score key={score.timeStamp} score={score}/>
  })

  return (
    <div>
      <h1>Scoreboard</h1>
      <ol>
        {scoresList}
      </ol>
    </div>
  )
}

export default FullScoreboard