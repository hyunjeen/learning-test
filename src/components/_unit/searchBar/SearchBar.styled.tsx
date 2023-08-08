import styled, { css } from 'styled-components';
import { TColor } from '@/config/theme/_set/color.theme';
import { TBorderRadius } from '@/config/theme/_set/border-radius.theme';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  padding-left: 10px;
  border: 1px solid;
  ${({ theme }) => css`
    ${TColor(theme, 'primary', 'border')}
    ${TBorderRadius(theme, 'md')}
  `}
`;

const IconWrap = styled.div`
  margin-right: 10px;
`;
export default { Wrap, IconWrap };
