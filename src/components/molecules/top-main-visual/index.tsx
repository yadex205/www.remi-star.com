import React from 'react';
import { Swiper as SwiperCore, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import TopMainVisual01Sp1x from 'images/top-main-visual-01-sp.jpg';
import TopMainVisual01Sp2x from 'images/top-main-visual-01-sp@2x.jpg';
import TopMainVisual02Sp1x from 'images/top-main-visual-02-sp.jpg';
import TopMainVisual02Sp2x from 'images/top-main-visual-02-sp@2x.jpg';
import TopMainVisual03Sp1x from 'images/top-main-visual-03-sp.jpg';
import TopMainVisual03Sp2x from 'images/top-main-visual-03-sp@2x.jpg';
import TopMainVisual04Sp1x from 'images/top-main-visual-04-sp.jpg';
import TopMainVisual04Sp2x from 'images/top-main-visual-04-sp@2x.jpg';
import TopMainVisual05Sp1x from 'images/top-main-visual-05-sp.jpg';
import TopMainVisual05Sp2x from 'images/top-main-visual-05-sp@2x.jpg';
import TopMainVisual06Sp1x from 'images/top-main-visual-06-sp.jpg';
import TopMainVisual06Sp2x from 'images/top-main-visual-06-sp@2x.jpg';
import TopMainVisual07Sp1x from 'images/top-main-visual-07-sp.jpg';
import TopMainVisual07Sp2x from 'images/top-main-visual-07-sp@2x.jpg';
import TopMainVisual08Sp1x from 'images/top-main-visual-08-sp.jpg';
import TopMainVisual08Sp2x from 'images/top-main-visual-08-sp@2x.jpg';
import TopMainVisual01Pc1x from 'images/top-main-visual-01-pc.jpg';
import TopMainVisual01Pc2x from 'images/top-main-visual-01-pc@2x.jpg';
import TopMainVisual02Pc1x from 'images/top-main-visual-02-pc.jpg';
import TopMainVisual02Pc2x from 'images/top-main-visual-02-pc@2x.jpg';
import TopMainVisual03Pc1x from 'images/top-main-visual-03-pc.jpg';
import TopMainVisual03Pc2x from 'images/top-main-visual-03-pc@2x.jpg';
import TopMainVisual04Pc1x from 'images/top-main-visual-04-pc.jpg';
import TopMainVisual04Pc2x from 'images/top-main-visual-04-pc@2x.jpg';
import TopMainVisual05Pc1x from 'images/top-main-visual-05-pc.jpg';
import TopMainVisual05Pc2x from 'images/top-main-visual-05-pc@2x.jpg';
import TopMainVisual06Pc1x from 'images/top-main-visual-06-pc.jpg';
import TopMainVisual06Pc2x from 'images/top-main-visual-06-pc@2x.jpg';
import TopMainVisual07Pc1x from 'images/top-main-visual-07-pc.jpg';
import TopMainVisual07Pc2x from 'images/top-main-visual-07-pc@2x.jpg';
import TopMainVisual08Pc1x from 'images/top-main-visual-08-pc.jpg';
import TopMainVisual08Pc2x from 'images/top-main-visual-08-pc@2x.jpg';
import TopMainVIsualFrame from 'images/top-main-visual-frame.svg';

SwiperCore.use([Autoplay, EffectFade]);

export const TopMainVisual: React.FC = () => (
  <div className="m-top-main-visual">
    <Swiper
      className="m-top-main-visual__slides-container"
      allowTouchMove={false}
      effect="fade"
      loop
      simulateTouch={false}
      autoplay
    >
      <SwiperSlide className="m-top-main-visual__slide">
        <picture className="m-top-main-visual__slide-image">
          <source media="(max-width: 640px)" srcSet={`${TopMainVisual01Sp1x} 1x, ${TopMainVisual01Sp2x} 2x`} />
          <source media="(min-width: 641px)" srcSet={`${TopMainVisual01Pc1x} 1x, ${TopMainVisual01Pc2x} 2x`} />
          <img alt="Main visual 01" src={TopMainVisual01Sp1x} />
        </picture>
      </SwiperSlide>
      <SwiperSlide className="m-top-main-visual__slide">
        <picture className="m-top-main-visual__slide-image">
          <source media="(max-width: 640px)" srcSet={`${TopMainVisual02Sp1x} 1x, ${TopMainVisual02Sp2x} 2x`} />
          <source media="(min-width: 641px)" srcSet={`${TopMainVisual02Pc1x} 1x, ${TopMainVisual02Pc2x} 2x`} />
          <img alt="Main visual 02" src={TopMainVisual02Sp1x} />
        </picture>
      </SwiperSlide>
      <SwiperSlide className="m-top-main-visual__slide">
        <picture className="m-top-main-visual__slide-image">
          <source media="(max-width: 640px)" srcSet={`${TopMainVisual03Sp1x} 1x, ${TopMainVisual03Sp2x} 2x`} />
          <source media="(min-width: 641px)" srcSet={`${TopMainVisual03Pc1x} 1x, ${TopMainVisual03Pc2x} 2x`} />
          <img alt="Main visual 03" src={TopMainVisual03Sp1x} />
        </picture>
      </SwiperSlide>
      <SwiperSlide className="m-top-main-visual__slide">
        <picture className="m-top-main-visual__slide-image">
          <source media="(max-width: 640px)" srcSet={`${TopMainVisual04Sp1x} 1x, ${TopMainVisual04Sp2x} 2x`} />
          <source media="(min-width: 641px)" srcSet={`${TopMainVisual04Pc1x} 1x, ${TopMainVisual04Pc2x} 2x`} />
          <img alt="Main visual 04" src={TopMainVisual04Sp1x} />
        </picture>
      </SwiperSlide>
      <SwiperSlide className="m-top-main-visual__slide">
        <picture className="m-top-main-visual__slide-image">
          <source media="(max-width: 640px)" srcSet={`${TopMainVisual05Sp1x} 1x, ${TopMainVisual05Sp2x} 2x`} />
          <source media="(min-width: 641px)" srcSet={`${TopMainVisual05Pc1x} 1x, ${TopMainVisual05Pc2x} 2x`} />
          <img alt="Main visual 05" src={TopMainVisual05Sp1x} />
        </picture>
      </SwiperSlide>
      <SwiperSlide className="m-top-main-visual__slide">
        <picture className="m-top-main-visual__slide-image">
          <source media="(max-width: 640px)" srcSet={`${TopMainVisual06Sp1x} 1x, ${TopMainVisual06Sp2x} 2x`} />
          <source media="(min-width: 641px)" srcSet={`${TopMainVisual06Pc1x} 1x, ${TopMainVisual06Pc2x} 2x`} />
          <img alt="Main visual 06" src={TopMainVisual06Sp1x} />
        </picture>
      </SwiperSlide>
      <SwiperSlide className="m-top-main-visual__slide">
        <picture className="m-top-main-visual__slide-image">
          <source media="(max-width: 640px)" srcSet={`${TopMainVisual07Sp1x} 1x, ${TopMainVisual07Sp2x} 2x`} />
          <source media="(min-width: 641px)" srcSet={`${TopMainVisual07Pc1x} 1x, ${TopMainVisual07Pc2x} 2x`} />
          <img alt="Main visual 07" src={TopMainVisual07Sp1x} />
        </picture>
      </SwiperSlide>
      <SwiperSlide className="m-top-main-visual__slide">
        <picture className="m-top-main-visual__slide-image">
          <source media="(max-width: 640px)" srcSet={`${TopMainVisual08Sp1x} 1x, ${TopMainVisual08Sp2x} 2x`} />
          <source media="(min-width: 641px)" srcSet={`${TopMainVisual08Pc1x} 1x, ${TopMainVisual08Pc2x} 2x`} />
          <img alt="Main visual 08" src={TopMainVisual08Sp1x} />
        </picture>
      </SwiperSlide>
    </Swiper>
    <img className="m-top-main-visual__frame" alt="Main visual frame" src={TopMainVIsualFrame} />
  </div>
);
