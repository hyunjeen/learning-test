import { createGlobalStyle } from 'styled-components';
import Reset from 'styled-reset';
// eslint-disable-next-line camelcase
import { Noto_Sans_KR } from 'next/font/google';

const noToSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
});

export default createGlobalStyle`
  ${Reset}
  * {
    box-sizing: border-box;
    color: #333;
  }
  html{
    font-family: ${noToSansKr.style.fontFamily};
  }
  a {
    text-decoration: none;
  }
`;
