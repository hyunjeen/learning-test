import { ReactNode } from 'react';
import TextLink from '@/components/_unit/textLink';
import {
  UserServiceLink,
  UserServicesWrap,
} from '@/components/organism/header/userServices/UserServices.styled';

interface UserServicesProps {
  isLogin: boolean;
  children?: ReactNode;
}

function UserServices({ isLogin, children }: UserServicesProps) {
  return (
    <UserServicesWrap>
      {isLogin ? (
        <>
          <UserServiceLink href="/" label="내정보" />
          <UserServiceLink href="/" label="로그아웃" />
        </>
      ) : (
        <>
          <UserServiceLink href="/" label="회원가입" />
          <UserServiceLink href="/" label="로그인" />
        </>
      )}
      <TextLink href="/" label="고객센터" />
      {children}
    </UserServicesWrap>
  );
}

export default UserServices;
