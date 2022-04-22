import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.main.colors.background};
`;

export const InputsContainer = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ButtonsContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
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
  height: 30px;
  margin: 2px 25px 0 0;
  align-self: flex-end;
`;

export const Linha = styled.View`
  height: 0px;
  width: 140px;
  margin-top: 5px;
  border: 1px solid ${(props) => props.theme.main.colors.gray};
`;
export const LadoALado = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 2px 0;
`;

export const ButtonContainer = styled.View`
  width: 90%;
`;

export const InputContainer = styled.View`
  width: 90%;
  margin: -5px;
`;

export const Image = styled.Image`
  width: 200px;
  height: 100px;
  margin: 50px 0 15px;
`;
