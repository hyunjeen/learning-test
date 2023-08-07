import styled from 'styled-components';
import InnerWrap from '@/components/_shared/innerWrap';

const Container = styled(InnerWrap)`
  display: flex;
  flex-direction: column;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 20px;
`;
const Center = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderStyled = { Container, Top, Center, Bottom };

export default HeaderStyled;
