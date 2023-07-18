import styled, { css } from 'styled-components';

export interface ButtonProps {
  color?: string;
  isLoading: boolean;
}
const StyledButton = styled.button<ButtonProps>`
  display: flex;
  width: 100%;
  height: 38px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, color }) => color || theme.colors.primary};
  border-radius: ${({ theme }) => theme.border.radius.sm}px;
  border: 0;
  color: #fff;
  padding: 10px 20px;

  ${css`
    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
    }

    &:disabled {
      background-color: rgba(165, 165, 165, 0.9);
      cursor: not-allowed;
    }
  `}
`;
const Button = (props: ButtonProps) => (
  <StyledButton {...props} disabled={props.isLoading} />
);
export default Button;
