import 'styled-components';
import {lightMode} from '../src/themes/theme';

declare module 'styled-components' {
  type ThemeType = typeof lightMode;
  export interface DefaultTheme extends ThemeType {}
}
