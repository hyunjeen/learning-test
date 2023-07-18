import { DefaultTheme } from 'styled-components';

const lightTheme: DefaultTheme = {
  colors: {
    primary: 'rgb(95, 0, 128)',
    secondary: 'rgb(138,22,176)',
    border: 'rgb(221, 221, 221)',
    black: '#333',
    gray: 'rgb(181, 181, 181)',
  },
  border: {
    radius: {
      sm: 5,
      md: 10,
    },
  },
  icon: {
    size: {
      sm: 14,
      md: 20,
      lg: 26,
      xl: 32,
    },
  },
  font: {
    heading: {
      h1: 32,
      h2: 28,
      h3: 24,
      h4: 20,
    },
    text: {
      sm: 12,
      md: 14,
      lg: 16,
      xl: 18,
    },
  },
};
export default lightTheme;
