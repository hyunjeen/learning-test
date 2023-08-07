import styled from 'styled-components';
import IconButton from '@/components/_unit/iconButton';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

const Wrap = styled.div`
  display: flex;
  width: 150px;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-left: 50px;
`;

const Icon = styled(IconButton).attrs<FontAwesomeIconProps>(() => ({
  size: 'xl',
}))``;

const userServiceStyled = { Wrap, Icon };
export default userServiceStyled;
