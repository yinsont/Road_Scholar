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
                style={{width: '80vw', height: '100vh'}}
                mapStyle="mapbox://styles/mapbox/streets-v12"
                mapboxAccessToken={accessToken}
                >
                    <Marker longitude={originLng? originLng : null} latitude={originLat? originLat : null} anchor="bottom" color='red'/>
                    <Marker longitude={destinationLng? destinationLng : null} latitude={destinationLat? destinationLat : null} anchor="bottom"/>
            </Map>
        </div>
    )
}

export default MapContainer