// components/ScrollAnimation.js
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const ScrollAnimation = ({ children, animationName }) => {
  const [ref, inView] = useInView();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className={`animation-box ${animate ? 'animate' : ''}`}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
