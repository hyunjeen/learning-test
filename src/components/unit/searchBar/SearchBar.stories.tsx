import type { Meta, StoryObj } from '@storybook/react';
import SearchBar from '@/components/unit/searchBar/index';

type Story = StoryObj<typeof SearchBar>;

const meta: Meta<typeof SearchBar> = {
  tags: ['autodocs'],
  title: 'Components/Unit/SearchBar',
  component: SearchBar,
};

export const Default: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <SearchBar />
    </div>
  ),
};

export default meta;
