export default interface User {
  _id?: string;
  name: string;
  cpf: string;
  birthday: string;
  cellphone: string;
  email: string;
  address: string;
  cep: string;
  state: string;
  city: string;
  complement: string;
  imageUri: string;
}

export interface UserRegister extends User {
  password?: string;
  passwordConfirmation?: string;
}

export interface UserLoginApiResponse {
  message: string;
  success: boolean;
  user?: User;
  id?: string;
}

export interface UserUpdateApiResponse {
  message: string;
  success: boolean;
  id?: string;
}

export interface UserRegisterApiResponse {
  message: string;
  success: boolean;
  id?: string;
}
