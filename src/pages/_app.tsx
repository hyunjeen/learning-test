import type { AppProps } from 'next/app';
import GlobalStyles from '@/styles/global-styles';
import { ThemeProvider } from 'styled-components';
import themeConfig from '@/config/theme/theme';
import '@/config/swiper';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = true;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{ ...themeConfig }}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
