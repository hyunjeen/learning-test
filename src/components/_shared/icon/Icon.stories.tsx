import type { Meta, StoryObj } from '@storybook/react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon';

type Story = StoryObj<typeof Icon>;

const meta: Meta<typeof Icon> = {
  title: 'Components/_shared/Icon',
  tags: ['autodocs'],
  component: Icon,
  args: {
    icon: faUser,
  },
};
export const Default: Story = {};

export default meta;
