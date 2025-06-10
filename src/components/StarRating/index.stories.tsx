import type { Meta, StoryObj } from "@storybook/react-vite";
import StarRating from ".";

const meta = {
    title: 'Docs/StarRating',
    component: StarRating,
    tags: ['autodocs'],
    args: {},
    parameters: { layout: 'centered' },
} satisfies Meta<typeof StarRating>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        rating: 3.5,
    },
};
