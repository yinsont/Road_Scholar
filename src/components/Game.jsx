import {React, useState, useEffect} from 'react'
import { accessToken } from 'mapbox-gl';
import Map from './Map';
import Leaderboard from './Scoreboard';
import AnswerForm from './AnswerForm';

function Game() {

  const [profile, setProfile] = useState('driving');
  const [origin, setOrigin] = useState('-73.71234573087169,40.63646047964748');
  const [destination, setDestination] = useState('-73.73293698854545,40.61385444864606');
  accessToken = 'pk.eyJ1IjoicmFjcXVlbGdsaWNrbWFuIiwiYSI6ImNsZ3FxdGpzYzAzYXczZGx6NmtkanN2Z3YifQ.yK7-WEliO2PFq4PxgG5QFw'

  console.log('gameStart')

  useEffect(() => {
    fetch(`https://api.mapbox.com/directions/v5/mapbox/${profile}/${origin};${destination}?access_token=${accessToken}`)
    .then((res) => res.json())
    .then(data => console.log(data))
  },[])


  return (
    <div>
      <Map></Map>
      <Leaderboard/>
      <AnswerForm/>
    </div>
  )
}

export default Game