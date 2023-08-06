import styled, { css, DefaultTheme } from 'styled-components';
import { TextLinkProps } from '@/components/_unit/textLink/index';

type SpacerType = Pick<TextLinkProps, 'spacer'>;
interface IsSpacerArgsType extends SpacerType {
  theme: DefaultTheme;
}
const IsSpacerStyles = ({ theme, spacer }: IsSpacerArgsType) => css`
  &:after {
    display: block;
    content: '';
    margin: 0 ${spacer}px;
    height: ${spacer}px;
    border: 1px solid ${theme.colors.border};
    transform: translateY(2px);
  }
`;

const Wrap = styled.div<SpacerType>`
  display: flex;
  align-items: center;
  ${(props) => props.spacer && IsSpacerStyles(props)}
`;

export default {
  Wrap,
};
