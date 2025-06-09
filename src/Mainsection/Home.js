import React from 'react'
import { useScrollEffect } from "./hooks/useScrollEffect"
import { useIntersectionAnimations } from "./hooks/useIntersectionAnimations";
import bg1 from './Pictures/hero-bg-2.jpg'
import img1 from './Pictures/hero-img.png'
// import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
export default function Home() {
  useScrollEffect()
  useIntersectionAnimations()
  return (
    <section id='Hero' className='hero'>
      <img src={bg1} className='hero-bg' />
      <div className='container'>
        <div className='row gy-4 justify-content-between heroflex'>
          <div className='col-md-6 leftcol order-last  fade-in-left'>
            <h1>My name is Paarth Phalnikar
              <br />I am a
              <span className='cv-skill position-absolute'>
                <div className='dashed'></div>
                <Swiper direction={'vertical'} loop={true} speed={1000} autoplay={{ delay: 2000, reverseDirection: true, disableOnInteraction: false }} pagination={{ clickable: true }} className='titleSwiper' modules={[Autoplay]}>
                  <SwiperSlide>Full-Stack developer</SwiperSlide>
                  <SwiperSlide>Front-end developer</SwiperSlide>
                  <SwiperSlide>Web developer</SwiperSlide>
                  <SwiperSlide>Web analyst</SwiperSlide>
                  <SwiperSlide>Data analyst</SwiperSlide>
                </Swiper>
              </span>
            </h1>
          </div>
          <div className='col-md-4 order-md-last hero-img fade-in-right'>
            <img src={img1} className="img-fluid upmove" id="png" />
          </div>
        </div>
      </div>
      <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28 " preserveAspectRatio="none">
        <defs>
          <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z">
          </path>
        </defs>
        <g className="wave1">
          <use xlinkHref="#wave-path" x="50" y="3"></use>
        </g>
        <g className="wave2">
          <use xlinkHref="#wave-path" x="50" y="0"></use>
        </g>
        <g className="wave3">
          <use xlinkHref="#wave-path" x="50" y="9"></use>
        </g>
      </svg>
    </section>
  )
}
