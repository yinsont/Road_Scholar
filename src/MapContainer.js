import React, { useState, useEffect } from 'react'
import Map, {Marker} from 'react-map-gl';

function MapContainer({ onDataFetch }) {

    const accessToken = 'pk.eyJ1IjoicmFjcXVlbGdsaWNrbWFuIiwiYSI6ImNsZ3FxdGpzYzAzYXczZGx6NmtkanN2Z3YifQ.yK7-WEliO2PFq4PxgG5QFw';

    const [profile, setProfile] = useState('driving');
    const [originLng, setOriginLng] = useState(-70.9);
    const [originLat, setOriginLat] = useState(42.35);
    const [destinationLng, setDestinationLng] = useState(-72.9);
    const [destinationLat, setDestinationLat] = useState(43.35);

    useEffect(() => {
        const origin = [originLng,originLat];
        const destination = [destinationLng,destinationLat];

        fetch(`https://api.mapbox.com/directions/v5/mapbox/${profile}/${origin};${destination}?access_token=${accessToken}`)
            .then((res) => res.json())
            .then((data) => {
                onDataFetch(data.routes[0].distance, data.routes[0].duration);
            });
    }, [destinationLat]);

    function handleStart() {
        console.log('time to start the game - go fetch the random points');

        // fetch two random points in the usa and set to origin and destination
        setUSCoordinates(setOriginLng, setOriginLat);
        setUSCoordinates(setDestinationLng, setDestinationLat);
    };

    function setUSCoordinates(lngFunction, latFunction) {
        console.log('generating coordinates');

        let coordinates = generateCoordinates();
        console.log(coordinates);

        checkUS(coordinates, lngFunction, latFunction);
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

    function checkUS(coordinates, lngFunction, latFunction) { 
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${coordinates}.json?limit=1&country=us&access_token=${accessToken}`)
            .then((res) => res.json())
            .then((data) => {
            if (data.features.length !== 0) {
                console.log('good point - in the US!')
                lngFunction(coordinates[0]);
                latFunction(coordinates[1]);
            } else {
                console.log('bad point - not in the US!')
                setUSCoordinates(lngFunction, latFunction); 
            }
            });
    }

    return (
    <div id='map-container'>
        <button onClick={handleStart} style={{margin: '20px'}} >Start game!</button>
        <Map
            height={200}
            width={200}
            initialViewState={{
                longitude: -100,
                latitude: 40,
                zoom: 3
            }}
            style={{width: '70vw', height: '100vh'}}
            mapStyle="mapbox://styles/mapbox/streets-v12"
            mapboxAccessToken={accessToken}
            >
                <Marker longitude={originLng} latitude={originLat} anchor="bottom" color='red'/>
                <Marker longitude={destinationLng} latitude={destinationLat} anchor="bottom"/>

        </Map>
    </div>
    )
}

export default MapContainer