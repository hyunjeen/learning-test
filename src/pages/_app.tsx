import type { AppProps } from 'next/app';
import GlobalStyles from '@/styles/global-styles';
import { ThemeProvider } from 'styled-components';
import lightTheme from '@/config/theme/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
