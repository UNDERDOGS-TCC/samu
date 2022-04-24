import Axios from 'axios';
import User, {UserApiResponse} from '../interfaces/User';

const axios = Axios.create({
  baseURL: 'http://localhost:3333',
});

export async function loginApi(
  email: string,
  password: string,
): Promise<UserApiResponse> {
  const res = await axios.post('/login', {email, password});
  return res.data as UserApiResponse;
}

export async function updateApi(newUser: User): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  });
}
