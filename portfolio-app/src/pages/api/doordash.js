import axios from "axios";

const API_KEY = process.env.API_KEY;

export const getRestaurants = async (location) => {
  const url = `https://api.doordash.com/v2/restaurant/?lat=${location.lat}&lng=${location.lng}`;
  const headers = { Authorization: `Bearer ${API_KEY}` };
  const response = await axios.get(url, { headers });
  return response.data;
};
