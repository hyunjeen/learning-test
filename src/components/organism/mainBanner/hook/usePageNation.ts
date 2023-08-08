import SwiperCore from 'swiper';
import { useRef } from 'react';

function usePageNation() {
  const pageNationRef = useRef(null);

  const initPageNation = (Swiper: SwiperCore) => {
    if (
      Swiper.params.pagination &&
      typeof Swiper.params.pagination !== 'boolean' &&
      pageNationRef.current
    ) {
      const { pagination } = Swiper.params;
      pagination.type = 'fraction';
      pagination.el = pageNationRef.current;
    }
  };

  return { pageNationRef, initPageNation };
}

export default usePageNation;
