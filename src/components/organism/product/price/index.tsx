import React from 'react';
import styled from 'styled-components';
import Text from '@/components/_shared/text';
import PriceFormat from '@/utils/priceFormat';

interface PriceProps {
  label: number;
  through?: boolean;
}
const PriceStyled = styled(Text)<PriceProps>``;
function Price(props: PriceProps) {
  return (
    <PriceStyled {...props} textSize="lg" textWeight="black">
      {`${PriceFormat(props.label)}원`}
    </PriceStyled>
  );
}

export default Price;
