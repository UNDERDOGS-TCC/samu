import styled from 'styled-components/native';
import PagerView from 'react-native-pager-view';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.main.colors.background};
`;

export const FormContainer = styled(PagerView)`
  flex: 1;
`;

export const PageContainer = styled.ScrollView`
  flex: 1;
  padding: 0px 25px;
`;

export const ImageContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 250px;
`;
