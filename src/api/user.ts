import axios from 'axios';
import User from '../interfaces/User';

export function loginApi(email: string, password: string): Promise<User> {
  return new Promise((resolve) => {
    axios
      .post('localhost:3333/login', {
        email,
        password,
      })
      .then((res) => resolve(res.data as User));
  });
}

export function updateApi(newUser: User): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  });
}
