import React, { useState, useEffect } from 'react'
import MapContainer from './MapContainer';
import Scoreboard from './Scoreboard';

function Home({ accessToken, originLng, originLat, destinationLng, destinationLat, inGame, onGameStart }) {

    const [distance, setDistance] = useState(0); // in meters
    const [duration, setDuration] = useState(0); // in seconds

    const [profile, setProfile] = useState('driving');


    useEffect(() => {
        const origin = [originLng,originLat];
        const destination = [destinationLng,destinationLat];

        fetch(`https://api.mapbox.com/directions/v5/mapbox/${profile}/${origin};${destination}?access_token=${accessToken}`)
            .then((res) => res.json())
            .then((data) => {
                // reading distance in meters --> convert to miles
                setDistance(data.routes[0].distance/1609.344);
                // reading duration in seconds --> convert to hours
                setDuration(data.routes[0].duration/60/60);
            });
    }, [destinationLat]);

    return (
        <div id='main-container'>
            <MapContainer 
                accessToken={accessToken}
                originLng={originLng}
                originLat={originLat}
                destinationLng={destinationLng}
                destinationLat={destinationLat}
            />
            <Scoreboard 
                distance={distance} 
                duration={duration}
                inGame={inGame}
                onGameStart={onGameStart}
            />
        </div>
    )
}

export default Home