import type { Meta, StoryObj } from '@storybook/react';
import Spinner from '@/components/_shared/spinner/Spinner.styled';

type Story = StoryObj<typeof Spinner>;

const meta: Meta<typeof Spinner> = {
  tags: ['autodocs'],
  title: 'Components/_shared/Spinner',
  component: Spinner,
};

export const Default: Story = {};

export default meta;
