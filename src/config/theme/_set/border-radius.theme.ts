import { css, DefaultTheme } from 'styled-components';

const borderRadius = {
  sm: 2,
  md: 5,
  lg: 10,
  full: 99999,
};
export type BorderRadiusType = typeof borderRadius;

export const TBorderRadius = (
  theme: DefaultTheme,
  roundSize: keyof BorderRadiusType = 'sm',
) => css`
  border-radius: ${theme.borderRadius[roundSize]}px;
`;
export default borderRadius;
