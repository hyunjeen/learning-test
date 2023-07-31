import type { Meta, StoryObj } from '@storybook/react';
import Link from '@/components/_shared/link/index';

type Story = StoryObj<typeof Link>;

const meta: Meta<typeof Link> = {
  tags: ['autodocs'],
  title: 'Components/_shared/Link',
  component: Link,
};
export const Default: Story = {
  args: {
    children: 'hello',
    href: '/',
  },
};

export default meta;
