import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import PagerView from 'react-native-pager-view';
import * as Location from 'expo-location';
import {Alert} from 'react-native';
import {NavigationProps} from '../Home/Home';
import Loader from '../../components/Loader/Loader';
import {Questionario as IQuestionario} from '../../interfaces/Questionario';
import {
  AnswearsBlock,
  AnswersContainer,
  AnswersText,
  AvisoContainer,
  AvisoText,
  Container,
  PageRefContainer,
  QuestaoContainer,
  QuestaoText,
  PageRefBall,
} from './styles';

type RouteParams = RouteProp<{
  params: {
    questionario: IQuestionario;
  };
}>;

const Questionario: React.FC = () => {
  const {questionario} = useRoute<RouteParams>().params;
  const [userRes, setUserRes] = useState<{question: string; answer: string}[]>(
    [],
  );
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<NavigationProps>();
  const pagerRef = useRef<PagerView>(null);

  const handleAnswerPress = (
    index: number,
    question: string,
    answer: string,
  ) => {
    const obj = {question, answer};
    setUserRes((prevState) => [...prevState, obj]);
    handlePageChange(index);
  };

  const handlePageChange = (index: number) => {
    if (index + 1 === questionario.questions.length) {
      handleCallSamu();
    }
    pagerRef.current?.setPage(index + 1);
  };

  const handleCallSamu = async () => {
    try {
      const {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Ocorreu um erro', 'Permissão para localização negada!', [
          {text: 'OK'},
        ]);
        return;
      }

      setIsLoading(true);

      const currentLocation = await Location.getCurrentPositionAsync({});
      const userLocation = {
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };
      const currentAddress = await Location.reverseGeocodeAsync({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });

      setIsLoading(false);
      navigation.navigate('Mapa', {userLocation, currentAddress});
    } catch (error) {
      setIsLoading(false);
      Alert.alert('Ocorreu um erro', 'Erro ao obter localização!', [
        {text: 'OK'},
      ]);
    }
  };

  return (
    <>
      <Loader isActive={isLoading} />
      <PagerView
        ref={pagerRef}
        style={{flex: 1}}
        initialPage={0}
        scrollEnabled={false}
      >
        {questionario.questions.map((question, index) => (
          <Container key={index}>
            <QuestaoContainer>
              <QuestaoText>{question.question}</QuestaoText>
            </QuestaoContainer>
            <AvisoContainer>
              <AvisoText>Selecione uma das opções!</AvisoText>
            </AvisoContainer>
            <AnswersContainer>
              {question.objective ? (
                <>
                  <AnswearsBlock
                    onPress={() =>
                      handleAnswerPress(index, question.question, 'sim')
                    }
                  >
                    <AnswersText>Sim</AnswersText>
                  </AnswearsBlock>
                  <AnswearsBlock
                    onPress={() =>
                      handleAnswerPress(index, question.question, 'não')
                    }
                  >
                    <AnswersText>Não</AnswersText>
                  </AnswearsBlock>
                </>
              ) : (
                question.answers?.map((answer) => (
                  <AnswearsBlock
                    onPress={() =>
                      handleAnswerPress(index, question.question, answer)
                    }
                  >
                    <AnswersText>{answer}</AnswersText>
                  </AnswearsBlock>
                ))
              )}
            </AnswersContainer>
            <PageRefContainer>
              {questionario.questions.map((_page, ballIndex) => (
                <PageRefBall isActive={ballIndex <= index} />
              ))}
            </PageRefContainer>
          </Container>
        ))}
      </PagerView>
    </>
  );
};

export default Questionario;
