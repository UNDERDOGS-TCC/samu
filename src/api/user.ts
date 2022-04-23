import User from '../interfaces/User';

export function loginApi(email: string, password: string): Promise<User> {
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
        imageUri:
          'file:///Users/guik/Library/Developer/CoreSimulator/Devices/96D0E57F-AB5E-4D28-8E1F-A1BDA509F32F/data/Containers/Data/Application/E1B921A1-05CA-4DD4-99A8-C69F7A469E8A/Library/Caches/ExponentExperienceData/%2540anonymous%252Fsamu-dfb1e503-aa1d-4313-ad0d-ad18fb72d2d9/ImagePicker/7C652D77-650F-429C-9701-6809F985DCAF.jpg',
      });
    }, 5000);
  });
}

export function updateApi(newUser: User): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  });
}
