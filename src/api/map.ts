// eslint-disable-next-line import/no-unresolved
import {API_URL} from '@env';
import Axios from 'axios';
import {RandomLocationApiResponse} from '../interfaces/Map';

const axios = Axios.create({
  baseURL: `${API_URL}/api/map`,
});

export async function randomLocationApi(
  lat: number,
  lng: number,
  radius = 2000,
): Promise<RandomLocationApiResponse> {
  const res = await axios.post('/randomLocation', {
    latitude: lat,
    longitude: lng,
    radius,
  });
  return res.data as RandomLocationApiResponse;
}

export async function closestSamuBaseApi(
  lat: number,
  lng: number,
): Promise<RandomLocationApiResponse> {
  const res = await axios.post('/closestSamuBase', {lat, lng});
  return res.data as RandomLocationApiResponse;
}
