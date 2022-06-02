import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.main.colors.background};
`;

export const QuestaoContainer = styled.View`
  height: 25%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const QuestaoText = styled.Text`
  font-family: ${(props) => props.theme.main.font.family.rubik.medium};
  font-size: ${(props) => props.theme.main.font.size.big};
  color: ${(props) => props.theme.main.colors.text};
`;

export const AvisoContainer = styled.View`
  height: 5%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const AvisoText = styled.Text`
  font-family: ${(props) => props.theme.main.font.family.rubik.medium};
  font-size: ${(props) => props.theme.main.font.size.medium};
  color: ${(props) => props.theme.main.colors.text};
`;

export const AnswersContainer = styled.View`
  height: 65%;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
`;

export const AnswersText = styled.Text`
  font-family: ${(props) => props.theme.main.font.family.rubik.medium};
  font-size: ${(props) => props.theme.main.font.size.big};
  color: ${(props) => props.theme.main.colors.white};
`;

export const AnswearsBlock = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 100%;
  height: 15%;
  border-radius: 10px;
  background-color: ${(props) => props.theme.main.colors.alternate};
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

export const PageRefContainer = styled.View`
  height: 5%;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

interface PageRefBallProps {
  isActive: boolean;
}
export const PageRefBall = styled.View<PageRefBallProps>`
  width: 25px;
  height: 25px;
  border-radius: 50px;
  background-color: ${(props) =>
    props.isActive
      ? props.theme.main.colors.alternate
      : props.theme.main.colors.gray};
  margin-right: 5px;
`;
