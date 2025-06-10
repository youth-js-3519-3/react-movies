import type { Meta, StoryObj } from "@storybook/react-vite";
import Card from ".";

const meta = {
    title: 'Docs/Card',
    component: Card,
    tags: ['autodocs'],
    args: {},
    parameters: { layout: 'centered' },
} satisfies Meta<typeof Card>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        movie: {
            title: 'Jurassic Park',
            imageSrc: 'https://a-static.mlcdn.com.br/1500x1500/poster-cartaz-jurassic-park-parque-dos-dinossauros-a-pop-arte-poster/poparteskins2/15938514198/de227aaf112c636d5eecfc645cc799ff.jpeg',
            releasedDate: new Date('2010-05-10')
        },
        showInfo: true,
    },
};
