import {
  faCartShopping,
  faHeart,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import S from '@/components/organism/header/userServiceIcon/UserServiceIcon.styled';

function UserServiceIcon() {
  return (
    <S.Wrap>
      <S.Icon icon={faLocationDot} />
      <S.Icon icon={faCartShopping} />
      <S.Icon icon={faHeart} />
    </S.Wrap>
  );
}

export default UserServiceIcon;
