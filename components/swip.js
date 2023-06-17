import { useRef, useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import ImageCard from "./image-card";

import "swiper/css";
import "swiper/css/navigation";

import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

export default function Swip() {
  const [numSlides, setNumSlides] = useState(1);
  useEffect(() => {
    // console.log("window.innerHeight", window.innerWidth);
    if (window.innerWidth >= 1280) {
      setNumSlides(2);
    } else if (window.innerWidth >= 1560) {
      setNumSlides(3);
    }
  }, []);
  // console.log(numSlides);
  return (
    <>
      <Swiper
        navigation={true}
        slidesPerView={numSlides}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <ImageCard />
        </SwiperSlide>
        <SwiperSlide>
          <ImageCard />
        </SwiperSlide>
        <SwiperSlide>
          <ImageCard />
        </SwiperSlide>
        <SwiperSlide>
          <ImageCard />
        </SwiperSlide>
        <SwiperSlide>
          <ImageCard />
        </SwiperSlide>
        <SwiperSlide>
          <ImageCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
