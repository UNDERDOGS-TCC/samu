import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.main.colors.background};
`;

export const ComingSoonText = styled.Text`
  font-size: ${(props) => props.theme.main.font.size.big};
  font-family: ${(props) => props.theme.main.font.family.rubik.bold};
  color: ${(props) => props.theme.main.colors.text};
`;
