import { DefaultTheme } from 'styled-components';
import colors from '@/config/theme/_set/color.theme';
import borderRadius from '@/config/theme/_set/border-radius.theme';
import font from '@/config/theme/_set/font.theme';
import btnSize from '@/config/theme/_set/btn-size.theme';

const lightTheme: Omit<DefaultTheme, 'media'> = {
  colors: { ...colors },
  borderRadius: { ...borderRadius },
  font: { ...font },
  btnSize: { ...btnSize },
};
export default lightTheme;
