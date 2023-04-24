import {React, useState} from 'react'
import Game from './Game'

function Start() {

  const [presentScreen, setPresentScreen] = useState(false)

  function handleStart(){
      setPresentScreen(!presentScreen)
  }
  return (
    
    // <button onClick = {handleStart}/>
    <div>
      {presentScreen ? <Game/> : <button onClick = {handleStart} id = {'Start-Button'}>Start</button>}
    </div>
    
  )
}

export default Start