import React from 'react';
import styled from 'styled-components';
import TextLink from '@/components/_unit/textLink';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
`;
function ShopSectionLinks() {
  return (
    <Wrap>
      <TextLink
        href="/"
        label="마켓컬리"
        spacer={14}
        textSize="xl"
        textWeight="medium"
        textColor="primary"
      />
      <TextLink
        label="뷰티컬리"
        href="/"
        textSize="xl"
        textWeight="medium"
        textColor="gray"
        textHoverColor="primary"
      />
    </Wrap>
  );
}

export default ShopSectionLinks;
