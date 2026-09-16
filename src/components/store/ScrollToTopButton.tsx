'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import styles from './ScrollToTopButton.module.css';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      setIsVisible(scrollY > 250);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check in case user is already scrolled down
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    if (document.documentElement) {
      document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
    if (document.body) {
      document.body.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <button
      type="button"
      className={`${styles.scrollToTopBtn} ${isVisible ? styles.scrollToTopBtnVisible : ''}`}
      onClick={scrollToTop}
      aria-label="Cuộn về đầu trang"
      title="Cuộn về đầu trang"
    >
      <FiArrowUp size={22} strokeWidth={2.5} />
    </button>
  );
}
