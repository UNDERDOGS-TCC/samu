import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes/Routes';

const App: React.FC = () => (
  <NavigationContainer>
    <Routes />
  </NavigationContainer>
);

export default App;
