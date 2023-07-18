import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      border: string;
      black: string;
      gray: string;
    };
    border: {
      radius: {
        sm: number;
        md: number;
      };
    };
    icon: {
      size: {
        sm: number;
        md: number;
        lg: number;
        xl: number;
      };
    };
    font: {
      heading: {
        h1: number;
        h2: number;
        h3: number;
        h4: number;
      };
      text: {
        sm: number;
        md: number;
        lg: number;
        xl: number;
      };
    };
  }
}
