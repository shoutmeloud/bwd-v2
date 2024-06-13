"use client";
import Image from "next/image";
import { ServiceImage, FinestStaff, Milestones, BulbIcon} from "../index";



export default function Process() {
    return (
      
        <div className="py-[100px] text-white">
          <div className="container mx-auto">
              <h2 className="text-[72px] text-center helvatica-bold">Proven Process</h2>
              <p className="text-[16px] leading-[25px] text-center">
               We research market trends and client demographics. 
                Our staff is innovative, strategic, <br></br> and equipped with
              </p>
            <div className="max-w-[80%] mx-auto mt-8 animation-box">
               
                 <div className="flex justify-between items-center process-prt">
                 <div className="w-5/12 first-box relative">
                    <h5 className="text-[24px] leading-[36px] helvatica-bold" data-scroll data-scroll-speed="1">
                       Share Your Thoughts With The<br></br> Highly-Experienced<br></br> Professionals
                    </h5>
                 </div>
                 <div className="w-5/12" data-scroll data-scroll-speed="1">
                   <Image src={ServiceImage} alt="" priority/>
                 </div>
                 </div>
            
                <div className="flex justify-between items-center flex-row-reverse process-prt">
                 <div className="w-5/12 first-box relative">
                    <h5 className="text-[24px] leading-[36px] helvatica-bold" data-scroll data-scroll-speed="1">
                      We Assign The Finest <br></br> Staff To Your Projects
                    </h5>
                 </div>
                 <div className="w-5/12" data-scroll data-scroll-speed="1">
                   <Image src={FinestStaff} alt="" priority/>
                 </div>
                </div>
                <div className="flex justify-between items-center process-prt">
                 <div className="w-5/12 first-box relative">
                    <h5 className="text-[24px] leading-[36px] helvatica-bold" data-scroll data-scroll-speed="1">
                       Setting Milestones With <br></br> Best Industry Practices
                    </h5>
                 </div>
                 <div className="w-5/12" data-aos="fade-right" data-scroll data-scroll-speed="1">
                   <Image src={Milestones} alt="" priority/>
                 </div>
                </div>
                <div className="flex justify-between items-center flex-row-reverse process-prt mt-10">
                 <div className="w-5/12 first-box relative">
                    
                 </div>
                 <div className="w-5/12">
                   
                 </div>
                </div>
            </div>
            <div className="text-center mx-auto" data-scroll data-scroll-speed="1">
                <Image src={BulbIcon} className="mx-auto" alt="" priority/>
                 <h5 className="text-[24px] leading-[36px] pt-6 helvatica-bold" data-aos="fade-in">
                   Keep an Eye On The Metrics And <br></br> Plan Your Next Move
                </h5>
            </div>
          </div>
        </div>
     
    );
  }
  