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

export const Single: Story = {
  args: {},
};

export const Form: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        gap: '10px'
      }}
    >
      <Input
        label="Email"
        {...args}
      />
      <Input
        {...args}
        label="Password"
      />
    </div>
  )
}