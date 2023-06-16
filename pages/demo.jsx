import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
export default function Demo() {
  const swiperRef = useRef();

  return (
    <div className="my-bg text-white  h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-extrabold text-white">Experiences</h1>
        <p className="text-2xl">
          Our experiences create opportunities for teams to work together and
          share ideas leading increased innovation and productivity.
        </p>
      </div>
      <button onClick={() => swiperRef.current.slideNext()}>
        Go to Next Slide
      </button>
      <Swiper
        navigation={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation]}
        className="mySwiper text-black"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}
