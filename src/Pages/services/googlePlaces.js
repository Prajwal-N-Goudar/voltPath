import axios from "axios";

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export async function getCoordinates(city) {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${API_KEY}`
  );

  if (response.data.results.length === 0) return null;

  return response.data.results[0].geometry.location;
}