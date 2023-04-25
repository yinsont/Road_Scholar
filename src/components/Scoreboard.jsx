import {React, useEffect, useState} from 'react'
import Score from './Score'

function Scoreboard() {

    const [scoreBoard, setScoreBoard] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/Scoreboard')
        .then (res => res.json())
        .then(data => setScoreBoard(data))
    },[])

    // console.log(scoreBoard)
    
  return (
    <div>
        <ol>
            {scoreBoard.map((score) => {
                return (
                    <li>
                        <Score score = {score}/>
                    </li>
                )
            })}
        </ol>
        
    </div>
  )
}

export default Scoreboard