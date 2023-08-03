import { css, DefaultTheme } from 'styled-components';

const font = {
  size: {
    h1: 36,
    h2: 32,
    h3: 28,
    h4: 24,
    xl: 18,
    lg: 16,
    md: 14,
    sm: 12,
  },
  weight: {
    normal: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },
};

export type FontType = typeof font;
export type FontSizeType = typeof font.size;
export type FontSizeKeysType = keyof FontSizeType;
export type FontWeightType = typeof font.weight;
export type FontWeightKeysType = keyof FontWeightType;

export const TFontSize = (
  theme: DefaultTheme,
  fontSize: keyof FontSizeType = 'sm',
) => css`
  font-size: ${theme.font.size[fontSize]}px;
`;

export const TFontWeight = (
  theme: DefaultTheme,
  fontWeight: keyof FontWeightType = 'normal',
) => css`
  font-weight: ${theme.font.weight[fontWeight]};
`;

export default font;
