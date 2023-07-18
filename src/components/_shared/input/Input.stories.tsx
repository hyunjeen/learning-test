import type { Meta, StoryObj } from '@storybook/react';
import Input from '@/components/_shared/input/Input.Styled';

type Story = StoryObj<typeof Input>;

const meta: Meta<typeof Input> = {
  tags: ['autodocs'],
  title: 'Components/_shared/Input',
  component: Input,
  args: {
    placeholder: 'hello world',
    isBorder: true,
    isError: false,
  },
};
export const Default: Story = {};

export const Error: Story = {
  args: {
    isError: true,
  },
};

export default meta;
