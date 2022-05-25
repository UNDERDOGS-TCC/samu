import MapView from 'react-native-maps';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Map = styled(MapView)`
  position: absolute;
  width: 100%;
  height: 100%;
`;
