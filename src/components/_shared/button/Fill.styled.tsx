import styled, { css } from 'styled-components';
import { ColorKeysType, TColor } from '@/config/theme/_set/color.theme';
import TextStyled, {
  BtnProps,
} from '@/components/_shared/button/Default.styled';

interface FillStyledProps extends BtnProps {
  bgColor?: ColorKeysType;
  bgHoverColor?: ColorKeysType;
}

const FillStyled = styled(TextStyled)<FillStyledProps>`
  ${({ theme, bgColor, bgHoverColor }) => css`
    ${TColor(theme, bgColor, 'background')}
    &:hover {
      ${TColor(theme, bgHoverColor || 'secondary', 'background')}
    }
    &:disabled {
      ${TColor(theme, 'disable', 'background')}
    }
  `}
`;
export default FillStyled;
