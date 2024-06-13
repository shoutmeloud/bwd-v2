"use client";
import { useEffect, useRef } from 'react';
import Header from './components/header';
import Banner from './components/banner';
import Service from './components/servicesection';
import Portfolio from './components/portfolio';
import Higher from './components/higherroi';
import Growth from './components/growth';
import Process from './components/process';
import Testimonial from './components/testimonials';
import Trusted from './components/trustedcompanies';
import Blog from './components/latestblog';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export default function Home() {
  const scrollRef = useRef(null);
  const locomotiveScrollRef = useRef(null);

  useEffect(() => {
    // Ensure Locomotive Scroll runs only on the client side
    if (typeof window !== 'undefined') {
      const LocomotiveScroll = require('locomotive-scroll').default;
      
      // Initialize Locomotive Scroll after a small delay to ensure the DOM is fully loaded
      setTimeout(() => {
        if (scrollRef.current) {
          locomotiveScrollRef.current = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
          });
        }
      }, 100);

      // Cleanup function to destroy LocomotiveScroll instance on component unmount
      return () => {
        if (locomotiveScrollRef.current) {
          locomotiveScrollRef.current.destroy();
        }
      };
    }
  }, []);

  return (
    <main data-scroll-container ref={scrollRef}>
      <Header />
      <Banner />
      <div className="bg-[#141414] pt-[74px] pb-[50px]">
        <div className="container mx-auto">
          <div className="big-ltr" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-3">
            EVOLVE BETTER AS  YOU <br />  <span className="text-[#EA4335]">GROW </span> BIGGER
          </div>
        </div>
      </div>
      <Service data-scroll-section />
      <Portfolio data-scroll-section />
      <Higher data-scroll-section />
      <Growth data-scroll-section />
      <Process data-scroll-section />
      <Testimonial data-scroll-section />
      <Trusted data-scroll-section />
      <Blog/>
    </main>
  );
}
