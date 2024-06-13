import Image from "next/image";
import { BlogImageOne, BlogImageTwo, CalenderIcon } from "../index";


export default function Blog() {
    return (
          
        <div className="bg-white py-[100px]">
          <div className="container mx-auto">
             <div className="flex justify-between items-center">
               <div className="w-[35%]">
                    <h2 className="text-[#4A4A4A] text-[48px] leading-[55px] helvatica-bold">
                        Latest Blog & News
                    </h2>
                    <p className="text-[16px] leading-[25px] text-[#4A4A4A] mt-4">
                    Lorem ipsum dolor sit amet consectetur. Accumsan porttitor porttitor suspendisse nisl. Convallis maecenas dictum vulputate vitae erat sem fames augue dictum.
                    </p>
                    <a href="#" className="bg-[#E74235] px-5 inline-block text-center leading-[60px] text-white rounded-md mt-4">
                        View All Blogs
                    </a>
               </div>
               <div className="flex justify-between ps-4 w-[65%]">
                 <div className="w-1/2 bg-white p-5 shadow-md mx-3 rounded-sm">
                    <div className="">
                      <div className="w-full h-full rounded-sm">
                        <Image src={BlogImageOne} alt="" priority className="w-full h-full rounded-sm"/>
                        </div>
                        <div className="date-icon flex items-center mt-2 text-[16px] text-[#4A4A4A]"> 
                         <Image src={CalenderIcon} alt="" className="me-2" priority/>September 21, 2022</div>
                        <h3 className="text-[18px] leading-[25px] text-[#4A4A4A] pt-3 helvatica-bold">Think Of WordPress Web Development Agency In St. Petersburg</h3>
                        <a href="#" className="text-[#E74235] text-[16px] helvatica-bold pt-3 block">Read now</a>
                     </div>
                 </div>
                 <div className="w-1/2 bg-white p-5 shadow-md mx-3 rounded-sm">
                    <div className="">
                      <div className="w-full h-full rounded-sm">
                        <Image src={BlogImageTwo} alt="" priority className="w-full h-full rounded-sm"/>
                      </div>
                      <div className="date-icon flex items-center mt-2"> <Image src={CalenderIcon} alt="" className="me-2" priority/>September 21, 2022</div>
                      <h3 className="text-[18px] leading-[25px] text-[#4A4A4A] pt-3 helvatica-bold">Amplify business through social media <br></br> marketing</h3>
                        <a href="#" className="text-[#E74235] text-[16px] helvatica-bold pt-3 block">Read now</a>
                      </div>
                    
                 </div>
               </div>
             </div>
          </div>
        </div>

    );
  }
  