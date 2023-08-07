import styled from 'styled-components';
import TextLink, { TextLinkProps } from '@/components/_unit/textLink';

export const UserServicesWrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 10px 0;
`;

export const UserServiceLink = styled(TextLink).attrs<
  Pick<TextLinkProps, 'spacer'>
>(() => ({
  spacer: 10,
}))``;
