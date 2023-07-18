import type { Meta, StoryObj } from '@storybook/react';
import TextButton from '@/components/_shared/textButton/index';
import theme from '@/config/theme/theme';
import { TextSizeKeys } from '@/config/theme/theme.types';

type Story = StoryObj<typeof TextButton>;

const meta: Meta<typeof TextButton> = {
  tags: ['autodocs'],
  title: 'Components/_shared/TextButton',
  component: TextButton,
  args: {
    label: '기본 텍스트 버튼',
    size: 'xl',
  },
  argTypes: {
    size: { control: 'select', options: Object.keys(theme.font.text) },
  },
};

export const Default: Story = {};

export const Size: Story = {
  render: (args) => (
    <div>
      {Object.keys(theme.font.text).map((value) => (
        <TextButton key={value} {...args} size={value as TextSizeKeys} />
      ))}
    </div>
  ),
};

export default meta;
