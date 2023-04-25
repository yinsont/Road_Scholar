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
    let submition = {
      distance: (inputDistance/distance) * 100,
      minutes: (inputMinutes/duration) * 100
    }

    // console.log(distance)
    // console.log(inputDistance)
    console.log(submition)
  }
  return (
    <div id = 'form'>Form
        <form onSubmit = {answerSubmition} >
            <input onChange = {(e) => {setInputDistance(e.target.value)}}placeholder='Distance in Miles'/>
            <input onChange = {(e) => {setInputMinutes(e.target.value)}} placeholder='Minutes'/>
            <input type="submit" value="Submit Your Answer" />
        </form>
    </div>
  )
}

export default AnswerForm