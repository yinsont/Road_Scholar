import React from 'react'

function Score({ score }) {
  return (
    <div>
        <li>
            <h2>{score.name}</h2>
            <h5>{score.overallScore}</h5>
        </li>
    </div>
  )
}

export default Score