import Checkbox from 'expo-checkbox';
import {View, Text, StyleSheet} from 'react-native';
import React, {useRef, useState} from 'react';
import PagerView from 'react-native-pager-view';
import {useNavigation} from '@react-navigation/native';
import {
  Titulo,
  Check,
  Texto,
  Container,
  Textott,
  BotaoAnterior,
  BotaoProximo,
  Input,
} from './styles';

const Questionario: React.FC = () => {
  const navigation = useNavigation();
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);
  const [isChecked4, setChecked4] = useState(false);
  const pagerRef = useRef<PagerView>(null);
  const [pagSelect, setPagSelect] = useState(0);
  const [text, onChangeText] = React.useState('');
  const checkBox1 = () => {
    setChecked1(!isChecked1);
    setChecked2(false);
    setChecked3(false);
    setChecked4(false);
  };
  const checkBox2 = () => {
    setChecked1(false);
    setChecked2(!isChecked2);
    setChecked3(false);
    setChecked4(false);
  };
  const checkBox3 = () => {
    setChecked1(false);
    setChecked2(false);
    setChecked3(!isChecked3);
    setChecked4(false);
  };
  const checkBox4 = () => {
    setChecked1(false);
    setChecked2(false);
    setChecked3(false);
    setChecked4(!isChecked4);
  };

  return (
    <>
      <PagerView
        ref={pagerRef}
        style={styless.viewPager}
        initialPage={0}
        scrollEnabled={false}
      >
        <View key="1">
          <Titulo>
            <Text>Como você classificaria essa ocorrência?</Text>
          </Titulo>

          <Container>
            <Check value={isChecked1} onValueChange={checkBox1} color="White" />
            <Texto>Assalto</Texto>
          </Container>

          <Container>
            <Check value={isChecked2} onValueChange={checkBox2} color="White" />
            <Texto>Violência Doméstica</Texto>
          </Container>

          <Container>
            <Check value={isChecked3} onValueChange={checkBox3} color="White" />
            <Texto>Sequestro</Texto>
          </Container>

          <Container>
            <Check value={isChecked4} onValueChange={checkBox4} color="White" />
            <Texto>Outros</Texto>
          </Container>

          <View>
            {isChecked4 === true && (
              <Input
                multiline
                numberOfLines={4}
                onChangeText={onChangeText}
                value={text}
              />
            )}
          </View>
        </View>

        <View key="2">
          <Text>Second page</Text>
        </View>

        <View key="3">
          <Text>Third page</Text>
        </View>
      </PagerView>

      <View style={{flexDirection: 'row', width: '100%'}}>
        {pagSelect !== 0 && (
          <BotaoAnterior
            onPress={() => {
              setPagSelect((value) => {
                const newValue = value - 1;
                pagerRef.current?.setPage(newValue);
                return newValue;
              });
            }}
          >
            <Textott>Anterior</Textott>
          </BotaoAnterior>
        )}
        {pagSelect !== 2 && (
          <BotaoProximo
            onPress={() => {
              setPagSelect((value) => {
                const newValue = value + 1;
                pagerRef.current?.setPage(newValue);
                return newValue;
              });
            }}
            disabled={
              isChecked1 === false &&
              isChecked2 === false &&
              isChecked3 === false &&
              isChecked4 === false
            }
          >
            <Textott>Próximo</Textott>
          </BotaoProximo>
        )}
      </View>
    </>
  );
};

const styless = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
});

export default Questionario;
