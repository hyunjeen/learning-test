import styled from 'styled-components';
import Link from 'next/link';
import { TextSizeKeys } from '@/config/theme/theme.types';

interface StyledLinkProps {
  size: TextSizeKeys;
}
const StyledLink = styled(Link)<StyledLinkProps>`
  font-size: ${({ theme, size }) => theme.font.text[size || 'sm']};
`;

export default StyledLink;
