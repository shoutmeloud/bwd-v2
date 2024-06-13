import Image from "next/image";
import { PartnerLogo, PartnerLogoImg, PartnerLogoImgThree } from "../index";


export default function Trusted() {
    return (
     
        <div className="bg-[141414] py-[60px]">
          <div className="container mx-auto">
              <p className="uppercase text-[22px] text-white text-center">Trusted By Dynamic Companies</p>
              <div className="flex justify-between items-center pt-9">
                 <div><Image src={PartnerLogo} alt="" priority/></div>
                 <div><Image src={PartnerLogoImg} alt="" priority/></div>
                 <div><Image src={PartnerLogo} alt="" priority/></div>
                 <div><Image src={PartnerLogoImgThree} alt="" priority/></div>
                 <div><Image src={PartnerLogo} alt="" priority/></div>
              </div>
          </div>
        </div>
     
    );
  }
  