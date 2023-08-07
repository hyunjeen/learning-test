import UserServices from '@/components/organism/header/userServices';
import Logo from '@/components/_shared/logo/Logo.styled';
import SearchBar from '@/components/_unit/searchBar';
import UserServiceIcon from '@/components/organism/header/userServiceIcon';
import Gnb from '@/components/organism/header/gnb';
import S from '@/components/organism/header/Header.styled';
import DeliverySearchBtn from '@/components/organism/header/deliverySearchBtn';
import ShopSectionLinks from '@/components/organism/header/shopSectionLinks';

function Header() {
  return (
    <S.Container>
      <S.Top>
        <UserServices isLogin={false} />
      </S.Top>
      <S.Center>
        <Logo />
        <ShopSectionLinks />
        <SearchBar placeholder="검색어를입력하세요" />
        <UserServiceIcon />
      </S.Center>
      <S.Bottom>
        <Gnb />
        <DeliverySearchBtn />
      </S.Bottom>
    </S.Container>
  );
}

export default Header;
