import React from 'react';
import GnbCategoryBtn from '@/components/organism/header/gnb/GnbCategoryBtn';
import GnbList from '@/components/organism/header/gnb/GnbList';
import GnbItem from '@/components/organism/header/gnb/GnbItem';
import S from '@/components/organism/header/gnb/Gnb.styled';

function Gnb() {
  return (
    <S.Wrap>
      <GnbCategoryBtn />
      <GnbList>
        {['신상품', '베스트', '알뜰쇼핑', '특가혜택'].map((el) => (
          <GnbItem key={el} label={el} href="/" />
        ))}
      </GnbList>
    </S.Wrap>
  );
}

export default Gnb;
