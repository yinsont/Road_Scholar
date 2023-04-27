import React, { useContext } from 'react'
import { MyContext } from "./MyProvider";

function StartButton({ onSetOrigin, onSetDestination, accessToken }) {

    const { onStartGame, onResetTime } = useContext(MyContext);

    function handleStart() {
        onStartGame(true);
        onResetTime(10);
        
        console.log('##starting to fetch coordinates##')

        setUSCoordinates('origin', onSetOrigin);
        setUSCoordinates('destination', onSetDestination);


        // console.log('##starting to fetch coordinates##')
        // setUSCoordinates('origin')
        //     .then((data) => {
        //         console.log(data)
        //         if (data){
        //             onSetOrigin(data);
        //         }
        //         console.log('##fetched origin successfully##')
        //         setUSCoordinates('destination')
        //             .then((data) => {
        //                 console.log(data)
        //                 if (data){
        //                     onSetDestination(data);
        //                 }
        //                 console.log('##fetched destination successfully##')
        //             })
        //     })


    };

    // generate random numbers within these bounds (lng, lat)
    function randomNumber(min, max) {
        return (Math.random() * (max - min)) + min;
    };

    function setUSCoordinates(message, setFunction) {

        const minLat = 24.7433195;
        const maxLat = 49.3457868;
        const minLng = -124.7844079;
        const maxLng = -66.9513812;

        let coordinates = [randomNumber(minLng, maxLng), randomNumber(minLat, maxLat)];
        console.log('generating point:', message, coordinates);

        // const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${coordinates}.json?limit=1&country=us&access_token=${accessToken}`)

        // const data = await response.json()

        // if (data.features.length !== 0) {
        //     console.log(message, ' - good point - in the US!')
        //     console.log(data.query)
        //     return data.query;
        // } 
        //     console.log(message, ' - bad point - not in the US!')
        //     setUSCoordinates(message); 
    
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${coordinates}.json?limit=1&country=us&access_token=${accessToken}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.features.length !== 0) {
                    console.log(message, ' - good point - in the US!')
                    setFunction(data.query)
                } else {
                    console.log(message, ' - bad point - not in the US!')
                    setUSCoordinates(message, setFunction); 
                }
            });
    };

    return (
        <div>
            <button onClick={handleStart} >Start game!</button>
        </div>
    )
}

export default StartButton