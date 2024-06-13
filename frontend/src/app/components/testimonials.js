import Image from "next/image";
import { TestimonialImg, TestimonialTwo} from "../index";


export default function Testimonial() {
    return (
     <div className="bg-white py-[140px]">
        <div className="container mx-auto">
            <h2 className="text-[56px] leading-[60px] text-center text-[#4A4A4A] helvatica-bold" data-aos="fade-up">What our Clients say</h2>
            <div className="flex mt-6">
                <div className="w-1/2 mx-4" data-aos="fade-right">
                    <div className="flex mt-5 items-center justify-between bg-white p-[25px] shadow-lg">
                <div className="imgsec w-2/5">
                    <Image src={TestimonialImg} alt="Testimonial" />
                </div>
                <div className="textsec w-3/5 ps-5">
                    <p className="text-[15px] leading-[23px] text-[#4A4A4A]">
                    My confidence allows me to not give up under any circumstances. The zeal to work harder has boosted me to overcome challenges and achieve different milestones. Providing authentic deliverables at a competitive cost has been a part of Big Wave Development LLC&apos;s activity. Our team has worked cohesively to transform various companies to achieve their targets.
                    </p>
                    <p className="text-[15px] text-[#4A4A4A] helvatica-bold leading-[19px] pt-3">
                    Mike Boggus <br></br>(Florida, USA)
                    </p>
                </div>
                    </div>
                </div> 
                <div className="w-1/2 mx-4" data-aos="fade-left">
                    <div className="flex mt-5 items-center justify-between bg-white p-[25px] shadow-lg">
                <div className="imgsec w-2/5">
                    <Image src={TestimonialTwo} alt="Testimonial" />
                </div>
                <div className="textsec w-3/5 ps-5">
                    <p className="text-[15px] leading-[23px] text-[#4A4A4A]">
                    My confidence allows me to not give up under any circumstances. The zeal to work harder has boosted me to overcome challenges and achieve different milestones. Providing authentic deliverables at a competitive cost has been a part of Big Wave Development LLC&apos;s activity. Our team has worked cohesively to transform various companies to achieve their targets.
                    </p>
                    <p className="text-[15px] text-[#4A4A4A] helvatica-bold leading-[19px] pt-3">
                    Mike Boggus <br></br>(Florida, USA)
                    </p>
                </div>
                    </div>
                </div> 
                
            </div>
        </div>
     </div>

    );
  }
  