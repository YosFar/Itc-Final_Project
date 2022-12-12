import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { Banners } from '../../Data/BannerData';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div
      className="bg-deepGray rounded-md"
      //   data-aos="fade-up"
      //   data-aos-duration="500"
    >
      <div className="relative w-full">
        <Swiper
          direction={'vertical'}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={false}
          modules={[Autoplay]}
          speed={1000}
          loop={true}
          className="w-full xl:h-96 lg:h-64 h-48"
        >
          {Banners.map((b, i) => (
            <SwiperSlide key={i} className="relative">
              <img
                alt="banner"
                src={b.image}
                className="w-full h-full sm:object-contain object-cover"
              />

              <div className="flex w-4/6 sm:w-3/6 2xl:w-2/6 xl:w-5/12 absolute top-0 gap-5 lg:gap-10 flex-col md:pl-32 px-2 sm:pl-10 h-full justify-center py-12">
                <h1 className="xl:text-h1 lg:text-4xl sm:text-2xl text-xl leading-relaxed lg:leading-relaxed xl:leading-normal font-bold">
                  {b.text}
                </h1>
                <Link
                  to="/shop"
                  className="bg-main flex-colo hover:scale-105 transitions hover:bg-subMain lg:py-3 py-2 font-semibold lg:w-44 w-32 rounded-md text-xs lg:text-sm text-white"
                >
                  SHOP NOW
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Banner;
