import React, { useState } from 'react'
import { signoutRedirect } from '../services/userService'
import { useSelector } from 'react-redux'
import * as apiService from '../services/apiService'
import { prettifyJson } from '../utils/jsonUtils'
import { useEffect } from 'react'

function Home() {
  const user = useSelector(state => state.auth.user)
  const [model, setModel] = useState('')
  const [licensePlate, setlicensePlate] = useState('')
  const [color, setColor] = useState('White')
  const [type, setType] = useState(1)

  useEffect(() => {
    getVehicles();
  }, []);

  const [vehicleData, setVehicleData] = useState(null)
  function signOut() {
    signoutRedirect()
  }

  async function getVehicles() {
    console.log(user);
    const vehicles = await apiService.getVehiclesFromApi(user.access_token);
    setVehicleData(vehicles);
  }

  async function registerVehicle() {
    await apiService.registerVehicle({ model, licensePlate, color, type }, user.access_token);
    await getVehicles();
  }

  function getType(type) {
    switch (type){
      case 1:
        return "Sedan";
      case 2:
        return "SUV";
        case 3:
          return "Pickup";
    }
  }

  // async function getDoughnuts() {
  //   console.log(user);
  //   const doughnuts = await apiService.getDoughnutsFromApi(user.id);
  //   setDoughnutData(doughnuts)
  // }

  return (
    <div>
      <h1>Traffic Police</h1>
      <p>Hello, {user.profile.given_name}.</p>

      <button className="button button-outline" onClick={() => getVehicles()}>Get Vehicles</button>
      <button className="button button-clear" onClick={() => signOut()}>Sign Out</button>

      <h3>Register Vehicle:</h3>

      <form onSubmit={e => e.preventDefault()}>
        <div className="form-group">
          <label>Model: </label>
          <input value={model} type="text" name="model" onChange={e => setModel(e.target.value)} />
          <label>License Plate: </label>
          <input value={licensePlate} type="text" name="licensePlate" onChange={e => setlicensePlate(e.target.value)} />
          <label>Color: </label>
          <input value={color} type="text" name="color" onChange={e => setColor(e.target.value)} />
          <label>Type: </label>
          <select value={type} name="type" onChange={e => setType(e.target.value)} >
            <option value="1">Sedan</option>
            <option value="2">SUV</option>
            <option value="3">Pickup</option>
          </select>
        </div>

        <button className="btn" onClick={() => registerVehicle()} >Register</button>
      </form>

      <h3>Your Vehicles:</h3>

{
  vehicleData ?
    <ul>
      { vehicleData.map(v => (<li key={v.id}>{v.color} {v.model} ({v.licensePlate}) - {getType(v.type)}</li>)) }
    </ul>
      :
      <p>No vehicles yet :(</p>
}

      <pre>
        <code>
          {prettifyJson(vehicleData ? vehicleData : 'No vehicles yet :(')}
        </code>
      </pre>
      <p><a target='_blank' rel='noopener noreferrer' href='https://github.com/tappyy/react-IS4-auth-demo'>Github Repo</a></p>

    </div>
  )
}

export default Home
