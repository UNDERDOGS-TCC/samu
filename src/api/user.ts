import Axios from 'axios';
import User, {
  UserLoginApiResponse,
  UserUpdateApiResponse,
} from '../interfaces/User';

const axios = Axios.create({
  baseURL: 'http://192.168.15.11:3333/api/user', // SE QUISER TESTAR NO CELULAR, ALTERAR PARA IPV4 DA MAQUINA
});

export async function loginApi(
  email: string,
  password: string,
): Promise<UserLoginApiResponse> {
  const res = await axios.post('/login', {email, password});
  return res.data as UserLoginApiResponse;
}

export async function updateApi(newUser: User): Promise<UserUpdateApiResponse> {
  const res = await axios.post('/update', newUser);
  return res.data as UserUpdateApiResponse;
}
