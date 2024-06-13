"use client";

import SwiperComponent from '../components/portfolioslider';
import 'locomotive-scroll/dist/locomotive-scroll.css';


export default function Portfolio() {
  

 return (
    <div>
       <div className="py-[200px]">
          <div className="container mx-auto">
              <h2 className="text-[187px] portfolio-text leading-[190px] text-white text-center uppercase helvatica-bold" data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-2">
                View our<br></br>
                Portfolio
              </h2>

                  
          </div>
        </div>
          <div>
            <SwiperComponent/>
           
          </div>
    </div>
    );
  }
  