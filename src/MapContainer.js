import React from 'react'
import Map, {Marker} from 'react-map-gl';

function MapContainer({ accessToken, originLng, originLat, destinationLng, destinationLat }) {

    return (
        <div id='map-container'>
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