import type { Meta, StoryObj } from '@storybook/react';
import SearchBar from '@/components/_unit/searchBar/index';

type Story = StoryObj<typeof SearchBar>;

const meta: Meta<typeof SearchBar> = {
  tags: ['autodocs'],
  title: 'Components/Unit/SearchBar',
  component: SearchBar,
};

export const Default: Story = {
  render: (args) => (
    <div style={{ width: '300px' }}>
      <SearchBar {...args} />
    </div>
  ),
  args: {
    placeholder: '검색어를 입력하세요',
  },
};

export default meta;
