import React from 'react'

function Questions() {
  return (
    <div className='questions-container'>
        <div className='question'>
          <h2>How to Play</h2>
          <p>Start by hitting the 'START GAME' button and using your last few remaining braincells, determine the distance between the 2 points and the time it takes to get from the red point to the blue. Remember that the distance and duration are determine by driving so you must take into consideration what route the vehicle may take and how fast they may be going.</p>
        </div>
        <div className='question'>
          <h2>How did we decide this?</h2>
          <p>Took us a good amount of time to figure out what we can do with our current skils and knowledge. We also took into consideration what we wanted to do with our capstone projects and wished to incorporate some of the knowledge we gain from doing this project into it. We also wanted something interactive and thus, we decided to do a map game, inspired by Patrick's and Josh F.'s knowledge of geography.</p>
        </div>
        <div className='question'>
          <h2>How'd we make it?</h2>
          <p>After thorough research, we determined that the best map api we could use that was within our "budget" was MapBox, mostly because of the number of fetches we can do and we didn't want to look for more maps due to time restraints.</p>
        </div>
        <div className='question'>
          <h2>How did we generate points?</h2>
          <p>First, we generated 2 random points within certain boundaries using basic JS. Then we did some reverse geo-coding by fetching the data into another API that validated if the points were within US territory.</p>
        </div>
        <div className='question'>
          <h2>Buisness Inquiries?</h2>
          <p>We too lazy, but plz give job n $$</p>
        </div>
    </div>
  )
}

export default Questions;