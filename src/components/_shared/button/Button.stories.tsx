import type { Meta, StoryObj } from '@storybook/react';
import Button from '@/components/_shared/button/index';

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

export const Reverse: Story = {
  render: (args) => <Button {...args}>heelo</Button>,
  args: {
    reverse: true,
  },
};

export default meta;
