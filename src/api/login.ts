import User from '../interfaces/User';

export default function login(email: string, password: string): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'Joazinho da Silva',
        cpf: '12345678901',
        birthday: '22081993',
        cellphone: '11999999999',
        email: 'joazinho@gmail.com',
        address: 'Rua do Joazinho 761',
        cep: '01234567',
        state: 'SP',
        city: 'São Paulo',
        complement: 'N/A',
      });
    }, 5000);
  });
}
