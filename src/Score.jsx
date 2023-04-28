import React from 'react'

function Score({ name, score, text }) {
  return (
    <div className='score'>
        <li style={{marginLeft: '20px'}}>
            <h3>{name}</h3>
            <span>{score}{text}</span>
        </li>
    </div>
  )
}

export default Score