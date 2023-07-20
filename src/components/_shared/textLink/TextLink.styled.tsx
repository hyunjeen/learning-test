import styled from 'styled-components';
import Link from 'next/link';
import { FontType } from '@/config/theme/_set/font.theme';

interface StyledLinkProps {
  size: keyof FontType['size'];
}
const StyledLink = styled(Link)<StyledLinkProps>`
  font-size: ${({ theme, size }) => theme.font.size[size || 'sm']};
`;

export default StyledLink;
