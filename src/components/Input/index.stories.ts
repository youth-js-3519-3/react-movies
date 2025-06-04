import type { Meta, StoryObj } from "@storybook/react-vite";
import Input from ".";

const meta = {
    title: 'Docs/Input',
    component: Input,
    tags: ['autodocs'],
    args: {},
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
