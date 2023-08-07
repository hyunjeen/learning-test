import styled from 'styled-components';
import Text from '@/components/_shared/text';
import Link from '@/components/_shared/link';

interface DeliveryTextProps {
  letterSpacing: number;
}
export const DeliverySearchBtnStyled = styled(Link)``;

export const DeliveryTextWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 8px 10px;
  border: 1px solid #eee;
  border-radius: 9999px;
`;

export const DeliveryText = styled(Text)<DeliveryTextProps>`
  letter-spacing: ${(props) => props.letterSpacing}px;
`;
