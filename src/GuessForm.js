import React, { useState, useContext } from 'react'
import { MyContext } from "./MyProvider";
import scoreCalculator from './scoreCalculator';
import Modal from './AnswerModal';
import TextField from '@mui/material/TextField';

function GuessForm({ distance, duration }) {
    // reading in distance and duration as miles and hours
  
    const [name, setName] = useState('');
    const [inputDistance, setInputDistance] = useState('');
    const [inputDuration, setInputDuration] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [submission, setSubmission] = useState({});

    const { onNewAnswer, onStartGame, inGame } = useContext(MyContext);
  
    function handleSubmitAnswer(e) {
        e.preventDefault();

        onStartGame(false);
        setIsOpen(!isOpen);
        setName('');
        setInputDistance('');
        setInputDuration('');

        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date+' '+time;

        const distancePercentError = parseFloat((Math.abs(inputDistance-distance)/distance * 100).toFixed(1));
        const durationPercentError = parseFloat((Math.abs(inputDuration-duration)/duration * 100).toFixed(1));

        let overallScore = 10000-((((distancePercentError+durationPercentError)/2)/100)*10000)
        
        overallScore = (scoreCalculator(overallScore, distance, duration, distancePercentError, durationPercentError))

        setSubmission(
            {
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
        );

            onNewAnswer(
                {
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
            );
            
    }

  return (
    <div id='form'>
        <form onSubmit = {inGame? handleSubmitAnswer : (e) => e.preventDefault()} >
        <Modal open={isOpen} onClose={() => setIsOpen(false)} score={submission}></Modal>
            <TextField
                style={{margin: '10px'}}
                id='outlined-basic' 
                variant='outlined'
                type='text'
                value={name}
                onChange={(e) => {setName(e.target.value)}}
                placeholder='Name'
            />
            <br></br>
            <TextField
                style={{margin: '10px'}}
                id='outlined-basic' 
                variant='outlined'
                type='number'
                step='100'
                value={inputDistance}
                onChange = {(e) => {setInputDistance(parseInt(e.target.value))}}
                placeholder='Distance (miles)'
            />
            <br></br>
            <TextField 
                style={{margin: '10px'}}
                id='outlined-basic' 
                variant='outlined'
                type='number'
                value={inputDuration}
                onChange = {(e) => {setInputDuration(parseInt(e.target.value))}} 
                placeholder='Driving Time (hours)'
            />
            <br></br>
            <input 
                type='submit' 
                style={{margin: '10px'}} 
                value='Submit Answer'
            ></input> 
        </form>
    </div>
  )
}

export default GuessForm;