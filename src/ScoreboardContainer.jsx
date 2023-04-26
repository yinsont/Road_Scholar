import React from 'react'
import Score from './Score'

function ScoreboardContainer({ scores }) {

  const scoresList = scores.slice(0,5).map((score) => {
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

export default ScoreboardContainer