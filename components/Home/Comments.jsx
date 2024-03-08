import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import Image from 'next/image';
import IMAGE from "@/public/assets/testimonials/testimonials_1.png";

export default function Comments() {
  return (
    <>
      <section className='comments'>

        <h3 className='comments__title'>People Talk About Me</h3>

        <p className='comments__description'>
          I got a job that was in accordance with the salary and field of word. The process of submitting an application was quite cosy.
        </p>

        <Swiper
          grabCursor={true}
          spaceBetween={150}
          initialSlide={0}
          slidesPerView={1}
          breakpoints={{
            500: {
              slidesPerView: 1.5,
              initialSlide: 2,
              centeredSlides: true,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 2.5,
              initialSlide: 2,
              centeredSlides: true,
              spaceBetween: 50,
            }
          }}

          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 1000,
            modifier: 1,
            slideShadows: 0,
          }}
          pagination={true}
          modules={[Pagination]}
        >

          {
            [1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <SwiperSlide key={index}>
                <section className='comments__slide'>
                  <Image src={IMAGE} alt='comments client 2' />
                  <p>I got a job that was in accordance with the salary and field of word. The process of submitting an application was quite cosy. I got a job that was in accordance with the salary and field of word. </p>
                  <hr />
                  <section>
                    <h3>John Allendone</h3>
                    <h4>CEO MoveBike</h4>
                  </section>
                </section>
              </SwiperSlide>
            ))
          }

        </Swiper>
      </section>
    </>
  );
}
