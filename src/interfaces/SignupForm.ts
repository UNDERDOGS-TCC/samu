interface SignupFormProps {
  handlePressNext: () => void;
  handlePressBack?: () => void;
  paddingBottom?: number;
}

export interface FirstFormProps extends SignupFormProps {
  name: string;
  setName: (name: string) => void;
  password: string;
  setPassword: (password: string) => void;
  passwordConfirmation: string;
  setPasswordConfirmation: (passwordConfirmation: string) => void;
}

export interface SecondFormProps extends SignupFormProps {
  cpf: string;
  setCpf: (cpf: string) => void;
  birthday: string;
  setBirthday: (birthday: string) => void;
  cellphone: string;
  setCellphone: (cellphone: string) => void;
  email: string;
  setEmail: (email: string) => void;
}

export interface ThirdFormProps extends SignupFormProps {
  address: string;
  setAddress: (address: string) => void;
  complement: string;
  setComplement: (complement: string) => void;
  zipCode: string;
  setZipCode: (zipCode: string) => void;
  state: string;
  setState: (state: string) => void;
  city: string;
  setCity: (city: string) => void;
}
