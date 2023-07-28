import styled, { css } from 'styled-components';
import { BtnSizeType, TBtnSize } from '@/config/theme/_set/btn-size.theme';
import { ChildrenProps } from '@/common/types';

interface BtnStylesProps {
  btnSize?: keyof BtnSizeType;
}
export type BtnProps = BtnStylesProps & ChildrenProps;

const DefaultStyled = styled.button<BtnStylesProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: inherit;
  width: 100%;
  background-color: unset;
  border: unset;
  cursor: pointer;

  ${({ theme, btnSize }) => css`
    ${TBtnSize(theme, btnSize)};
  `}
`;
export default DefaultStyled;
