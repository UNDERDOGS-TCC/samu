import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Text = styled.Text`
  color: ${(props) => props.theme.colors.text};
`;

export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
