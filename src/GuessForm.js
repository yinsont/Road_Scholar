import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import scoreCalculator from './ScoreCalculator';

function GuessForm({ distance, duration, onNewAnswer, onGameStart }) {
    // reading in distance and duration as miles and hours
  
    const [name, setName] = useState('');
    const [inputDistance, setInputDistance] = useState('');
    const [inputDuration, setInputDuration] = useState('');

    const navigate = useNavigate();
  
    function handleSubmitAnswer(e) {
        e.preventDefault();

        onGameStart(false);

        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date+' '+time;

        const distancePercentError = parseFloat((Math.abs(inputDistance-distance)/distance * 100).toFixed(1));
        const durationPercentError = parseFloat((Math.abs(inputDuration-duration)/duration * 100).toFixed(1));

        let overallScore = 10000-((((distancePercentError+durationPercentError)/2)/100)*10000)
        
        overallScore = (scoreCalculator(overallScore, distance, duration, distancePercentError, durationPercentError))
        console.log(overallScore)
        const newAnswer = {
            name: name,
            timeStamp: dateTime,
            distance: parseFloat(distance.toFixed(3)),
            duration: parseFloat(duration.toFixed(3)),
            distanceGuess: inputDistance,
            durationGuess: inputDuration,
            distancePercentError: distancePercentError,
            durationPercentError: durationPercentError,
            overallScore: overallScore
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
                onNewAnswer(data);
            })

        // navigate(`/answer`);

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