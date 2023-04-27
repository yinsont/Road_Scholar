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

function TimerModal({open,  onClose }) {
    if (!open) return null
  return (
    <div>
      <div style={OVERLAY_STYLES}/> 
        <div style = {MODAL_STYLES}>
          <h1>Hello? You There?</h1>
          <button onClick = {onClose}>Close</button>
        </div>
    </div>
  )
}

export default TimerModal;