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
            distance: distance.toFixed(3),
            duration: duration.toFixed(3),
            distanceGuess: parseInt(inputDistance),
            durationGuess: parseInt(inputDuration),
            distancePercentError: (Math.abs(parseInt(inputDistance)-distance)/distance * 100).toFixed(1),
            durationPercentError: (Math.abs(parseInt(inputDuration)-duration)/duration * 100).toFixed(1),
            overallScore: ((Math.abs(parseInt(inputDistance)-distance)/distance * 100).toFixed(1) + (Math.abs(parseInt(inputDuration)-duration)/duration * 100).toFixed(1)) / 2,
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
                value={name}
                onChange={(e) => {setName(e.target.value)}}
                placeholder='Name'
            />
            <br></br>
            <input 
                value={inputDistance}
                onChange = {(e) => {setInputDistance(parseInt(e.target.value))}}
                placeholder='Distance (miles)'
            />
            <br></br>
            <input 
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