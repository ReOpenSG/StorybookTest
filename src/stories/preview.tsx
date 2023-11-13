import type { Preview } from "@storybook/react";
import { ComponentType } from "react";
import "../styles/tailwind.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};
export const decorators = [
  (Story: ComponentType) => (
    <>
      <Story />
    </>
  ),
];
export default preview;
