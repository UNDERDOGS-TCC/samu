import React from 'react';
import {useTheme} from '../../contexts/ThemeManagerProvider';
import {Container, LoaderContainer, LottieView, Wrapper} from './styles';

import loaderDarkMode from '../../../assets/loader.json';
import loaderLightMode from '../../../assets/loader_whitemode.json';

interface LoaderProps {
  isActive: boolean;
}

const Loader: React.FC<LoaderProps> = ({isActive}) => {
  const {isDarkMode} = useTheme();

  return (
    <Wrapper visible={isActive}>
      <Container>
        <LoaderContainer>
          <LottieView
            source={isDarkMode ? loaderDarkMode : loaderLightMode}
            loop
            autoPlay
          />
        </LoaderContainer>
      </Container>
    </Wrapper>
  );
};

export default Loader;
