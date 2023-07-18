import StyledButton from '@/components/_shared/button/Button.styled';

export interface ButtonProps {
  color?: string;
  isLoading: boolean;
  reverse?: boolean;
}

function Button({ isLoading, ...props }: ButtonProps) {
  return <StyledButton {...props} disabled={isLoading} />;
}

export default Button;
