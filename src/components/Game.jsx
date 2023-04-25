import {React, useState, useEffect} from 'react'
import { accessToken } from 'mapbox-gl';
import Map from './Map';
import Scoreboard from './Scoreboard';
import AnswerForm from './AnswerForm';

function Game() {

  const [profile, setProfile] = useState('driving');
  const [origin, setOrigin] = useState([-70.9, 42.35]);
  const [destination, setDestination] = useState([-72.9, 43.35]);
  const [duration, setDuration] = useState(0)
  const [distance, setDistance] = useState(0)
  accessToken = 'pk.eyJ1IjoicmFjcXVlbGdsaWNrbWFuIiwiYSI6ImNsZ3FxdGpzYzAzYXczZGx6NmtkanN2Z3YifQ.yK7-WEliO2PFq4PxgG5QFw'

  function handleStart() {
    console.log('time to start the game - go fetch the random points');

    // fetch two random points in the usa and set to origin and destination
    generateCoordinates();

    // feed origin and destination into Map to create markers on the map
    // display route between them?
    // get responses from GuessForm 
    // compare to fetched data from this handleStart function

    // fetch(`https://api.mapbox.com/directions/v5/mapbox/${profile}/${origin};${destination}?access_token=${accessToken}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data); 
    //   });
  };

  function swapLatLng(coords) {
    const swapped = [coords[1], coords[0]];
    console.log(swapped);
    return swapped;
  };

  function generateCoordinates() {
    console.log('generating coordinates');

    // lat bounds: 18.91619 --> 71.35776
    // lng bounds: -171.79111 --> -66.96466
    const minLat = 18.91619;
    const maxLat = 71.35776;
    const minLng = -171.79111;
    const maxLng = -66.96466;

    // generate random numbers within these bounds (lng, lat)
    function randomInteger(min, max) {
      return Math.random() * (max - min) + min;
    }

    let randomOrigin = [randomInteger(minLat, maxLat), randomInteger(minLng, maxLng)]
    let randomDestination = [randomInteger(minLat, maxLat), randomInteger(minLng, maxLng)]

    setOrigin(randomOrigin);
    setDestination(randomDestination);

    console.log(origin, destination);
    // check that they are in the us
    // set origin and destination
    // https://api.mapbox.com/geocoding/v5/mapbox.places/-73.989,40.733.json?limit=1&country=us&access_token=pk.eyJ1IjoicmFjcXVlbGdsaWNrbWFuIiwiYSI6ImNsZ3FxdGpzYzAzYXczZGx6NmtkanN2Z3YifQ.yK7-WEliO2PFq4PxgG5QFw

    //https://api.mapbox.com/directions/v5/mapbox/driving/-73.976231%2C40.610636%3B-73.920889%2C40.646246?alternatives=true&geometries=geojson&language=en&overview=simplified&steps=true&access_token=YOUR_MAPBOX_ACCESS_TOKEN
  };

  useEffect(() => {
    fetch(`https://api.mapbox.com/directions/v5/mapbox/${profile}/${origin};${destination}?alternatives=false&geometries=geojson&language=en&overview=simplified&steps=false&access_token=${accessToken}`)
    .then((res) => res.json())
    .then(data => {
      setDistance(data.routes[0].distance)
      setDuration(data.routes[0].duration)
      // console.log(data)
    })//driving duration: 13743.82 distance 253610.109
  },[])


  // console.log(distance,duration)
  // https://docs.mapbox.com/help/tutorials/getting-started-directions-api/h
  // https://docs.mapbox.com/playground/directions/

  return (
    <div>

      <Scoreboard/>
      <AnswerForm distance = {distance} duration = {duration}/>
      <Map origin={origin} destination={destination}/>
    </div>
  )
}

export default Game