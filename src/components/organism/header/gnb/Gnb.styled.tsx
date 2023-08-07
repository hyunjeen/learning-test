import styled, { css } from 'styled-components';
import Text from '@/components/_shared/text';
import Icon from '@/components/_shared/icon/Icon';
import { TColor } from '@/config/theme/_set/color.theme';
import TextLink from '@/components/_unit/textLink';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
`;
const CategoryWrap = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    ${({ theme }) => css`
      * {
        ${TColor(theme, 'primary', 'text')}
      }
    `}
  }
`;
const CategoryIcon = styled(Icon)`
  margin-right: 10px;
`;
const CategoryText = styled(Text)`
  transform: translateY(-1px);
`;
const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 55px;
`;

const ItemText = styled(TextLink)``;

const GnbStyled = {
  Wrap,
  CategoryIcon,
  CategoryWrap,
  CategoryText,
  ItemText,
  List,
  Item,
};
export default GnbStyled;
