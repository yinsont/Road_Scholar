import React from 'react'

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}

const OVERLAY_STYLES = { //Makes background dark and unclickable
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.75)',
    zIndex: 1000
}

function Modal({open, onClose, score}) {
    console.log(score)
    if (!open) return null
  return (
    <>
        <div style={OVERLAY_STYLES}/> 
        <div style = {MODAL_STYLES}>
            {((score.distancePercentError+score.durationPercentError)/2) < 65 ? <h2>Good Job</h2> : <h2>Do better{<p>( う-´)づ︻╦̵̵̿╤── \(˚☐˚”)/</p>}</h2>}
            <p>Score:</p>
            <h2>{score.overallScore}</h2>
            <h5>Distance: {score.distance} Miles</h5>
            <h5>Distance Guessed: {score.distanceGuess} Miles</h5>
            <h5>Duration: {score.duration} Hours</h5>
            <h5>Duration Guessed: {score.durationGuess} Hours</h5>
            <button onClick = {onClose}>Close</button>
        </div>
    </>
  )
}

export default Modal;