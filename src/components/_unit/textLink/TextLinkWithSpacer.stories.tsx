import type { Meta, StoryObj } from '@storybook/react';
import TextLinkWithSpacer from '@/components/_unit/textLink/index';

type Story = StoryObj<typeof TextLinkWithSpacer>;

const meta: Meta<typeof TextLinkWithSpacer> = {
  tags: ['autodocs'],
  title: 'Components/Unit/TextLinkWithSpacer',
  component: TextLinkWithSpacer,
  args: {
    href: '/',
    label: 'hello',
    spacer: 7,
  },
};

export const Default: Story = {};

export default meta;
