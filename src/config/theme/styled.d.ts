import 'styled-components';
import { BorderRadiusType } from '@/config/theme/_set/border-radius.theme';
import { IconSizeType } from '@/config/theme/_set/icon-size.theme';
import { FontType } from '@/config/theme/_set/font.theme';
import { ColorType } from '@/config/theme/_set/color.theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorType;
    borderRadius: BorderRadiusType;
    iconSize: IconSizeType;
    font: FontType;
  }
}
