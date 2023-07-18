import styled, { css } from 'styled-components';

export interface InputProps {
  placeholder?: string;
  isBorder?: boolean;
  isError?: boolean;
}

const Input = styled.input<InputProps>`
  background-color: transparent;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 1px;
  padding: 10px 10px;

  ${({ isBorder }) =>
    isBorder &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.border};
    `}

  ${({ isError }) =>
    isError &&
    css`
      border-color: red;
    `}
`;

export default Input;
