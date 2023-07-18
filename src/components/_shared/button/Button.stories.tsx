import type { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from '@/components/_shared/button/index';

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
const render = (args: ButtonProps) => <Button {...args}>hello</Button>;
export const Default: Story = {
  render,
};

export const Reverse: Story = {
  render,
  args: {
    reverse: true,
  },
};

export default meta;
