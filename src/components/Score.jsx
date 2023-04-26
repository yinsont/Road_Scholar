import React from 'react'

function Score({score}) {
  return (
    <div>
        <p>{score.name} : {score.overallScore}</p>
    </div>
  )
}

export default Score