import React from 'react';
import Input from '@/components/_shared/input/Input.Styled';
import BaseIcon from '@/components/_shared/icons/BaseIcon';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import S from '@/components/_unit/searchBar/SearchBar.styled';

interface SearchBarProps {
  placeholder: string;
}
function SearchBar(props: SearchBarProps) {
  return (
    <S.Wrap>
      <S.InputWrap>
        <Input placeholder={props.placeholder} isBorder={false} />
      </S.InputWrap>
      <S.IconWrap>
        <BaseIcon icon={faMagnifyingGlass} color="black" />
      </S.IconWrap>
    </S.Wrap>
  );
}

export default SearchBar;
