// app/AOSProvider.js or app/AOSProvider.jsx
"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSProvider({ children }) {
  useEffect(() => {
    // Initialize AOS for top to bottom animations
    AOS.init({
      offset: 120,
      delay: 200,
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });

    // Initialize AOS for bottom to top animations
    AOS.init({
      offset: 120,
      delay: 200,
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      anchorPlacement: 'bottom-top',
    });

    // Disable AOS after initialization to prevent duplicate events
    AOS.refreshHard();

    // Destroy AOS instance on component unmount
    return () => {
      AOS.init(); // Resets AOS to its initial state
    };
  }, []);

  return <>{children}</>;
}
