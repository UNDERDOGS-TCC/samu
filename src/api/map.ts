// eslint-disable-next-line import/no-unresolved
import {API_URL} from '@env';
import Axios from 'axios';
import {LocationApiResponse} from '../interfaces/Map';

const axios = Axios.create({
  baseURL: `${API_URL}/api/map`,
});

export async function randomLocationApi(
  lat: number,
  lng: number,
): Promise<LocationApiResponse> {
  const res = await axios.post('/randomLocation', {
    latitude: lat,
    longitude: lng,
  });
  return res.data as LocationApiResponse;
}

export async function closestSamuBaseApi(
  lat: number,
  lng: number,
): Promise<LocationApiResponse> {
  const res = await axios.post('/samuLocation', {lat, lng});
  return res.data as LocationApiResponse;
}
