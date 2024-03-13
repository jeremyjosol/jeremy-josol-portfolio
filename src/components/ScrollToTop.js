import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';
import { IoIosArrowDropup } from "react-icons/io";

const ScrollToTop = () => {
  const [showScrollTopIcon, setShowScrollTopIcon] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollTopIcon(true);
      } else {
        setShowScrollTopIcon(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={showScrollTopIcon ? "scroll-top-icon show" : "scroll-top-icon"} onClick={scrollToTop}>
      <IoIosArrowDropup />
    </div>
  );
}

export default ScrollToTop;
