import React from 'react';
import {
  DeliverySearchBtnStyled,
  DeliveryText,
  DeliveryTextWrap,
} from '@/components/organism/header/deliverySearchBtn/DeliverySaerchBtn.styled';

function DeliverySearchBtn() {
  return (
    <DeliverySearchBtnStyled href="/">
      <DeliveryTextWrap>
        <DeliveryText textSize="md" textColor="primary" letterSpacing={-0.6}>
          샛별・택배
        </DeliveryText>
        <DeliveryText textSize="md" letterSpacing={-0.35}>
          배송안내
        </DeliveryText>
      </DeliveryTextWrap>
    </DeliverySearchBtnStyled>
  );
}

export default DeliverySearchBtn;
