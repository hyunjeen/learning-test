import React from 'react';
import TextButtonStyled from '@/components/_shared/textButton/TextButton.styled';
import { TextSizeKeys } from '@/config/theme/theme.types';

export interface TextButtonProps {
  size: TextSizeKeys;
  label: string;
  onClick?: () => void;
}
function TextButton(props: TextButtonProps) {
  return (
    <TextButtonStyled type="button" onClick={props.onClick} $size={props.size}>
      {props.label}
    </TextButtonStyled>
  );
}

export default TextButton;
