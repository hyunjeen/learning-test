import React from 'react';
import styled from 'styled-components';
import Icon from '@/components/_shared/icon/Icon';
import Text from '@/components/_shared/text';
import { faComment } from '@fortawesome/free-regular-svg-icons';

const ReviewWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const ReviewText = styled(Text).attrs(() => ({
  textWeight: 'bold',
}))`
  color: rgb(153, 153, 153);
`;
function Review() {
  return (
    <ReviewWrap>
      <div style={{ width: '15px' }}>
        <Icon icon={faComment} size="sm" />
      </div>
      <ReviewText>후기</ReviewText>
      <ReviewText>999</ReviewText>
    </ReviewWrap>
  );
}

export default Review;
