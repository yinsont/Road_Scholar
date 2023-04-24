import logo from './logo.svg';
import './App.css';
// import Map from './Map';
import GuessForm from './GuessForm';
import { accessToken } from 'mapbox-gl';
import { useState } from 'react'
import Map, {Marker} from 'react-map-gl';


function App() {

  const [profile, setProfile] = useState('driving');
  const [origin, setOrigin] = useState([-70.9, 42.35]);
  const [destination, setDestination] = useState([-72.9, 43.35]);
  accessToken = 'pk.eyJ1IjoicmFjcXVlbGdsaWNrbWFuIiwiYSI6ImNsZ3FxdGpzYzAzYXczZGx6NmtkanN2Z3YifQ.yK7-WEliO2PFq4PxgG5QFw'

  console.log(origin[0])

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
      return Math.floor(Math.random() * (max - min) ) + min;
    };

    // check that they are on land in the us

    // https://api.mapbox.com/geocoding/v5/mapbox.places/-73.989,40.733.json?limit=1&country=us&access_token=pk.eyJ1IjoicmFjcXVlbGdsaWNrbWFuIiwiYSI6ImNsZ3FxdGpzYzAzYXczZGx6NmtkanN2Z3YifQ.yK7-WEliO2PFq4PxgG5QFw

    // set origin and destination
    setOrigin([randomInteger(minLng, maxLng), randomInteger(minLat, maxLat)]);
    setDestination([randomInteger(minLng, maxLng), randomInteger(minLat, maxLat)]);

    console.log(origin, destination);

  };

  return (
    <div className="App">
      <div id='container'>
        <h1>Phase 2 Project</h1>
        <button onClick={handleStart} style={{margin: '20px'}} >Start game!</button>
        <div id='mapdiv'>
          <Map
            height={200}
            width={200}
            initialViewState={{
              longitude: -100,
              latitude: 40,
              zoom: 3
            }}
            style={{width: '100vw', height: '100vh'}}
            mapStyle="mapbox://styles/mapbox/streets-v12"
            mapboxAccessToken={accessToken}
            >
              <Marker longitude={-70.9} latitude={42.35} anchor="bottom"/>
              <Marker longitude={-72.9} latitude={43.35} anchor="bottom"/>

            </Map>
                  
          <GuessForm />
        </div>
        <div id='scoreboard'>Scoreboard goes here</div>
      </div>
    </div>
  );
};

export default App;
