import React from 'react';
import Text from '@/components/_shared/text';
import styled from 'styled-components';

const TitleStyled = styled(Text)`
  margin-bottom: 10px;
  font-size: 18px;
`;
interface TitleProps {
  label: string;
}
function Title(props: TitleProps) {
  return <TitleStyled>{props.label}</TitleStyled>;
}

export default Title;
