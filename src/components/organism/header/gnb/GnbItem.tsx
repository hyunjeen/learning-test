import React from 'react';
import { TextLinkProps } from '@/components/_unit/textLink';
import GnbStyled from '@/components/organism/header/gnb/Gnb.styled';

function GnbItem(props: TextLinkProps) {
  return (
    <GnbStyled.Item>
      <GnbStyled.ItemText
        {...props}
        textSize="lg"
        textWeight="medium"
        textHoverColor="primary"
      />
    </GnbStyled.Item>
  );
}

export default GnbItem;
