import React from 'react'

function Score({ score }) {
  return (
    <div>
        <li>
            <p>Name: {score.name}</p>
            <p>Score: {score.overallScore}% Error</p>
        </li>
    </div>
  )
}

export default Score