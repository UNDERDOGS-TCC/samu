import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100px;
  margin: 10px 0;
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.main.font.family.rubik.medium};
  font-size: ${(props) => props.theme.main.font.size.regular};
  color: ${(props) => props.theme.main.colors.text};
`;

export const TextInput = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.main.colors.placeholder,
}))`
  margin: 10px;
  padding: 10px;
  align-self: center;
  width: 100%;
  flex: 1;
  border-width: 1px;
  border-radius: 10px;
  border-color: ${(props) => props.theme.main.colors.border};
  font-family: ${(props) => props.theme.main.font.family.rubik.regular};
  color: ${(props) => props.theme.main.colors.text};
`;
