import { createGlobalStyle } from 'styled-components';
import Reset from 'styled-reset';

export default createGlobalStyle`
  ${Reset}
  * {
    box-sizing: border-box;
  }
`;
