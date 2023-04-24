import React from 'react'

function Score({score}) {
  return (
    <div>
        <p>{score.name} : {score.score}</p>
    </div>
  )
}

export default Score