import styled, { css } from 'styled-components';

const BannerButton = styled.button<{
  direction: 'next' | 'prev';
  showButton: boolean;
}>`
  display: inline-flex;
  visibility: ${({ showButton }) => (showButton ? 'visible' : 'hidden')};
  opacity: ${({ showButton }) => (showButton ? 1 : 0)};
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.4);
  border: unset;
  border-radius: ${({ theme }) => theme.borderRadius.full}px;
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 10%;
  margin: auto;
  transition: all 0.5s ease 0s;
  ${({ direction }) =>
    direction === 'next' &&
    css`
      left: unset;
      right: 10%;
    `}

  &:after {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: swiper-icons, serif;
    content: ${({ direction }) => `"${direction}"`};
    transform: translateX(
      ${({ direction }) => (direction === 'next' ? 2 : -2)}px
    );
    color: white;
    font-size: 25px;
  }
`;

export default BannerButton;
