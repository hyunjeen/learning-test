import SwiperCore from 'swiper';
import { useRef } from 'react';

function useBannerButton() {
  const nextRef = useRef<HTMLButtonElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);

  const initNavigation = (swiper: SwiperCore) => {
    if (
      swiper.params.navigation &&
      typeof swiper.params.navigation !== 'boolean'
    ) {
      const { navigation } = swiper.params;
      navigation.prevEl = nextRef.current;
      navigation.nextEl = prevRef.current;
    }
  };

  return { nextRef, prevRef, initNavigation };
}

export default useBannerButton;
