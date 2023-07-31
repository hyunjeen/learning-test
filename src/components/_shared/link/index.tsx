import React from 'react';
import styled from 'styled-components';
import NextLink, { LinkProps } from 'next/link';
import { ChildrenProps } from '@/common/types';

const StyledLink = styled.a``;

export type LinkProp = Pick<LinkProps, 'href'>;

function Link({ href, children }: LinkProp & ChildrenProps) {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <StyledLink>{children}</StyledLink>
    </NextLink>
  );
}

export default Link;
