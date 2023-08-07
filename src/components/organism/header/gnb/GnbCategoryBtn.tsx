import { faBars } from '@fortawesome/free-solid-svg-icons';
import GnbStyled from '@/components/organism/header/gnb/Gnb.styled';

function GnbCategoryBtn() {
  return (
    <GnbStyled.CategoryWrap>
      <GnbStyled.CategoryIcon icon={faBars} size="lg" />
      <GnbStyled.CategoryText textSize="lg" textWeight="medium">
        카테고리
      </GnbStyled.CategoryText>
    </GnbStyled.CategoryWrap>
  );
}

export default GnbCategoryBtn;
