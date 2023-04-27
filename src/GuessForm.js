import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { MyContext } from "./MyProvider";
import scoreCalculator from './scoreCalculator';
import Modal from './Modals/AnswerModal';

function GuessForm({ distance, duration }) {
    // reading in distance and duration as miles and hours
  
    const [name, setName] = useState('');
    const [inputDistance, setInputDistance] = useState('');
    const [inputDuration, setInputDuration] = useState('');
    // const [modal, setModal] = useState(false)
    const[isOpen, setIsOpen] = useState(false)

    const { onNewAnswer, onStartGame } = useContext(MyContext);
  
    function handleSubmitAnswer(e) {
        e.preventDefault();

        setIsOpen(!isOpen)
        // console.log(isOpen)

        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date+' '+time;

        const distancePercentError = parseFloat((Math.abs(inputDistance-distance)/distance * 100).toFixed(1));
        const durationPercentError = parseFloat((Math.abs(inputDuration-duration)/duration * 100).toFixed(1));

        let overallScore = 10000-((((distancePercentError+durationPercentError)/2)/100)*10000)
        
        overallScore = (scoreCalculator(overallScore, distance, duration, distancePercentError, durationPercentError))
        
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
        )
    }
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date+' '+time;

    const distancePercentError = parseFloat((Math.abs(inputDistance-distance)/distance * 100).toFixed(1));
    const durationPercentError = parseFloat((Math.abs(inputDuration-duration)/duration * 100).toFixed(1));

    let overallScore = 10000-((((distancePercentError+durationPercentError)/2)/100)*10000)
    
    overallScore = (scoreCalculator(overallScore, distance, duration, distancePercentError, durationPercentError))

    let answer = {
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

  return (
    <div id='form'>
        <form onSubmit = {handleSubmitAnswer}>
            <Modal open = {isOpen} onClose={() => setIsOpen(false)} score = {answer}></Modal>
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