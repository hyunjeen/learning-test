import styled, { css } from 'styled-components';
import { TColor } from '@/config/theme/_set/color.theme';
import { TBorderRadius } from '@/config/theme/_set/border-radius.theme';
import { InputProps } from '@/components/_shared/input/index';

const StyledInput = styled.input<InputProps>`
  background-color: transparent;
  width: 100%;
  height: 50px;
  border: none;
  outline: none;
  font-size: 15px;

  ${({ isBorder, theme, radiusSize }) =>
    isBorder &&
    css`
      border: 1px solid;
      ${TColor(theme, 'border', 'border')}
      ${TBorderRadius(theme, radiusSize)}
    `}

  ${({ isError, theme }) =>
    isError &&
    css`
      ${TColor(theme, 'error', 'border')}
    `}
`;

export default StyledInput;
