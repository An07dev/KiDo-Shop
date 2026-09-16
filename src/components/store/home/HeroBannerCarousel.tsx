'use client';

import React, { useState, useEffect, memo } from 'react';
import { useRouter } from 'next/navigation';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styles from './HeroBannerCarousel.module.css';

interface BannerItem {
  image: string;
  title?: string;
  tag?: string;
  link?: string;
}

interface HeroBannerCarouselProps {
  banners: BannerItem[];
  subBanners?: BannerItem[];
  onNavigateToProducts?: () => void;
}

const DEFAULT_SUB_BANNERS: BannerItem[] = [
  {
    tag: '9.9 Siêu Sale',
    title: 'Ăn Sáng Ngon Rẻ - Chỉ từ 10.000đ',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=80',
    link: '/?tab=products',
  },
  {
    tag: 'Hàng Việt Tôi Yêu',
    title: 'Chất Lượng Chính Hãng - Freeship 0Đ',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&auto=format&fit=crop&q=80',
    link: '/?tab=products&filter=flash-sale',
  },
];

const HeroBannerCarouselComponent: React.FC<HeroBannerCarouselProps> = ({
  banners,
  subBanners,
  onNavigateToProducts,
}) => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Lọc chỉ giữ các banner có đường dẫn ảnh hợp lệ (ẩn nếu không có ảnh)
  const validBanners = React.useMemo(() => {
    return (banners || []).filter(
      (slide) => Boolean(slide && slide.image && typeof slide.image === 'string' && slide.image.trim().length > 0)
    );
  }, [banners]);

  // Lọc chỉ giữ các banner phụ có ảnh hợp lệ (ẩn nếu không có ảnh hoặc rỗng)
  const validSubBanners = React.useMemo(() => {
    const list = Array.isArray(subBanners) ? subBanners : [];

    return list.filter(
      (sub) => Boolean(sub && sub.image && typeof sub.image === 'string' && sub.image.trim().length > 0)
    );
  }, [subBanners]);

  // Auto-slide carousel (4 seconds)
  useEffect(() => {
    if (validBanners.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % validBanners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [validBanners.length]);

  // Đảm bảo slide index hợp lệ khi danh sách ảnh thay đổi
  useEffect(() => {
    if (currentSlide >= validBanners.length && validBanners.length > 0) {
      setCurrentSlide(0);
    }
  }, [validBanners.length, currentSlide]);

  // Nếu cả banner chính và banner phụ đều không có ảnh -> Ẩn toàn bộ component
  if (validBanners.length === 0 && validSubBanners.length === 0) {
    return null;
  }

  // Mobile Touch Swipe Handlers
  const touchStartX = React.useRef<number | null>(null);
  const touchEndX = React.useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40;
    if (distance > minSwipeDistance) {
      setCurrentSlide((prev) => (prev + 1) % validBanners.length);
    } else if (distance < -minSwipeDistance) {
      setCurrentSlide((prev) => (prev === 0 ? validBanners.length - 1 : prev - 1));
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleBannerClick = (slide: BannerItem) => {
    if (slide.link) {
      router.push(slide.link);
    } else if (onNavigateToProducts) {
      onNavigateToProducts();
    } else {
      router.push('/?tab=products');
    }
  };

  return (
    <div className={styles.heroBannerSection}>
      {/* 1. MAIN BANNER CAROUSEL (Ẩn nếu không có ảnh) */}
      {validBanners.length > 0 && (
        <div
          className={styles.bannerCarousel}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={styles.carouselTrack}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {validBanners.map((slide, idx) => (
              <div
                key={idx}
                className={styles.carouselSlide}
                onClick={() => handleBannerClick(slide)}
              >
                <img
                  src={slide.image}
                  alt={slide.title || 'Banner'}
                  className={styles.carouselImg}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
                {(slide.tag || slide.title) && (
                  <div className={styles.carouselOverlay}>
                    {slide.tag && <span className={styles.carouselTag}>{slide.tag}</span>}
                    {slide.title && <h2 className={styles.carouselTitle}>{slide.title}</h2>}
                  </div>
                )}
              </div>
            ))}
          </div>

          {validBanners.length > 1 && (
            <>
              <button
                type="button"
                className={`${styles.carouselNavBtn} ${styles.carouselPrevBtn}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentSlide((prev) => (prev === 0 ? validBanners.length - 1 : prev - 1));
                }}
                aria-label="Ảnh trước"
              >
                <FiChevronLeft size={18} />
              </button>
              <button
                type="button"
                className={`${styles.carouselNavBtn} ${styles.carouselNextBtn}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentSlide((prev) => (prev + 1) % validBanners.length);
                }}
                aria-label="Ảnh sau"
              >
                <FiChevronRight size={18} />
              </button>
            </>
          )}

          {validBanners.length > 1 && (
            <div className={styles.carouselDots}>
              {validBanners.map((_, idx) => (
                <button
                  key={idx}
                  className={`${styles.dot} ${currentSlide === idx ? styles.activeDot : ''}`}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* 2. CÁC ẢNH PHỤ SẮP XẾP THÀNH 1 HÀNG DỌC (Ẩn nếu không có ảnh) */}
      {validSubBanners.length > 0 && (
        <div className={styles.subBannersRow}>
          {validSubBanners.map((sub, idx) => (
            <div
              key={idx}
              className={styles.subBannerCard}
              onClick={() => handleBannerClick(sub)}
            >
              <div className={styles.subBannerImgWrap}>
                <img
                  src={sub.image}
                  alt={sub.title || `Banner phụ ${idx + 1}`}
                  className={styles.subBannerImg}
                  loading="lazy"
                />
                {(sub.tag || sub.title) && (
                  <div className={styles.subBannerOverlay}>
                    {sub.tag && <span className={styles.subBannerTag}>{sub.tag}</span>}
                    {sub.title && <h3 className={styles.subBannerTitle}>{sub.title}</h3>}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const HeroBannerCarousel = memo(HeroBannerCarouselComponent);
export default HeroBannerCarousel;
