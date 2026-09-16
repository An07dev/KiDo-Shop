'use client';

import React, { memo, useRef } from 'react';
import Image from 'next/image';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { BiCategoryAlt } from 'react-icons/bi';
import styles from './HomeCategoryShowcase.module.css';

interface CategoryItem {
  _id: string;
  name: string;
  slug: string;
  productCount?: number;
  sampleImage?: string;
  image?: string;
}

interface HomeCategoryShowcaseProps {
  categories: CategoryItem[];
  categoryImageMap: Record<string, string>;
  onCategorySelect: (slugOrId: string) => void;
  onSeeAll: () => void;
}

const iconGradients = [
  'linear-gradient(135deg, #ff5722 0%, #ee4d2d 100%)',
  'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
  'linear-gradient(135deg, #10b981 0%, #047857 100%)',
  'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
  'linear-gradient(135deg, #a855f7 0%, #6b21a8 100%)',
  'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
  'linear-gradient(135deg, #06b6d4 0%, #0e7490 100%)',
  'linear-gradient(135deg, #64748b 0%, #334155 100%)',
];

const HomeCategoryShowcaseComponent: React.FC<HomeCategoryShowcaseProps> = ({
  categories,
  categoryImageMap,
  onCategorySelect,
  onSeeAll,
}) => {
  const trackRef = useRef<HTMLDivElement>(null);

  if (!categories || categories.length === 0) return null;

  const handleScroll = (direction: 'left' | 'right') => {
    if (trackRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.homeCategorySection}>
      <div className={styles.homeCategoryHeader}>
        <div className={styles.homeCategoryTitleGroup}>
          <span className={styles.iconBadge}>
            <BiCategoryAlt size={18} />
          </span>
          <h3 className={styles.homeCategoryTitle}>DANH MỤC SẢN PHẨM</h3>
        </div>

        <div className={styles.headerRight}>
          <button
            type="button"
            className={styles.homeCategorySeeAll}
            onClick={onSeeAll}
          >
            <span>Xem tất cả</span>
            <FiChevronRight size={13} />
          </button>

          <div className={styles.navControls}>
            <button
              type="button"
              className={styles.navBtn}
              onClick={() => handleScroll('left')}
              aria-label="Xem danh mục trước"
              title="Cuộn sang trái"
            >
              <FiChevronLeft size={16} />
            </button>
            <button
              type="button"
              className={styles.navBtn}
              onClick={() => handleScroll('right')}
              aria-label="Xem danh mục tiếp theo"
              title="Cuộn sang phải"
            >
              <FiChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.homeCategoryTrack} ref={trackRef}>
        {categories.map((cat, idx) => {
          const gradient = iconGradients[idx % iconGradients.length];
          const catSlug = (cat.slug || '').toLowerCase().trim();
          const catId = (cat._id || '').toString().trim();
          const catName = (cat.name || '').toLowerCase().trim();
          const displayImage =
            categoryImageMap[catId] ||
            categoryImageMap[catSlug] ||
            categoryImageMap[catName] ||
            cat.sampleImage ||
            cat.image;

          return (
            <div
              key={cat._id || idx}
              className={styles.homeCategoryCard}
              onClick={() => onCategorySelect(cat.slug || cat._id)}
              role="button"
              tabIndex={0}
            >
              <div
                className={styles.homeCategoryImgWrap}
                style={!displayImage ? { background: gradient } : undefined}
              >
                {displayImage ? (
                  <Image
                    src={displayImage}
                    alt={cat.name}
                    fill
                    sizes="52px"
                    className={styles.homeCategoryImg}
                    loading="lazy"
                  />
                ) : (
                  <span className={styles.homeCategoryFallbackIcon}>
                    <BiCategoryAlt />
                  </span>
                )}
              </div>
              <span className={styles.homeCategoryName} title={cat.name}>
                {cat.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const HomeCategoryShowcase = memo(HomeCategoryShowcaseComponent);
export default HomeCategoryShowcase;
