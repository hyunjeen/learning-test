import styled, { css } from 'styled-components';
import { ColorKeysType, TColor } from '@/config/theme/_set/color.theme';
import {
  FontSizeKeysType,
  FontWeightKeysType,
  TFontSize,
  TFontWeight,
} from '@/config/theme/_set/font.theme';

type TextChildrenType = { children: string };
export interface TextProps {
  textColor?: ColorKeysType;
  textHoverColor?: ColorKeysType;
  textSize?: FontSizeKeysType;
  textWeight?: FontWeightKeysType;
}

const TextStyled = styled.span<TextProps>`
  white-space: nowrap;
  ${({ theme, textColor, textHoverColor, textSize, textWeight }) => css`
    ${TColor(theme, textColor, 'text')}
    ${TFontWeight(theme, textWeight)}
    ${TFontSize(theme, textSize)}
    ${textHoverColor &&
    css`
      &:hover {
        ${TColor(theme, textHoverColor, 'text')}
      }
    `}
  `}
`;

function Text(props: TextProps & TextChildrenType) {
  return <TextStyled {...props} />;
}

export default Text;
