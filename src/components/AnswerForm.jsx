import {React, useState} from 'react'

function AnswerForm({distance, duration}) {

  distance = distance/1609.344
  duration = duration/60

  const [inputDistance, setInputDistance] = useState(0)
  const [inputMinutes, setInputMinutes] = useState(0)
  
  
  function answerSubmition (e) {
    e.preventDefault()
    // fetch('http://localhost:3001/Scoreboard', {
    //   method : 'POST',
    //   headers : {
    //     'Content-Type' : 'application/json'
    //   },
    //   body: JSON.stringify({})
    // })
    // .then(res => res.json())
    // let submition = {
    //   distance: (inputDistance/distance) * 100,
    //   minutes: (inputMinutes/duration) * 100
    // }

    // console.log(distance)
    // console.log(inputDistance)
    // console.log(submition)
    if (distancePercentError < 10) { //-------overallScore Algorithm
      if (durationPercentError < 10){
        overallScore += overallScore/5
      } else if (durationPercentError < 20){
        overallScore += overallScore/6
      } else if (durationPercentError < 30){
        overallScore += overallScore/7
      } else if (durationPercentError < 40){
        overallScore += overallScore/8
      } else if (durationPercentError < 50){
        overallScore += overallScore/9
      } else if (durationPercentError < 60){
        overallScore += overallScore/10
      } else if (durationPercentError < 70){
        overallScore += overallScore/11
      } else if (durationPercentError < 80){
        overallScore += overallScore/12
      } else if (durationPercentError < 90){
        overallScore += overallScore/13 //-------------
      } else if (durationPercentError < 100){
        overallScore += overallScore/14
      }
    } else if (distancePercentError < 20){
      if (durationPercentError < 10){
        overallScore += overallScore/6
      } else if (durationPercentError < 20){
        overallScore += overallScore/7
      } else if (durationPercentError < 30){
        overallScore += overallScore/8
      } else if (durationPercentError < 40){
        overallScore += overallScore/9
      } else if (durationPercentError < 50){
        overallScore += overallScore/10
      } else if (durationPercentError < 60){
        overallScore += overallScore/11
      } else if (durationPercentError < 70){
        overallScore += overallScore/12
      } else if (durationPercentError < 80){
        overallScore += overallScore/13
      } else if (durationPercentError < 90){
        overallScore += overallScore/14 //-------------
      } else if (durationPercentError < 100){
        overallScore += overallScore/15
      }
    } else if (distancePercentError < 30){
      if (durationPercentError < 10){
        overallScore += overallScore/7
      } else if (durationPercentError < 20){
        overallScore += overallScore/8
      } else if (durationPercentError < 30){
        overallScore += overallScore/9
      } else if (durationPercentError < 40){
        overallScore += overallScore/10
      } else if (durationPercentError < 50){
        overallScore += overallScore/11
      } else if (durationPercentError < 60){
        overallScore += overallScore/12
      } else if (durationPercentError < 70){
        overallScore += overallScore/13
      } else if (durationPercentError < 80){
        overallScore += overallScore/14
      } else if (durationPercentError < 90){
        overallScore += overallScore/15 
      } else if (durationPercentError < 100){
        overallScore += overallScore/16 //-------------
      }
    } else if (distancePercentError < 40){
      if (durationPercentError < 10){
        overallScore += overallScore/8
      } else if (durationPercentError < 20){
        overallScore += overallScore/9
      } else if (durationPercentError < 30){
        overallScore += overallScore/10
      } else if (durationPercentError < 40){
        overallScore += overallScore/11
      } else if (durationPercentError < 50){
        overallScore += overallScore/12
      } else if (durationPercentError < 60){
        overallScore += overallScore/13
      } else if (durationPercentError < 70){
        overallScore += overallScore/14
      } else if (durationPercentError < 80){
        overallScore += overallScore/15
      } else if (durationPercentError < 90){
        overallScore += overallScore/16 
      } else if (durationPercentError < 100){
        overallScore += overallScore/17 //-------------
      }
    } else if (distancePercentError < 50){
      if (durationPercentError < 10){
        overallScore += overallScore/8
      } else if (durationPercentError < 20){
        overallScore += overallScore/9
      } else if (durationPercentError < 30){
        overallScore += overallScore/10
      } else if (durationPercentError < 40){
        overallScore += overallScore/11
      } else if (durationPercentError < 50){
        overallScore += overallScore/12
      } else if (durationPercentError < 60){
        overallScore += overallScore/13
      } else if (durationPercentError < 70){
        overallScore += overallScore/14
      } else if (durationPercentError < 80){
        overallScore += overallScore/15
      } else if (durationPercentError < 90){
        overallScore += overallScore/16 
      } else if (durationPercentError < 100){
        overallScore += overallScore/17 //-------------
      }
    } else if (distancePercentError < 60){
      if (durationPercentError < 10){
        overallScore += overallScore/9
      } else if (durationPercentError < 20){
        overallScore += overallScore/10
      } else if (durationPercentError < 30){
        overallScore += overallScore/11
      } else if (durationPercentError < 40){
        overallScore += overallScore/12
      } else if (durationPercentError < 50){
        overallScore += overallScore/13
      } else if (durationPercentError < 60){
        overallScore += overallScore/14
      } else if (durationPercentError < 70){
        overallScore += overallScore/15
      } else if (durationPercentError < 80){
        overallScore += overallScore/16
      } else if (durationPercentError < 90){
        overallScore += overallScore/17 
      } else if (durationPercentError < 100){
        overallScore += overallScore/18 //-------------
      }
    } else if (distancePercentError < 70){
      if (durationPercentError < 10){
        overallScore += overallScore/10
      } else if (durationPercentError < 20){
        overallScore += overallScore/11
      } else if (durationPercentError < 30){
        overallScore += overallScore/12
      } else if (durationPercentError < 40){
        overallScore += overallScore/13
      } else if (durationPercentError < 50){
        overallScore += overallScore/14
      } else if (durationPercentError < 60){
        overallScore += overallScore/15
      } else if (durationPercentError < 70){
        overallScore += overallScore/16
      } else if (durationPercentError < 80){
        overallScore += overallScore/17
      } else if (durationPercentError < 90){
        overallScore += overallScore/18 
      } else if (durationPercentError < 100){
        overallScore += overallScore/19 //-------------
      }
    } else if (distancePercentError < 80){
      if (durationPercentError < 10){
        overallScore += overallScore/11
      } else if (durationPercentError < 20){
        overallScore += overallScore/12
      } else if (durationPercentError < 30){
        overallScore += overallScore/13
      } else if (durationPercentError < 40){
        overallScore += overallScore/14
      } else if (durationPercentError < 50){
        overallScore += overallScore/15
      } else if (durationPercentError < 60){
        overallScore += overallScore/16
      } else if (durationPercentError < 70){
        overallScore += overallScore/17
      } else if (durationPercentError < 80){
        overallScore += overallScore/18
      } else if (durationPercentError < 90){
        overallScore += overallScore/19 
      } else if (durationPercentError < 100){
        overallScore += overallScore/20 //-------------
      }
    } else if (distancePercentError < 90){
      if (durationPercentError < 10){
        overallScore += overallScore/12
      } else if (durationPercentError < 20){
        overallScore += overallScore/13
      } else if (durationPercentError < 30){
        overallScore += overallScore/14
      } else if (durationPercentError < 40){
        overallScore += overallScore/15
      } else if (durationPercentError < 50){
        overallScore += overallScore/16
      } else if (durationPercentError < 60){
        overallScore += overallScore/17
      } else if (durationPercentError < 70){
        overallScore += overallScore/18
      } else if (durationPercentError < 80){
        overallScore += overallScore/19
      } else if (durationPercentError < 90){
        overallScore += overallScore/20 
      } else if (durationPercentError < 100){
        overallScore += overallScore/21 //-------------
      }
    } else if (distancePercentError < 100){
      if (durationPercentError < 10){
        overallScore += overallScore/13
      } else if (durationPercentError < 20){
        overallScore += overallScore/14
      } else if (durationPercentError < 30){
        overallScore += overallScore/15
      } else if (durationPercentError < 40){
        overallScore += overallScore/16
      } else if (durationPercentError < 50){
        overallScore += overallScore/17
      } else if (durationPercentError < 60){
        overallScore += overallScore/18
      } else if (durationPercentError < 70){
        overallScore += overallScore/19
      } else if (durationPercentError < 80){
        overallScore += overallScore/20
      } else if (durationPercentError < 90){
        overallScore += overallScore/21 
      } else if (durationPercentError < 100){
        overallScore += overallScore/22 //-------------
      }
    }
  }
  return (
    <div id = 'form'>Form
        <form onSubmit = {answerSubmition}>
            <input onChange = {(e) => {setInputDistance(e.target.value)}}placeholder='Distance in Miles'/>
            <input onChange = {(e) => {setInputMinutes(e.target.value)}} placeholder='Minutes'/>
            <input type="submit" value="Submit Your Answer" />
        </form>
    </div>
  )
}

export default AnswerForm