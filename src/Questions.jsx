import React from 'react'

function Questions() {
  return (
    <div className='question-box'>
        <h1>Welcome to our game!</h1>
        <h3>How to Play</h3>
        <p>Start by hitting the 'START GAME' button and using your last few remaining braincells, determine</p>
        <p>the distance between the 2 points and the time it takes to get from the red point to the blue</p>
        <p>Remember that the distance and duration are determine by driving so you must take into</p>
        <p>consideration what route the vehicle may take and how fast they may be going.</p>
        <h3>How did we decide this?</h3>
        <p>Took us a good amount of time to figure out what we can do with our current skils and knowledge.</p>
        <p>We also took into consideration what we wanted to do with our capstone projects and whished</p>
        <p>to incorporate some of the knowledge we gain from doing this project into it.</p>
        <p>We also wanted something interactive and thus, we decided to do a map game, inspired by</p>
        <p>Patrick's and Josh F.'s knowledge of geography.</p>
        <h3>How'd ya make it?</h3>
        <p>After thurough research, we determine the best map api we could use that was withing our</p>
        <p>"budget" was MapBox, mostly because of the number of fetches we can do.</p>
    </div>
  )
}

export default Questions;