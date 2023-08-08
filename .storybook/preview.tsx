import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import GlobalStyles from "../src/styles/global-styles"
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ThemeProvider } from "styled-components";
import { Description, Primary, Stories, Subtitle, Title } from "@storybook/blocks";
import lightTheme from "../src/config/theme/theme";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Stories />
        </>
      ),
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: lightTheme,
      },
      Provider: ThemeProvider,
      GlobalStyles
    })
  ]
};

export default preview;
