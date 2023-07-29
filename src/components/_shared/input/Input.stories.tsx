import type { Meta, StoryObj } from '@storybook/react';
import Input from '@/components/_shared/input/Input.Styled';

type Story = StoryObj<typeof Input>;

const meta: Meta<typeof Input> = {
  tags: ['autodocs'],
  title: 'Components/_shared/Input',
  component: Input,
  args: {
    placeholder: 'hello world',
    isBorder: false,
    isError: false,
  },
};
export const Default: Story = {};

export const Border: Story = {
  args: {
    isBorder: true,
  },
};
export const Error: Story = {
  args: {
    isBorder: true,
    isError: true,
  },
};

export default meta;
