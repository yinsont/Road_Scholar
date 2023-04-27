import {React, useEffect, useState} from 'react'

function Timer({ inGame, onGameStart }) { //when press start game -> ingame = true
                                                //submitForm -> ingame = false
                                                //onGameStart -> nothing
  /*
    when inGame becomes true, start the timer
    when submit is pressed on the GuessForm, change isGame to false
  */
//  const [timeRemaining, setTimeRemaining] = useState(10)
 const [timeLeft, setTimeLeft] = useState(10);

 useEffect(() => {
   // exit early when we reach 0
   if (!timeLeft) return;

   // save intervalId to clear the interval when the
   // component re-renders
   const intervalId = setInterval(() => {
     setTimeLeft(timeLeft - 1);
   }, 1000);

   // clear interval on re-render to avoid memory leaks
   return () => clearInterval(intervalId);
   // add timeLeft as a dependency to re-rerun the effect
   // when we update it
 }, [timeLeft]);


  return (
    <div id='timer'>
        <h1>{timeLeft}</h1>
    </div>
  )
}

export default Timer