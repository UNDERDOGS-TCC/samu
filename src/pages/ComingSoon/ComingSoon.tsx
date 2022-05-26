import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ComingSoonText, Container} from './styles';

type RouteParams = RouteProp<{
  params: {
    pageTitle: string;
  };
}>;

const ComingSoon: React.FC = () => {
  const navigation = useNavigation();
  const {pageTitle} = useRoute<RouteParams>().params;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: pageTitle,
      headerBackTitle: 'Menu',
    });
  }, [navigation, pageTitle]);

  return (
    <Container>
      <ComingSoonText>Em breve...</ComingSoonText>
    </Container>
  );
};

export default ComingSoon;
