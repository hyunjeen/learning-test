import Spinner from '@/components/_shared/spinner/Spinner.styled';
import { ReactNode } from 'react';
import Button, { ButtonProps } from '@/components/_shared/button';

interface ButtonWithLoadingProps extends ButtonProps {
  children: ReactNode;
}
function ButtonWithLoading({ children, ...props }: ButtonWithLoadingProps) {
  return <Button {...props}>{props.isLoading ? <Spinner /> : children}</Button>;
}

export default ButtonWithLoading;
