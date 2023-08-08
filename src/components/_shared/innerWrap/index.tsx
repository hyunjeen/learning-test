import React from 'react';
import { ChildrenProps } from '@/common/types';
import styled from 'styled-components';

const Wrap = styled.div`
  max-width: 1200px;
  margin: auto;
`;
function InnerWrap({ children }: ChildrenProps) {
  return <Wrap>{children}</Wrap>;
}

export default InnerWrap;
