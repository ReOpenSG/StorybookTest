import type { Meta, StoryObj } from "@storybook/react";

import Submit from "./Submit";
import "../../styles/tailwind.css";

const meta: Meta<typeof Submit> = {
  component: Submit,
  args: {
    type: "button",
    color: "bg-lime-300",
    number: 0,
    onClick: () => {},
  },
  argTypes: {
    type: {
      table: { defaultValue: { summary: "button" } },
      control: {
        type: "radio",
        options: ["button", "submit"],
      },
    },
    color: {
      table: { defaultValue: { summary: "bg-lime-300" } },
      control: {
        type: "radio",
        options: ["bg-lime-300", "bg-lime-600", "bg-lime-900"],
      },
    },
    size: {
      table: { defaultValue: { summary: "text-base" } },
      control: {
        type: "select",
        options: ["text-base", "text-large", "text-xl", "text-2xl", "text-3xl"],
      },
    },
    children: {
      description: "버튼에 들어갈 텍스트",
      table: { defaultValue: { summary: "나는 버튼이에요" } },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Submit>;

export const SuccessSmall: Story = {
  args: {
    children: "나는 text-base 버튼이에요",
    size: "text-base",
  },
};
export const SuccessLarge: Story = {
  args: {
    children: "나는 text-lg 버튼이에요",
    size: "text-lg",
  },
};
export const SuccessXl: Story = {
  args: {
    children: "나는 text-xl 버튼이에요",
    size: "text-xl",
  },
};
export const SuccessXxl: Story = {
  args: {
    children: "나는 text-2xl 버튼이에요",
    size: "text-2xl",
  },
};
export const SuccessXxxl: Story = {
  args: {
    children: "나는 text-3xl 버튼이에요",
    size: "text-3xl",
  },
};
