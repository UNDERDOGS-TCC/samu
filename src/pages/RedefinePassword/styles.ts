import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.main.colors.background};
`;

export const ScrollContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
})`
  padding: 10px 20px;
`;

export const InputsContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

interface ButtonContainerProps {
  paddingBottom: number;
}

export const ButtonContainer = styled.View<ButtonContainerProps>`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: ${(props) => props.paddingBottom || 0}px;
`;
