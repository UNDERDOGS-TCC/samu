import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const OptionContainer = styled.View`
  width: 100%;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const OptionText = styled.Text`
  color: ${(props) => props.theme.main.colors.text};
  font-family: ${(props) => props.theme.main.font.family.ubuntu.regular};
  font-size: ${(props) => props.theme.main.font.size.regular};
`;
