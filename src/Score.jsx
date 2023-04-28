import React from 'react'

function Score({ name, score, text }) {
  return (
    <div className='score'>
        <li>
            <h3>{name}</h3>
            <span>{score}{text}</span>
        </li>
    </div>
  )
}

export default Score