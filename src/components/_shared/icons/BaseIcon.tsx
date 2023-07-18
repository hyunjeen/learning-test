import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import theme from '@/config/theme/theme';
import { IconSizeType } from '@/config/theme/_set/icon-size.theme';

interface BaseIconProps {
  icon: IconDefinition;
  size?: keyof IconSizeType;
  color?: string;
}

const BaseIcon = (props: BaseIconProps) => {
  const RenderIcon = styled(FontAwesomeIcon).attrs<BaseIconProps>(() => ({
    icon: props.icon,
  }))<BaseIconProps>`
    width: ${({ theme }) => theme.iconSize[props.size || 'sm']}px;
    height: ${({ theme }) => theme.iconSize[props.size || 'sm']}px;
    color: ${() => props.color || theme.colors.primary};
  `;

  return <RenderIcon icon={props.icon} />;
};

export default BaseIcon;
