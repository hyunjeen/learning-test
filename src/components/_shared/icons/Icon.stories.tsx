import type { Meta, StoryObj } from '@storybook/react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import theme from '@/config/theme/theme';
import { IconSizeKeys } from '@/config/theme/theme.types';
import BaseIcon from './BaseIcon';

type Story = StoryObj<typeof BaseIcon>;

const meta: Meta<typeof BaseIcon> = {
  title: 'Components/_shared/Icon',
  tags: ['autodocs'],
  component: BaseIcon,
  args: {
    icon: faUser,
    color: theme.colors.primary,
  },
  argTypes: {
    size: { control: 'select', options: Object.keys(theme.icon.size) },
    color: { control: { type: 'color' } },
  },
};
export const Default: Story = {};
export const Size: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        width: '300px',
        alignItems: 'end',
        justifyContent: 'space-between',
      }}
    >
      {Object.keys(theme.icon.size).map((value) => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            gap: '10px',
          }}
          key={value}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px 10px',
              border: '1px solid #eee',
            }}
          >
            <BaseIcon {...args} size={value as IconSizeKeys} />
          </div>
          <span>{value}</span>
        </div>
      ))}
    </div>
  ),
};

export default meta;
