import StyledButton from '@/components/_shared/button/Button.styled';

export interface ButtonProps {
  color?: string;
  isLoading: boolean;
  reverse?: boolean;
}
function Button(props: ButtonProps) {
  return <StyledButton {...props} disabled={props.isLoading} />;
}

export default Button;
