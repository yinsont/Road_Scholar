import {React, useState} from 'react'

function AnswerForm() {

  const [distance, setDistance] = useState(0)
  const [hours, setHours] = useState(0)
  
  function answerSubmition (e) {
    e.preventDefault()
    let submition = {
      distance: distance,
      hours: hours,
    }
    console.log(submition)
  }
  return (
    <div id = 'form'>Form
        <form onSubmit = {answerSubmition} >
            <input onChange = {(e) => {setDistance(e.target.value)}}placeholder='Distance in Miles'/>
            <input onChange = {(e) => {setHours(e.target.value)}} placeholder='Hours'/>
            <input type="submit" value="Submit Your Answer" />
        </form>
    </div>
  )
}

export default AnswerForm