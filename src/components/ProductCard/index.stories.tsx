import type { Meta, StoryObj } from "@storybook/react-vite";
import ProductCard from ".";

const meta = {
    title: 'Docs/ProductCard',
    component: ProductCard,
    tags: ['autodocs'],
    args: {},
    parameters: { layout: 'centered' },
} satisfies Meta<typeof ProductCard>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        product: {
            title: 'Jurassic Park',
            image: 'https://a-static.mlcdn.com.br/1500x1500/poster-cartaz-jurassic-park-parque-dos-dinossauros-a-pop-arte-poster/poparteskins2/15938514198/de227aaf112c636d5eecfc645cc799ff.jpeg',
            price: 15,
            originalPrice: 16,
            rating: 4.5,
        },
    },
};
