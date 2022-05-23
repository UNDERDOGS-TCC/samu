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

export interface UserGenericApiResponse {
  message: string;
  success: boolean;
}

export interface UserRegister extends User {
  password?: string;
  passwordConfirmation?: string;
}

export interface UserLoginApiResponse extends UserGenericApiResponse {
  user?: User;
  id?: string;
}

export interface UserUpdateApiResponse extends UserGenericApiResponse {
  id?: string;
}

export interface UserRegisterApiResponse extends UserGenericApiResponse {
  id?: string;
}
