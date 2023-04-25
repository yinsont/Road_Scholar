import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoicmFjcXVlbGdsaWNrbWFuIiwiYSI6ImNsZ3FxdGpzYzAzYXczZGx6NmtkanN2Z3YifQ.yK7-WEliO2PFq4PxgG5QFw';

function Map({ origin, destination }) {

    // console.log(origin)
    // console.log(destination) //-72.9, 43.35
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9); //focus view on origin, not coordinate
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v12',
                center: [lng, lat],
                zoom: zoom
            });

            const originMarker = new mapboxgl.Marker()
                .setLngLat(origin)
                .addTo(map.current);
                //start
            const destinationMarker = new mapboxgl.Marker()
                .setLngLat(destination) //end
                .addTo(map.current);
        });
    

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
            map.current.on('move', () => {
                setLng(map.current.getCenter().lng.toFixed(4));
                setLat(map.current.getCenter().lat.toFixed(4));
                setZoom(map.current.getZoom().toFixed(2));
            });
        });
    
        
    return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
    )
}

export default Map;