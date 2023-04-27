import React from 'react'

function Score({ score }) {
  return (
    <div>
        <li>
            <h3>{score.name}</h3>
            <span>{score.overallScore}</span>
        </li>
    </div>
  )
}

export default Score