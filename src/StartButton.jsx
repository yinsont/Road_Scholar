import React, { useState } from 'react'

function StartButton({ onSetOrigin, onSetDestination, accessToken, onGameStart }) {

    function handleStart() {
        console.log('time to start the game - go fetch the random points');
        onGameStart(true);

        // fetch two random points in the usa and set to origin and destination
        setUSCoordinates(onSetOrigin);
        setUSCoordinates(onSetDestination);
    };

    function setUSCoordinates(setCoordinateFunction) {
        console.log('generating coordinates');

        let coordinates = generateCoordinates();
        console.log(coordinates);

        checkUS(coordinates, setCoordinateFunction);
    };

    // generate random numbers within these bounds (lng, lat)
    function randomNumber(min, max) {
        return (Math.random() * (max - min)) + min;
    };

    function generateCoordinates() {
        const minLat = 24.7433195;
        const maxLat = 49.3457868;
        const minLng = -124.7844079;
        const maxLng = -66.9513812;

        return [randomNumber(minLng, maxLng), randomNumber(minLat, maxLat)];
    };

    function checkUS(coordinates, setCoordinateFunction) { 
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${coordinates}.json?limit=1&country=us&access_token=${accessToken}`)
            .then((res) => res.json())
            .then((data) => {
            if (data.features.length !== 0) {
                console.log('good point - in the US!')
                setCoordinateFunction(coordinates[0], coordinates[1])
            } else {
                console.log('bad point - not in the US!')
                setUSCoordinates(setCoordinateFunction); 
            }
            });
    }

    return (
        <div>
            <button onClick={handleStart} >Start game!</button>
        </div>
    )
}

export default StartButton