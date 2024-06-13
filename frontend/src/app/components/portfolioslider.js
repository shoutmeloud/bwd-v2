"use client"; // <===== REQUIRED
import Image from "next/image";
import { PortfolioOne } from "../index";
import React from "react";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Our custom button component
// import SliderButtons from "./SliderButtons";

const DemoSlider = () => {
  // Static data
  

  return (
    <section className="w-full">
      <div>
        <ul className="w-full">
         <Swiper
            navigation
            pagination={{ type: "bullets", clickable: true }}
            autoplay={true}
            loop={true}
            slidesPerView={1.2}
            mousewheel={{ invert: true }} // Enable mouse wheel scroll
            modules={[Autoplay, Navigation, Pagination]}
        >
         
              <SwiperSlide>
                <Image src={PortfolioOne} alt=""/>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={PortfolioOne} alt=""/>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={PortfolioOne} alt=""/>
              </SwiperSlide>
       
          </Swiper>
        </ul>
      </div>
    </section>
  );
};

export default DemoSlider;
