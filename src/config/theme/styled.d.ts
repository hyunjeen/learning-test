import 'styled-components';
import { BorderRadiusType } from '@/config/theme/_set/border-radius.theme';
import { FontType } from '@/config/theme/_set/font.theme';
import { ColorType } from '@/config/theme/_set/color.theme';
import { BtnSizeType } from '@/config/theme/_set/btn-size.theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorType;
    borderRadius: BorderRadiusType;
    font: FontType;
    btnSize: BtnSizeType;
  }
}
