import type { Meta, StoryObj } from '@storybook/react';
import Header from '@/components/organism/header/index';

type Story = StoryObj<typeof Header>;

const meta: Meta<typeof Header> = {
  tags: ['autodocs'],
  title: 'Components/Organism/Header',
  component: Header,
};

export const Default: Story = {};

export default meta;
