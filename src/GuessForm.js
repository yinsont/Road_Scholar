import React, { useState } from 'react'

function GuessForm() {

    const [distanceGuess, setDistanceGuess] = useState('');
    const [durationGuess, setDurationGuess] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log('guess submitted. check against fetched data');
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={{margin: '20px'}}>
                <input 
                    value={distanceGuess} 
                    onChange={(e) => setDistanceGuess(e.target.value)}
                    placeholder='Distance'
                ></input>
                <input 
                    value={durationGuess}
                    onChange={(e) => setDurationGuess(e.target.value)}
                    placeholder='Duration'
                ></input>
                <input type='submit'></input>
            </form>
        </div>
    )
}

export default GuessForm