'use client';

import React, { useRef, useMemo, memo } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { RiFireFill } from 'react-icons/ri';
import StoreProductCard, { ProductItem } from './StoreProductCard';
import styles from './HorizontalRecommendedSection.module.css';

interface HorizontalRecommendedSectionProps {
  products: ProductItem[];
  onQuickAdd: (e: React.MouseEvent, product: ProductItem) => void;
  onSeeAll?: () => void;
  title?: string;
}

const HorizontalRecommendedSectionComponent: React.FC<HorizontalRecommendedSectionProps> = ({
  products,
  onQuickAdd,
  onSeeAll,
  title = 'Gợi ý dành cho bạn',
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Sắp xếp các sản phẩm có sale cao nhất lên đầu
  const bestSellers = useMemo(() => {
    if (!products || products.length === 0) return [];

    const getDisc = (p: ProductItem) => {
      if (p.discountPercent !== undefined && p.discountPercent > 0) return p.discountPercent;
      const effective = p.flashPrice || p.salePrice || p.price;
      const original = p.price > effective ? p.price : (p.salePrice && p.salePrice > effective ? p.salePrice : 0);
      if (original > effective) {
        return Math.round(((original - effective) / original) * 100);
      }
      return 0;
    };

    return [...products]
      .sort((a, b) => getDisc(b) - getDisc(a))
      .slice(0, 15);
  }, [products]);

  if (bestSellers.length === 0) return null;

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 400;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className={styles.sectionContainer}>
      {/* HEADER SECTION */}
      <div className={styles.sectionHeader}>
        <div className={styles.headerTitleGroup}>
          <div className={styles.iconWrap}>
            <RiFireFill size={16} />
          </div>
          <h2 className={styles.sectionTitle}>{title}</h2>
          <span className={styles.badgeHighlight}>Sale Khủng Nhất</span>
        </div>

        <div className={styles.headerActions}>
          <div className={styles.navButtonsGroup}>
            <button
              type="button"
              className={styles.navBtn}
              onClick={() => handleScroll('left')}
              aria-label="Cuộn sang trái"
            >
              <FiChevronLeft size={16} />
            </button>
            <button
              type="button"
              className={styles.navBtn}
              onClick={() => handleScroll('right')}
              aria-label="Cuộn sang phải"
            >
              <FiChevronRight size={16} />
            </button>
          </div>

          {onSeeAll && (
            <button
              type="button"
              className={styles.seeAllBtn}
              onClick={onSeeAll}
            >
              <span>Xem tất cả</span>
              <FiChevronRight size={14} />
            </button>
          )}
        </div>
      </div>

      {/* HORIZONTAL SCROLL TRACK */}
      <div ref={scrollRef} className={styles.scrollTrack}>
        {bestSellers.map((item, idx) => (
          <div key={item._id || idx} className={styles.cardItemWrap}>
            <StoreProductCard
              product={item}
              onQuickAdd={onQuickAdd}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export const HorizontalRecommendedSection = memo(HorizontalRecommendedSectionComponent);
export default HorizontalRecommendedSection;
