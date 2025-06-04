import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from ".";

const meta = {
    title: 'Docs/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        children: 'enviar'
    },
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
