import styled from 'styled-components';

const PageNation = styled.div<{ showButton: boolean }>`
  visibility: ${({ showButton }) => (showButton ? 'visible' : 'hidden')};
  opacity: ${({ showButton }) => (showButton ? 1 : 0)};
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 5px 30px;
  border-radius: 99999px;
  bottom: 10px;
  width: 30px;
  left: 0;
  right: 0;
  margin: 0 auto;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  transition: all 0.5s ease 0s;

  & > span {
    color: white;
  }
`;

export default PageNation;
