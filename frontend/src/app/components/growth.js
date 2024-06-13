import Image from "next/image";
import { CourseImg } from "../index";


export default function growth() {
    return (
       <div className="py-[120px] bg-white">
          <div className="container mx-auto">
             <div className="growth-sec bg-[#FFFBFA] flex">
               <div className="w-[60%] px-[100px] py-9" data-aos="fade-right">
                  <ul className="flex bg-white px-3 justify-center">
                    <li>
                      <a href="#" className="px-2 block text-[15px] leading-[60px]">View Portfolio</a>
                    </li>
                    <li className="border-l border-[#FFFBFA]">
                      <a href="#" className="px-2 block text-[15px] leading-[60px]">Email Marketing Success</a>
                    </li>
                    <li className="border-l border-[#FFFBFA]">
                      <a href="#" className="px-2 block text-[15px] leading-[60px]">UI/UX Rebranding</a>
                    </li>
                    <li className="border-l border-[#FFFBFA]">
                      <a href="#" className="px-2 block text-[15px] leading-[60px]">Talk to us</a>
                    </li>
                  </ul>
                  <h3 className="text-[#4A4A4A] text-[50px] helvatica-bold leading-[60px] pt-[50px]">
                    We&apos;ve unzipped the key to success for your
                  </h3>
                  <h2 className="text-[#E74235] text-[50px] helvatica-bold leading-[60px] pt-[30px]">
                    SUSTAINABLE Growth
                  </h2>
                  <p className="text-[18px] helvatica-bold leading-[23px] pt-[30px]">
                    Our experts burn midnight oil to help analyze, rectify, and accentuate your dreams to reality.
                  </p>
                  <a href="#" className="bg-[#E74235] rounded-[40px] text-[16px] leading-[61px] inline-block px-[30px] text-white mt-5">
                    Get in touch
                 </a>
               </div>
               <div className="w-[40%] relative" data-aos="fade-left">
                 <a href="#" className="role-tabs-card">
                    <div className="role-tabs-card-img-wrapper">
                      <Image src={CourseImg} className="role-tabs-card-img desktop" priority alt=""/>
                      <Image src={CourseImg} className="role-tabs-card-img mobile" priority alt=""/>
                    </div>
                 </a>
               </div>
               
             </div>
          </div>
       </div>
    );
  }
  