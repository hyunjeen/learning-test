import Header from '@/components/organism/header';
import MainBanner from '@/components/organism/mainBanner';
import styled from 'styled-components';
import Discount from '@/components/organism/product/discount';
import Price from '@/components/organism/product/price';
import Image from 'next/image';
import Review from '@/components/organism/product/review';
import Title from '@/components/organism/product/title';
import InnerWrap from '@/components/_shared/innerWrap';

const MainBannerWrap = styled.div`
  max-width: 1600px;
  margin: auto;
`;

const HeaderWrap = styled.div`
  border-bottom: 1px solid #eee;
  box-shadow: 0 1px 5px 1px #eee;
  margin-bottom: 1px;
`;
export default function Home() {
  return (
    <div>
      <HeaderWrap>
        <Header />
      </HeaderWrap>
      <MainBannerWrap>
        <MainBanner />
      </MainBannerWrap>
    </div>
  );
}
