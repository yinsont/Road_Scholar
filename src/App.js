import './App.css';
// import Map from './Map';
import GuessForm from './GuessForm';
import { accessToken } from 'mapbox-gl';
import { useState } from 'react'
import Map, {Marker} from 'react-map-gl';


function App() {

  accessToken = 'pk.eyJ1IjoicmFjcXVlbGdsaWNrbWFuIiwiYSI6ImNsZ3FxdGpzYzAzYXczZGx6NmtkanN2Z3YifQ.yK7-WEliO2PFq4PxgG5QFw';

  const [profile, setProfile] = useState('driving');
  const [originLng, setOriginLng] = useState(-70.9);
  const [originLat, setOriginLat] = useState(42.35);
  const [destinationLng, setDestinationLng] = useState(-72.9);
  const [destinationLat, setDestinationLat] = useState(43.35);

  function handleStart() {
    console.log('time to start the game - go fetch the random points');

    // fetch two random points in the usa and set to origin and destination
    const randomOrigin = generateCoordinates();
    const randomDestination = generateCoordinates();

    // create markers on the map 
    setOriginLng(randomOrigin[0]);
    setOriginLat(randomOrigin[1]);
    setDestinationLng(randomDestination[0]);
    setDestinationLat(randomDestination[1]);

    // display route between them?
    // get responses from GuessForm 
    // compare to fetched data from this handleStart function

    // fetch(`https://api.mapbox.com/directions/v5/mapbox/${profile}/${randomOrigin};${randomDestination}?access_token=${accessToken}`)
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

  // generate random numbers within these bounds (lng, lat)
  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  };

  function generateCoordinates() {
    console.log('generating coordinates');

    const minLat = 24.7433195;
    const maxLat = 49.3457868;
    const minLng = -124.7844079;
    const maxLng = -66.9513812;

    const coordinates = [randomInteger(minLng, maxLng), randomInteger(minLat, maxLat)];

    // check that they are on land in the us
    checkUS(coordinates);

    return coordinates;
  }

  function checkUS(coordinates) {
    console.log('checking if coordinates are in the US');

    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${coordinates}.json?limit=1&country=us&access_token=${accessToken}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.features.length === 0) {
        console.log('point not in the US');
      };
    });
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
              <Marker longitude={originLng} latitude={originLat} anchor="bottom"/>
              <Marker longitude={destinationLng} latitude={destinationLat} anchor="bottom"/>
            </Map>
                
        </div>
        <GuessForm />
        <div id='scoreboard'>Scoreboard goes here</div>
      </div>
    </div>
  );
};

export default App;
