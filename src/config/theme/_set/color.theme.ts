import { css, DefaultTheme } from 'styled-components';

const colors = {
  primary: 'rgb(95, 0, 128)',
  secondary: 'rgb(138,22,176)',
  border: 'rgb(221, 221, 221)',
  gray: 'rgb(181, 181, 181)',
  disable: 'rgba(165, 165, 165, 0.9)',
  white: '#fff',
  black: '#333',
  transparent: 'transparent',
  inherit: 'inherit',
  error: 'red',
};

export type ColorType = typeof colors;
export type ColorKeysType = keyof ColorType;

type CssProperty = 'background' | 'text' | 'border';

export const TColor = (
  theme: DefaultTheme,
  color: keyof ColorType = 'inherit',
  CssProperty: CssProperty = 'text',
) => {
  switch (CssProperty) {
    case 'text':
      return css`
        color: ${theme.colors[color]};
      `;
    case 'background':
      return css`
        background-color: ${theme.colors[color]};
      `;
    case 'border':
      return css`
        border-color: ${theme.colors[color]};
      `;
    default:
  }
};

export default colors;
