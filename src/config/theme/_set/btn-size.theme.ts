import { css, DefaultTheme } from 'styled-components';

const btnSize = {
  sm: 36,
  md: 44,
  lg: 50,
  xl: 60,
};

export type BtnSizeType = typeof btnSize;

export const TBtnSize = (
  theme: DefaultTheme,
  btnSize: keyof BtnSizeType = 'sm',
) => css`
  height: ${theme.btnSize[btnSize]}px;
`;
export default btnSize;
