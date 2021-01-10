import axios from 'axios'

async function getVehiclesFromApi(access_token) {
  const response = await axios.get(`https://localhost:6001/api/Vehicles`, { headers: { 'Authorization': `Bearer ${access_token}` } });
  return response.data;
}

async function registerVehicle(vehicle, access_token) {
  console.log(vehicle);
  const response = await axios.post(`https://localhost:6001/api/Vehicles`, vehicle, { headers: { 'Authorization': `Bearer ${access_token}` } });
  return response.data;
}

export {
  getVehiclesFromApi,
  registerVehicle
}
