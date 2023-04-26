import {React, useEffect, useState} from 'react'
import Score from './Score'

function Scoreboard() {

    const [scores, setScores] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/scores')
        .then (res => res.json())
        .then(data => setScores(data))
    },[])

    // console.log(scoreBoard)

// let overallScore = 10000 - (.642*10000)


// if ((distancePercentError < 10) && (durationPercentError < 10)){
//   overallScore = overallScore + overallScore/5
  
// }
// console.log(overallScore) -----------Sorting Algorithm
  return (
    <div>
        <ol>
            {scores.map((score) => {
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