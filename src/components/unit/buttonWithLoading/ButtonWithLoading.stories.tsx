import type { Meta, StoryObj } from '@storybook/react';
import ButtonWithLoading from '@/components/unit/buttonWithLoading/index';

type Story = StoryObj<typeof ButtonWithLoading>;

const meta: Meta<typeof ButtonWithLoading> = {
  tags: ['autodocs'],
  title: 'Components/Unit/ButtonWithLoading',
  component: ButtonWithLoading,
};

export const Default: Story = {
  args: {
    children: 'hello',
    isLoading: true,
  },
};

export default meta;
