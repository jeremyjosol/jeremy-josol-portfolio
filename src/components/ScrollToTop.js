import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';
import { FiChevronUp } from "react-icons/fi";

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
      <FiChevronUp />
    </div>
  );
}

export default ScrollToTop;
