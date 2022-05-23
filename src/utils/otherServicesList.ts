import {ImageSourcePropType} from 'react-native';
import formulario from '../../assets/formularioBranco.png';
import seguranca from '../../assets/seguranca.png';
import saude from '../../assets/saude.png';
import chat from '../../assets/chat.png';

export interface OtherServicesListInterface {
  title: string;
  image: ImageSourcePropType;
  key: string;
}

export default [
  {
    title: 'Formulário de emergência',
    image: formulario as ImageSourcePropType,
    key: '1',
  },
  {
    title: 'Orientações de segurança',
    image: seguranca as ImageSourcePropType,
    key: '2',
  },
  {
    title: 'Detalhes de saúde',
    image: saude as ImageSourcePropType,
    key: '3',
  },
  {
    title: 'Inicie uma conversa',
    image: chat as ImageSourcePropType,
    key: '4',
  },
];
