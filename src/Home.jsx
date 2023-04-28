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

    const [distance, setDistance] = useState(0); // in meters
    const [duration, setDuration] = useState(0); // in seconds
    
    function onSetOrigin(coordinates) {
      setOriginLng(coordinates[0]);
      setOriginLat(coordinates[1]);
    };
  
    function onSetDestination(coordinates) {
      setDestinationLng(coordinates[0]);
      setDestinationLat(coordinates[1]);
    }

    useEffect(() => {
        const origin = [originLng,originLat];
        const destination = [destinationLng,destinationLat];

        fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${origin};${destination}?access_token=${accessToken}`)
            .then((res) => res.json())
            .then((data) => {
                // reading distance in meters --> convert to miles
                setDistance(data.routes[0].distance/1609.344);
                // reading duration in seconds --> convert to hours
                setDuration(data.routes[0].duration/60/60);
            })
            .catch((error) => {
                alert(`Sorry - here's a bug that we haven't quite figured out yet 🤷‍♀️ Pick a new point 🙃`)
            })
    }, [destinationLat]);

    return (
        <div >
            <StartButton 
                onSetOrigin={onSetOrigin} 
                onSetDestination={onSetDestination}
                accessToken={accessToken}
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
                />
            </div>
            
        </div>
    )
}

export default Home