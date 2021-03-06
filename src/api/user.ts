/* eslint-disable import/no-unresolved */
import Axios from 'axios';
import {API_URL} from '@env';
import User, {
  UserGenericApiResponse,
  UserLoginApiResponse,
  UserRegister,
  UserRegisterApiResponse,
  UserUpdateApiResponse,
} from '../interfaces/User';

const axios = Axios.create({
  baseURL: `${API_URL}/api/user`,
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

export async function registerApi(
  newUser: UserRegister,
): Promise<UserRegisterApiResponse> {
  const res = await axios.post('/signup', newUser);
  return res.data as UserRegisterApiResponse;
}

export async function getUserById(
  userId: string,
): Promise<UserLoginApiResponse> {
  const res = await axios.get(`/${userId}`);
  return res.data as UserLoginApiResponse;
}

export async function resetPassword(
  cpf: string,
  email: string,
  birthday: string,
): Promise<UserGenericApiResponse> {
  const res = await axios.post('/resetpassword', {cpf, email, birthday});
  return res.data as UserGenericApiResponse;
}

export async function redefinePassword(
  id: string,
  oldPassword: string,
  newPassword: string,
): Promise<UserGenericApiResponse> {
  const res = await axios.post('/redefinepassword', {
    id,
    oldPassword,
    newPassword,
  });
  return res.data as UserGenericApiResponse;
}
