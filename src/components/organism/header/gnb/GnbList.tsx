import React from 'react';
import { ChildrenProps } from '@/common/types';
import GnbStyled from '@/components/organism/header/gnb/Gnb.styled';

function GnbList(props: ChildrenProps) {
  return <GnbStyled.List {...props} />;
}

export default GnbList;
