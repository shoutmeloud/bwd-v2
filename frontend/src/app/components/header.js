import Image from "next/image";
import { HeaderLogo } from "../index";


export default function header() {
    return (
     <header className="py-4 absolute left-0 top-0 right-0 w-full z-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
               <div className="logo">
                 <Image src={HeaderLogo} alt="Logo" priority/>
                </div>
                <nav>
                  <ul className="flex">
                    <li>
                       <a href="#" className="px-3 text-[16px] text-white">
                          Home
                       </a>
                    </li>
                    <li>
                       <a href="#" className="px-3 text-[16px] text-white">
                        About
                       </a>
                    </li>
                    <li>
                       <a href="#" className="px-3 text-[16px] text-white">
                        Service
                       </a>
                    </li>
                    <li>
                       <a href="#" className="px-3 text-[16px] text-white">
                        Blog
                       </a>
                    </li>
                    <li>
                       <a href="#" className="px-3 text-[16px] text-white">
                         Contact
                       </a>
                    </li>
                  </ul>
                </nav>
                <a href="#" className="bg-[#E74235] text-[16px] block px-[30px] rounded-[35px] leading-[50px]">
                 Get Started
                </a>
          </div>
        </div>
     </header>

    );
  }
  