import styled from 'styled-components';
import { TextSizeKeys } from '@/config/theme/theme.types';

const TextButtonStyled = styled.button<{ $size: TextSizeKeys }>`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme, $size }) =>
    theme.font.text[$size] || theme.font.text.sm}px;

  :hover {
    cursor: pointer;
  }
`;

export default TextButtonStyled;
