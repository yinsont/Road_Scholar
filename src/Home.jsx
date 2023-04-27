import React, { useState, useEffect } from 'react'
import MapContainer from './MapContainer';
import Scoreboard from './Scoreboard';
import StartButton from './StartButton';

function Home() {

    const accessToken = 'pk.eyJ1IjoicmFjcXVlbGdsaWNrbWFuIiwiYSI6ImNsZ3FxdGpzYzAzYXczZGx6NmtkanN2Z3YifQ.yK7-WEliO2PFq4PxgG5QFw';

    const [originLng, setOriginLng] = useState(8);
    const [originLat, setOriginLat] = useState(15);
    const [destinationLng, setDestinationLng] = useState(9);
    const [destinationLat, setDestinationLat] = useState(16);
  
    const [inGame, setInGame] = useState(false);
  
    function onSetOrigin(lng, lat) {
      setOriginLng(lng);
      setOriginLat(lat);
    };
  
    function onSetDestination(lng, lat) {
      setDestinationLng(lng);
      setDestinationLat(lat);
    }
  
    function onGameStart(bool) {
      setInGame(bool)
    }

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
        <div id = 'home'>
            <StartButton 
                onSetOrigin={onSetOrigin} 
                onSetDestination={onSetDestination}
                accessToken={accessToken}
                onGameStart={onGameStart}
            />
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
            
        </div>
    )
}

export default Home