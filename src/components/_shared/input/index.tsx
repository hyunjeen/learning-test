import { BorderRadiusType } from '@/config/theme/_set/border-radius.theme';
import InputStyled from '@/components/_shared/input/Input.Styled';

export interface InputProps {
  isBorder?: boolean;
  isError?: boolean;
  placeholder?: string;
  radiusSize?: keyof BorderRadiusType;
}
function Input(props: InputProps) {
  return <InputStyled {...props} />;
}

export default Input;
