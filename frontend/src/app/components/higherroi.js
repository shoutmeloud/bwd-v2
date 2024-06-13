import Image from "next/image";
import { TabImage } from "../index";


export default function Higherroi() {
    return (
      
        <div className="container mx-auto">
           <div className="flex justify-between items-center py-[105px]">
               <div className="w-1/2" data-scroll="true" data-scroll-direction="horizontal" data-scroll-speed="6" >
                 <h2 className="helvatica-bold text-[65px] text-white">Meet For Higher ROI</h2>
                 <h4 className="text-[24px] helvatica-bold text-white pt-4">
                  Unleash Your Potential To Achieve Your Goal Through Smart Adaptability
                 </h4>
                 <ul className="pt-4 list-disc ps-3">
                    <li className="text-[16px] text-white helvatica-bold pt-3">We have a perfect mix of youth and experience to MEET client&apos;s expectation.</li>
                    <li className="text-[16px] text-white helvatica-bold pt-3">
                      We use brainstorming ideas to generate HIGHER traffic.
                    </li>
                 </ul>
                 <a href="#" className="bg-[#E74235] rounded-[40px] text-[16px] leading-[61px] inline-block px-[30px] text-white mt-5">
                   Talk to experts
                 </a>
               </div>
               <div className="w-1/2 ps-10" data-scroll="true" data-scroll-direction="horizontal" data-scroll-speed="-2">
                <Image src={TabImage} alt="" priority/>
               </div>
           </div>
        </div>

    );
  }
  