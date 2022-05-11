import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.main.colors.background};
`;
export const OptionContainer = styled.View`
  height: 90%;
  width: 90%;
  justify-content: center;
`;
export const ImageContainer = styled.View`
  align-items: center;
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
  width: 38%;
  align-self: flex-end;
  margin: -2% 0 10% 0;
`;

export const Linha = styled.View`
  width: 45%;
  margin-top: 2%;
  border: 1px solid ${(props) => props.theme.main.colors.gray};
`;
export const LadoALado = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  width: 100%;
`;

export const InputContainer = styled.View`
  width: 100%;
`;

export const Image = styled.Image`
  width: 50%;
  height: 45%;
  margin: 20% 0% -50% 0%;
`;
