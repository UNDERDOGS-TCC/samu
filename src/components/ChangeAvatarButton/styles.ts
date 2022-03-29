import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 200px;
  width: 200px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.main.colors.lightgray};
`;

export const Avatar = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 100px;
`;
