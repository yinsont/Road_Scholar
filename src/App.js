import './App.css';
import Map from './Map';
import GuessForm from './GuessForm';
import { accessToken } from 'mapbox-gl';
import {useState} from 'react'

function App() {

  const [profile, setProfile] = useState('driving');
  const [origin, setOrigin] = useState('-73.71234573087169,40.63646047964748');
  const [destination, setDestination] = useState('-73.73293698854545,40.61385444864606');
  accessToken = 'pk.eyJ1IjoicmFjcXVlbGdsaWNrbWFuIiwiYSI6ImNsZ3FxdGpzYzAzYXczZGx6NmtkanN2Z3YifQ.yK7-WEliO2PFq4PxgG5QFw'

  function handleStart() {
    console.log('time to start the game - go fetch the random points');

    // fetch two random points in the usa and set to origin and destination
    generateCoordinates();

    // feed origin and destination into Map to create markers on the map
    // display route between them?
    // get responses from GuessForm 
    // compare to fetched data from this handleStart function

    fetch(`https://api.mapbox.com/directions/v5/mapbox/${profile}/${origin};${destination}?access_token=${accessToken}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  function generateCoordinates() {
    console.log('generating coordinates');

  };

  return (
    <div className="App">
      <h1>Phase 2 Project</h1>
      <button onClick={handleStart} style={{margin: '20px'}} >Start game!</button>
      <Map />
      <GuessForm />
    </div>
  );
}

export default App;
