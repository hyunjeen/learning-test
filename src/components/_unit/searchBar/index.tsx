import React from 'react';
import Input from '@/components/_shared/input/Input.Styled';
import BaseIcon from '@/components/_shared/icon/Icon';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import S from '@/components/_unit/searchBar/SearchBar.styled';

interface SearchBarProps {
  placeholder: string;
}
function SearchBar(props: SearchBarProps) {
  return (
    <S.Wrap>
      <Input placeholder={props.placeholder} isBorder={false} />
      <S.IconWrap>
        <BaseIcon icon={faMagnifyingGlass} />
      </S.IconWrap>
    </S.Wrap>
  );
}

export default SearchBar;
