import styled from 'styled-components/native';
import PagerView from 'react-native-pager-view';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.main.colors.background};
`;

export const FormContainer = styled(PagerView)`
  flex: 1;
`;

interface PageContainerProps {
  paddingBottom?: number;
}

export const PageContainer = styled.ScrollView.attrs<PageContainerProps>(
  (props) => ({
    contentContainerStyle: {
      paddingBottom: props.paddingBottom || 0,
    },
  }),
)<PageContainerProps>`
  flex: 1;
  padding: 0px 25px;
`;

export const ImageContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 250px;
`;

export const DoubleInputContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InputContainer = styled.View`
  width: 48%;
`;
