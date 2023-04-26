import React, { useState } from 'react'

function GuessForm({ distance, duration }) {
    // reading in distance and duration as miles and hours
  
  const [name, setName] = useState('');
  const [inputDistance, setInputDistance] = useState('');
  const [inputDuration, setInputDuration] = useState('');
  
  function handleSubmitAnswer(e) {
    e.preventDefault();

    const newAnswer = {
        name: name,
        score: {
            distance: parseFloat(distance.toFixed(3)),
            duration: parseFloat(duration.toFixed(3)),
            distanceGuess: inputDistance,
            durationGuess: inputDuration,
            distancePercentError: parseFloat((Math.abs(inputDistance-distance)/distance * 100).toFixed(1)),
            durationPercentError: parseFloat((Math.abs(inputDuration-duration)/duration * 100).toFixed(1)),
            overallScore: (parseFloat((Math.abs(inputDistance-distance)/distance * 100).toFixed(1)) + parseFloat((Math.abs(inputDuration-duration)/duration * 100).toFixed(1))) / 2 
        }
    }

    console.log(newAnswer);

    fetch('http://localhost:4000/scores', {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newAnswer)
    })
        .then(res => res.json())
        .then((data) => {
            console.log(data)
        })
    }

  return (
    <div id='form'>
        <form onSubmit = {handleSubmitAnswer} >
            <input
                type='text'
                value={name}
                onChange={(e) => {setName(e.target.value)}}
                placeholder='Name'
            />
            <br></br>
            <input 
                type='number'
                step='100'
                value={inputDistance}
                onChange = {(e) => {setInputDistance(parseInt(e.target.value))}}
                placeholder='Distance (miles)'
            />
            <br></br>
            <input 
                type='number'
                value={inputDuration}
                onChange = {(e) => {setInputDuration(parseInt(e.target.value))}} 
                placeholder='Duration (hours)'
            />
            <br></br>
            <input type="submit" value="Submit Your Answer" />
        </form>
    </div>
  )
}

export default GuessForm;