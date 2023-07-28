import styled, { css } from 'styled-components';
import { ColorKeysType, TColor } from '@/config/theme/_set/color.theme';
import TextStyled, {
  BtnProps,
} from '@/components/_shared/button/Default.styled';

interface GhostStyledProps extends BtnProps {
  borderColor?: ColorKeysType;
}

const GhostStyled = styled(TextStyled)<GhostStyledProps>`
  border: 1px solid;
  ${({ theme, borderColor }) => css`
    ${TColor(theme, borderColor, 'border')}
  `}
`;

export default GhostStyled;
