import {ImageSourcePropType} from 'react-native';
import formulario from '../../assets/formularioBranco.png';
import seguranca from '../../assets/seguranca.png';
import saude from '../../assets/saude.png';
import chat from '../../assets/chat.png';

export interface OtherServicesListInterface {
  pageTitle: string;
  title: string;
  image: ImageSourcePropType;
  key: string;
}

export default [
  {
    pageTitle: 'Formulário',
    title: 'Formulário de emergência',
    image: formulario as ImageSourcePropType,
    key: '1',
  },
  {
    pageTitle: 'Segurança',
    title: 'Orientações de segurança',
    image: seguranca as ImageSourcePropType,
    key: '2',
  },
  {
    pageTitle: 'Saúde',
    title: 'Detalhes de saúde',
    image: saude as ImageSourcePropType,
    key: '3',
  },
  {
    pageTitle: 'Chat',
    title: 'Inicie uma conversa',
    image: chat as ImageSourcePropType,
    key: '4',
  },
];
