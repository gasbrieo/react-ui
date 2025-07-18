import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react-vite";

import "../src/styles/tokens.css";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    a11y: {
      test: "todo",
    },
  },
};

export default preview;

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
];
