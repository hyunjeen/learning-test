import { DefaultTheme } from 'styled-components';
import colors from '@/config/theme/_set/color.theme';
import borderRadius from '@/config/theme/_set/border-radius.theme';
import iconSize from '@/config/theme/_set/icon-size.theme';
import font from '@/config/theme/_set/font.theme';

const lightTheme: DefaultTheme = {
  colors: { ...colors },
  borderRadius: { ...borderRadius },
  iconSize: { ...iconSize },
  font: { ...font },
};
export default lightTheme;
