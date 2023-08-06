import React from 'react';
import Text, { TextProps } from '@/components/_shared/text';
import S from '@/components/_unit/textLink/TextLinkWithSpacer.styled';
import Link, { LinkProp } from '@/components/_shared/link';

export interface TextLinkProps extends LinkProp, TextProps {
  label: string;
  spacer?: number;
}

function TextLink({ spacer, label, href, ...props }: TextLinkProps) {
  return (
    <S.Wrap spacer={spacer}>
      <Link href={href}>
        <Text {...props}>{label}</Text>
      </Link>
    </S.Wrap>
  );
}

export default TextLink;
