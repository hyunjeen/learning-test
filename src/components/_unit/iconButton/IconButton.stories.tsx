import type { Meta, StoryObj } from '@storybook/react';
import IconButton from '@/components/_unit/iconButton/index';
import { faUser } from '@fortawesome/free-solid-svg-icons';

type Story = StoryObj<typeof IconButton>;

const meta: Meta<typeof IconButton> = {
  tags: ['autodocs'],
  title: 'Components/Unit/IconButton',
  component: IconButton,
};

export const Default: Story = {
  args: {
    icon: faUser,
  },
};

export default meta;
