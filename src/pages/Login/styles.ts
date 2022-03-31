import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.main.colors.background};
`;

export const Text = styled.Text`
  font-size: ${(props) => props.theme.main.font.size.big};
  color: ${(props) => props.theme.main.colors.text};
`;
export const InputUser = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.main.colors.text,
}))`
  border-radius: 8px;
  height: 60px;
  width: 332px;
  border-width: 0.5px;
  margin-top: 10px;
  padding: 15px;
  font-size: ${(props) => props.theme.main.font.size.regular};
  background-color: ${(props) => props.theme.main.colors.background};
  border-color: ${(props) => props.theme.colors.border};
  color: ${(props) => props.theme.main.colors.white};
`;

export const RedefinirSenha = styled.Text`
  text-decoration-line: underline;
  margin: 5px 0 20px 200px;
  font-size: ${(props) => props.theme.main.font.size.regular};
  color: ${(props) => props.theme.main.colors.text};
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

export const Image = styled.Image`
  width: 200px;
  height: 100px;
  margin: 50px 0;
`;
export const ImageIcon = styled.Image`
  width: 10px;
  height: 10px;
`;
