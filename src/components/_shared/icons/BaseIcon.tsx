import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IconSizeKeys } from '@/config/theme/theme.types';
import theme from '@/config/theme/theme';

interface BaseIconProps {
  icon: IconDefinition;
  size?: IconSizeKeys;
  color?: string;
}

const BaseIcon = (props: BaseIconProps) => {
  const RenderIcon = styled(FontAwesomeIcon).attrs<BaseIconProps>(() => ({
    icon: props.icon,
  }))<BaseIconProps>`
    width: ${({ theme }) => theme.icon.size[props.size || 'sm']}px;
    height: ${({ theme }) => theme.icon.size[props.size || 'sm']}px;
    color: ${() => props.color || theme.colors.primary};
  `;

  return <RenderIcon icon={props.icon} />;
};

export default BaseIcon;
