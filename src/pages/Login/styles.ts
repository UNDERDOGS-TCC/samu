import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 4%;
`;

export const Text = styled.Text`
  font-size: ${(props) => props.theme.main.font.size.big};
  color: ${(props) => props.theme.main.colors.text};
`;

export const RedefinirSenhaText = styled.Text`
  text-decoration-line: underline;
  font-size: ${(props) => props.theme.main.font.size.regular};
  color: ${(props) => props.theme.main.colors.text};
`;

export const RedefinirSenhaButton = styled.TouchableOpacity`
  margin: -2% 0% 6% 0%;
  align-self: flex-end;
`;

export const Linha = styled.View`
  width: 42%;
  margin-top: 1.5%;
  border: 1px solid ${(props) => props.theme.main.colors.gray};
`;
export const LadoALado = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 1%;
`;

export const Image = styled.Image`
  width: 55%;
  height: 15%;
  margin: 0% 0% 5%;
`;
