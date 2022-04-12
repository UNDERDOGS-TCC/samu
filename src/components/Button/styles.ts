import styled from 'styled-components/native';

interface ContainerProps {
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
  active: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 100%;
  height: 70px;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  border-radius: 8px;

  ${(props) => {
    if (!props.active) {
      return `background-color: ${props.theme.main.colors.gray}`;
    }

    if (props.secondary) {
      return `background-color: ${props.theme.main.colors.secondary}`;
    }

    if (props.danger) {
      return `background-color: ${props.theme.main.colors.danger}`;
    }
    return `background-color: ${props.theme.main.colors.primary}`;
  }}
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.main.font.family.rubik.medium};
  font-size: ${(props) => props.theme.main.font.size.regular};
  color: ${(props) => props.theme.main.colors.white};
  text-transform: uppercase;
`;
