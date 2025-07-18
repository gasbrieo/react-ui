import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";

import { Label } from "./Label";

const meta = {
  title: "Components/Label",
  component: Label,
  argTypes: {
    children: {
      control: false,
      description: "Content inside the label",
    },
  },
  args: {
    children: "Label",
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    const label = canvas.getByText(/Label/i);
    await expect(label).toBeVisible();
  },
};
