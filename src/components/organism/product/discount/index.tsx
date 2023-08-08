import styled from 'styled-components';
import Text from '@/components/_shared/text';

const DiscountStyled = styled(Text)`
  color: rgb(250, 98, 47);
  font-size: 16px;
`;
interface DiscountProps {
  label: number;
}
const Discount = (props: DiscountProps) => {
  return <DiscountStyled>{`${props.label}%`}</DiscountStyled>;
};

export default Discount;
