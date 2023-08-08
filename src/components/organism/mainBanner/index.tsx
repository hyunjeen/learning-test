import { Swiper } from 'swiper/react';
import SwiperCore from 'swiper';
import Image from 'next/image';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import {
  Wrap,
  SwiperSlideStyled as SwiperSlide,
} from '@/components/organism/mainBanner/mainBanner.styled';
import { useCallback, useState } from 'react';
import useBannerButton from '@/components/organism/mainBanner/hook/useBannerButton';
import BannerButton from '@/components/organism/mainBanner/navigation/navigation.styled';
import usePageNation from '@/components/organism/mainBanner/hook/usePageNation';
import PageNation from './pagenation';

/**
 * TODO: Data 관련 prop 정의 및 view 렌더링
 */

function MainBanner() {
  const [showButton, setShowButton] = useState(false);
  const { nextRef, prevRef, initNavigation } = useBannerButton();
  const { pageNationRef, initPageNation } = usePageNation();
  const onBeforeInit = useCallback(
    (Swiper: SwiperCore): void => {
      initNavigation(Swiper);
      initPageNation(Swiper);
    },
    [initNavigation, initPageNation],
  );
  const onToggleHandler = () => {
    setShowButton(!showButton);
  };

  return (
    <Wrap onMouseEnter={onToggleHandler} onMouseLeave={onToggleHandler}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        onBeforeInit={onBeforeInit}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop
      >
        <SwiperSlide>
          <Image
            src="/bannerimage.jpeg"
            alt="/"
            fill
            draggable={false}
            style={{ objectFit: 'cover' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            style={{ objectFit: 'cover' }}
            src="/bannerimage.jpeg"
            alt="/"
            fill
            draggable={false}
          />
        </SwiperSlide>
        <BannerButton ref={nextRef} direction="next" showButton={showButton} />
        <BannerButton ref={prevRef} direction="prev" showButton={showButton} />
        <PageNation ref={pageNationRef} showButton={showButton} />
      </Swiper>
    </Wrap>
  );
}

export default MainBanner;
