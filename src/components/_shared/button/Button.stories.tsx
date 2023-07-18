import type { Meta, StoryObj } from '@storybook/react';
import Button from '@/components/_shared/button/Button.styled';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  tags: ['autodocs'],
  title: 'Components/_shared/Button',
  component: Button,
  argTypes: {
    color: {
      control: {
        type: 'color',
      },
    },
  },
};
export const Default: Story = {
  render: (args) => <Button {...args}>heelo</Button>,
  args: {},
};

export default meta;
