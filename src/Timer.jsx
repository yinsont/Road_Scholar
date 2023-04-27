import {React, useEffect, useState, useContext} from 'react'
import { MyContext } from './MyProvider';
import Modal from './TimerModal';

function Timer() { 

 const { inGame, onStartGame, timeRemaining, onResetTime } = useContext(MyContext);

 const [isOpen, setIsOpen] = useState(false);

  function reset() {
    onResetTime(10);
    onStartGame(false);
    setIsOpen(!isOpen);
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
        <Modal open={isOpen} onClose={() => setIsOpen(false)} ></Modal>
        <h1>{timeRemaining}</h1>
    </div>
  )
}

export default Timer