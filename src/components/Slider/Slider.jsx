import React from 'react'
import '../Slider/Slider.css'
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Image } from 'antd';
import 'antd/dist/antd.css';
import one from '../image/1.jpg'
import two from '../image/2.jpg'
import three from '../image/3.jpeg'
import four from '../image/4.jpg'
import five from '../image/5.jpeg'
import six from '../image/6.jpeg'
export default function Slider() {

  return (
    <>
      <h1 className='slider_title'>LOREM IPSUM DOLOR sit AMET</h1>
      <Swiper
        style={{
          "--swiper-navigation-color": "black",
        }}
        slidesPerView={1}
        spaceBetween={-15}
        initialSlide={2}
        navigation={true}
        breakpoints={{
          371: {
            slidesPerView: 1,
            spaceBetween: -55
          },
          425: {
            slidesPerView: 1,
            spaceBetween: -95
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper_block">
            <Image
              width={300}
              height={600}
              borderRadius={10}
              src={one}
              className="swiper_item"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper_block">
            <Image
              width={300}
              height={600}
              src={two}
              className="swiper_item"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper_block">
            <Image
              width={300}
              height={600}
              src={three}
              className="swiper_item"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper_block">
            <Image
              width={300}
              height={600}
              src={four}
              className="swiper_item"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper_block">
            <Image
              width={300}
              height={600}
              src={five}
              className="swiper_item"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper_block">
            <Image
              width={300}
              height={600}
              src={six}
              className="swiper_item"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );

}