import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoicmFjcXVlbGdsaWNrbWFuIiwiYSI6ImNsZ3FxdGpzYzAzYXczZGx6NmtkanN2Z3YifQ.yK7-WEliO2PFq4PxgG5QFw';

function Map({ point1, point2 }) {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
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
                .setLngLat(point1)
                .addTo(map.current);

            const destinationMarker = new mapboxgl.Marker()
                .setLngLat(point2)
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