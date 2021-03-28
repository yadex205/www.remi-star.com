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

interface TopMainVisualSlideProps {
  imgJpegSp1x: string;
  imgJpegSp2x: string;
  imgJpegPc1x: string;
  imgJpegPc2x: string;
  imgWebpSp1x?: string;
  imgWebpSp2x?: string;
  imgWebpPc1x?: string;
  imgWebpPc2x?: string;
  alt?: string;
}

const TopMainVisualSlideImage: React.FC<TopMainVisualSlideProps> = props => {
  return (
    <picture className="m-top-main-visual__slide-image">
      {props.imgWebpSp1x && props.imgWebpSp2x && (
        <source
          type="image/webp"
          media="(max-width: 640px)"
          srcSet={`${props.imgWebpSp1x} 1x, ${props.imgWebpSp2x} 2x`}
        />
      )}
      {props.imgWebpPc1x && props.imgWebpPc2x && (
        <source
          type="image/webp"
          media="(min-width: 641px)"
          srcSet={`${props.imgWebpPc1x} 1x, ${props.imgWebpPc2x} 2x`}
        />
      )}
      <source
        type="image/jpeg"
        media="(max-width: 640px)"
        srcSet={`${props.imgJpegSp1x} 1x, ${props.imgJpegSp2x} 2x`}
      />
      <source
        type="image/jpeg"
        media="(min-width: 641px)"
        srcSet={`${props.imgJpegPc1x} 1x, ${props.imgJpegPc2x} 2x`}
      />
      <img alt={props.alt} />
    </picture>
  );
};

export const TopMainVisual: React.FC = () => (
  <div className="m-top-main-visual">
    <Swiper
      className="m-top-main-visual__slides-container"
      autoplay
      allowTouchMove={false}
      effect="fade"
      loop
      preloadImages
      simulateTouch={false}
    >
      <SwiperSlide className="m-top-main-visual__slide">
        <TopMainVisualSlideImage
          imgJpegSp1x={TopMainVisual01Sp1x}
          imgJpegSp2x={TopMainVisual01Sp2x}
          imgJpegPc1x={TopMainVisual01Pc1x}
          imgJpegPc2x={TopMainVisual01Pc2x}
          alt="Main visual 01"
        />
      </SwiperSlide>
      <SwiperSlide className="m-top-main-visual__slide">
        <TopMainVisualSlideImage
          imgJpegSp1x={TopMainVisual02Sp1x}
          imgJpegSp2x={TopMainVisual02Sp2x}
          imgJpegPc1x={TopMainVisual02Pc1x}
          imgJpegPc2x={TopMainVisual02Pc2x}
          alt="Main visual 02"
        />
      </SwiperSlide>
      <SwiperSlide className="m-top-main-visual__slide">
        <TopMainVisualSlideImage
          imgJpegSp1x={TopMainVisual03Sp1x}
          imgJpegSp2x={TopMainVisual03Sp2x}
          imgJpegPc1x={TopMainVisual03Pc1x}
          imgJpegPc2x={TopMainVisual03Pc2x}
          alt="Main visual 03"
        />
      </SwiperSlide>
      <SwiperSlide className="m-top-main-visual__slide">
        <TopMainVisualSlideImage
          imgJpegSp1x={TopMainVisual04Sp1x}
          imgJpegSp2x={TopMainVisual04Sp2x}
          imgJpegPc1x={TopMainVisual04Pc1x}
          imgJpegPc2x={TopMainVisual04Pc2x}
          alt="Main visual 04"
        />
      </SwiperSlide>
      <SwiperSlide className="m-top-main-visual__slide">
        <TopMainVisualSlideImage
          imgJpegSp1x={TopMainVisual05Sp1x}
          imgJpegSp2x={TopMainVisual05Sp2x}
          imgJpegPc1x={TopMainVisual05Pc1x}
          imgJpegPc2x={TopMainVisual05Pc2x}
          alt="Main visual 05"
        />
      </SwiperSlide>
      <SwiperSlide className="m-top-main-visual__slide">
        <TopMainVisualSlideImage
          imgJpegSp1x={TopMainVisual06Sp1x}
          imgJpegSp2x={TopMainVisual06Sp2x}
          imgJpegPc1x={TopMainVisual06Pc1x}
          imgJpegPc2x={TopMainVisual06Pc2x}
          alt="Main visual 06"
        />
      </SwiperSlide>
      <SwiperSlide className="m-top-main-visual__slide">
        <TopMainVisualSlideImage
          imgJpegSp1x={TopMainVisual07Sp1x}
          imgJpegSp2x={TopMainVisual07Sp2x}
          imgJpegPc1x={TopMainVisual07Pc1x}
          imgJpegPc2x={TopMainVisual07Pc2x}
          alt="Main visual 07"
        />
      </SwiperSlide>
      <SwiperSlide className="m-top-main-visual__slide">
        <TopMainVisualSlideImage
          imgJpegSp1x={TopMainVisual08Sp1x}
          imgJpegSp2x={TopMainVisual08Sp2x}
          imgJpegPc1x={TopMainVisual08Pc1x}
          imgJpegPc2x={TopMainVisual08Pc2x}
          alt="Main visual 08"
        />
      </SwiperSlide>
    </Swiper>
    <img className="m-top-main-visual__frame" alt="Main visual frame" src={TopMainVIsualFrame} />
  </div>
);
