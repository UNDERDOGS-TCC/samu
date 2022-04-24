export default interface User {
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

export interface UserApiResponse {
  message: string;
  success: boolean;
  user?: User;
  id?: string;
}
