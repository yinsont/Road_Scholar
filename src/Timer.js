import {React, useEffect, useState, useContext} from 'react'
import { MyContext } from './MyProvider';
import Modal from './AnswerModal';

function Timer() { 

 const { inGame, onStartGame, timeRemaining, onResetTime } = useContext(MyContext);

function reset() {
  onResetTime(10);
  onStartGame(false);
  alert(`time's up!`)
}

useEffect(() => {

  let interval = null;

  if (inGame) {

    interval = setInterval(() => {
      onResetTime(timeRemaining => timeRemaining - 1);
    }, 1000);

    if (timeRemaining === -1) {
      reset();
    }

  } else if (inGame === false && timeRemaining !== 0) {
    clearInterval(interval);
  }
  return () => clearInterval(interval);

}, [inGame, timeRemaining]);

  return (
    <div id='timer'>
        <h1>{timeRemaining}</h1>
    </div>
  )
}

export default Timer