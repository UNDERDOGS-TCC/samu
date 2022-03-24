import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.main.colors.background};
`;

export const Text = styled.Text`
  color: ${(props) => props.theme.main.colors.text};
`;

export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
