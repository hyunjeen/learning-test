import styled, { css } from 'styled-components';
import { ButtonProps } from '@/components/_shared/button/index';

const StyledButton = styled.button<Omit<ButtonProps, 'isLoading'>>`
  ${({ theme, color, reverse }) => css`
    display: flex;
    width: 100%;
    height: 38px;
    align-items: center;
    justify-content: center;
    background-color: ${color || theme.colors.primary};
    border-radius: ${theme.borderRadius.sm}px;
    border: 0;
    color: #fff;
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.secondary};
    }

    ${reverse &&
    css`
      background-color: transparent;
      color: ${theme.colors.black};
      border: 1px solid ${color || theme.colors.primary};

      &:hover {
        background-color: transparent;
      }
    `}

    &:disabled {
      background-color: ${theme.colors.disable};
      cursor: not-allowed;
    }
  `}
`;
export default StyledButton;
