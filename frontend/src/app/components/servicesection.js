"use client";
import Image from "next/image";
import { ServiceBanner,ServiceBannerTwo, ServiceBannerThree, ServiceBannerFour, ServiceBannerFive,
ServiceBannerSix, ServiceBannerSeven, ServiceBannerEight } from "../index";
import React from "react";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function Service() {
    return (
      <div>
          <Swiper
            navigation
            pagination={{ type: "bullets", clickable: true }}
            autoplay={true}
            loop={true}
            slidesPerView={1}
            mousewheel={{ invert: true }} // Enable mouse wheel scroll
            modules={[Autoplay, Navigation, Pagination]}
        >
            <SwiperSlide>
                <div className="service-part bg-[#E74235] pt-[145px]">
                    <div className="container mx-auto">
                        <div className="flex justify-between text-white">
                            <div className="w-1/2 pt-[100px]">
                                <h2 className="text-[120px] text-white uppercase leading-[110px]">Services 
                                <span className="text-[80px] block">On Plate</span></h2>
                                <p className="text-[20px] leading-[30px]">
                                Since our inception, we've offered a diverse set of services to our customers. Both eCommerce and B2B firms can benefit from our services. Our experts are ready to take care of your challenges with all the right ingredients
                                </p>
                            </div>
                            <div className="w-1/2">
                                <Image src={ServiceBanner} className="mx-auto" alt="" priority/>
                            </div>
                        </div> 
                    </div>
                </div>  
            </SwiperSlide>
            <SwiperSlide>
              <div className="service-part bg-[#34A853] pt-[145px]">
            <div className="container mx-auto">
                <div className="flex justify-between text-white">
                    <div className="w-1/2 pt-[100px]">
                        <h2 className="text-[120px] text-white uppercase leading-[110px]">Services 
                        <span className="text-[80px] block">On Plate</span></h2>
                        <p className="text-[20px] leading-[30px]">
                        Since our inception, we've offered a diverse set of services to our customers. Both eCommerce and B2B firms can benefit from our services. Our experts are ready to take care of your challenges with all the right ingredients
                        </p>
                    </div>
                    <div className="w-1/2">
                        <Image src={ServiceBannerTwo} className="mx-auto" alt="" priority/>
                    </div>
                </div> 
            </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="service-part bg-[#4285F4] pt-[145px]">
                <div className="container mx-auto">
                    <div className="flex justify-between text-white">
                        <div className="w-1/2 pt-[100px]">
                            <h2 className="text-[120px] text-white uppercase leading-[110px]">Services 
                            <span className="text-[80px] block">On Plate</span></h2>
                            <p className="text-[20px] leading-[30px]">
                            Since our inception, we've offered a diverse set of services to our customers. Both eCommerce and B2B firms can benefit from our services. Our experts are ready to take care of your challenges with all the right ingredients
                            </p>
                        </div>
                        <div className="w-1/2">
                            <Image src={ServiceBannerThree} className="mx-auto" alt="" priority/>
                        </div>
                    </div> 
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="service-part bg-[#F9BA05] pt-[145px]">
                <div className="container mx-auto">
                    <div className="flex justify-between text-white">
                        <div className="w-1/2 pt-[100px]">
                            <h2 className="text-[120px] text-white uppercase leading-[110px]">Services 
                            <span className="text-[80px] block">On Plate</span></h2>
                            <p className="text-[20px] leading-[30px]">
                            Since our inception, we've offered a diverse set of services to our customers. Both eCommerce and B2B firms can benefit from our services. Our experts are ready to take care of your challenges with all the right ingredients
                            </p>
                        </div>
                        <div className="w-1/2">
                            <Image src={ServiceBannerFour} className="mx-auto" alt="" priority/>
                        </div>
                    </div> 
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="service-part bg-[#EA4335] pt-[145px]">
                <div className="container mx-auto">
                    <div className="flex justify-between text-white">
                        <div className="w-1/2 pt-[100px]">
                            <h2 className="text-[120px] text-white uppercase leading-[110px]">Services 
                            <span className="text-[80px] block">On Plate</span></h2>
                            <p className="text-[20px] leading-[30px]">
                            Since our inception, we've offered a diverse set of services to our customers. Both eCommerce and B2B firms can benefit from our services. Our experts are ready to take care of your challenges with all the right ingredients
                            </p>
                        </div>
                        <div className="w-1/2">
                            <Image src={ServiceBannerFive} className="mx-auto" alt="" priority/>
                        </div>
                    </div> 
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                 <div className="service-part bg-[#34A853] pt-[145px]">
            <div className="container mx-auto">
                <div className="flex justify-between text-white">
                    <div className="w-1/2 pt-[100px]">
                        <h2 className="text-[120px] text-white uppercase leading-[110px]">Services 
                        <span className="text-[80px] block">On Plate</span></h2>
                        <p className="text-[20px] leading-[30px]">
                        Since our inception, we've offered a diverse set of services to our customers. Both eCommerce and B2B firms can benefit from our services. Our experts are ready to take care of your challenges with all the right ingredients
                        </p>
                    </div>
                    <div className="w-1/2">
                        <Image src={ServiceBannerSix} className="mx-auto" alt="" priority/>
                    </div>
                </div> 
            </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="service-part bg-[#4285F4] pt-[145px]">
                <div className="container mx-auto">
                    <div className="flex justify-between text-white">
                        <div className="w-1/2 pt-[100px]">
                            <h2 className="text-[120px] text-white uppercase leading-[110px]">Services 
                            <span className="text-[80px] block">On Plate</span></h2>
                            <p className="text-[20px] leading-[30px]">
                            Since our inception, we've offered a diverse set of services to our customers. Both eCommerce and B2B firms can benefit from our services. Our experts are ready to take care of your challenges with all the right ingredients
                            </p>
                        </div>
                        <div className="w-1/2">
                            <Image src={ServiceBannerSeven} className="mx-auto" alt="" priority/>
                        </div>
                    </div> 
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="service-part bg-[#F9BA05] pt-[145px]">
            <div className="container mx-auto">
                <div className="flex justify-between text-white">
                    <div className="w-1/2 pt-[100px]">
                        <h2 className="text-[120px] text-white uppercase leading-[110px]">Services 
                        <span className="text-[80px] block">On Plate</span></h2>
                        <p className="text-[20px] leading-[30px]">
                        Since our inception, we've offered a diverse set of services to our customers. Both eCommerce and B2B firms can benefit from our services. Our experts are ready to take care of your challenges with all the right ingredients
                        </p>
                    </div>
                    <div className="w-1/2">
                    <Image src={ServiceBannerEight} className="mx-auto" alt="" priority/>
                    </div>
                </div> 
            </div>
             </div>
            </SwiperSlide>
        </Swiper>
     </div>
     
    );
  }
  