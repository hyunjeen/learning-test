import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;
const InputWrap = styled.div`
  width: 100%;
  padding-right: 20px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;
const IconWrap = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  transform: translateY(25%);
`;
export default { Wrap, InputWrap, IconWrap };
