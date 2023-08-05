import Btn from '@/components/_shared/button';
import Icon from '@/components/_shared/icon/Icon';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

function IconButton(props: FontAwesomeIconProps) {
  return (
    <Btn.Fill bgColor="transparent" bgHoverColor="transparent">
      <Icon {...props} />
    </Btn.Fill>
  );
}

export default IconButton;
