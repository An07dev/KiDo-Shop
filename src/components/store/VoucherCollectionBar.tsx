'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FiClock, FiCheck, FiChevronLeft, FiChevronRight, FiTag } from 'react-icons/fi';
import { RiCoupon3Line } from 'react-icons/ri';
import { apiFetch } from '@/lib/api';
import { clientCache } from '@/lib/clientCache';
import { useVoucherWallet } from '@/hooks/useVoucherWallet';
import styles from './VoucherCollectionBar.module.css';

interface IVoucherItem {
  _id: string;
  code: string;
  name: string;
  description?: string;
  discountType: 'fixed' | 'percent';
  discountValue: number;
  maxDiscountAmount: number;
  minOrderValue: number;
  endDate: string;
  isUsedByCustomer?: boolean;
}

export default function VoucherCollectionBar() {
  const [vouchers, setVouchers] = useState<IVoucherItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { isSaved, saveVoucher } = useVoucherWallet();
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function loadVouchers() {
      try {
        let phone = '';
        try {
          const profile = JSON.parse(localStorage.getItem('shopbig_profile') || '{}');
          if (profile?.phone) phone = profile.phone;
        } catch (e) { }

        const cacheKey = `public_vouchers_${phone}`;
        const data = await clientCache.fetchWithCache(
          cacheKey,
          async () => {
            const res = await apiFetch(`/api/vouchers?phone=${encodeURIComponent(phone)}`);
            return await res.json();
          },
          30000 // 30s TTL
        );

        if (data?.success && Array.isArray(data?.data)) {
          setVouchers(data.data);
        } else {
          setVouchers([]);
        }
      } catch (err) {
        console.error('Error fetching public vouchers:', err);
        setVouchers([]);
      } finally {
        setLoading(false);
      }
    }
    loadVouchers();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const formatCurrency = (amount: number) => {
    if (amount >= 1000) {
      return `${Math.round(amount / 1000)}k`;
    }
    return new Intl.NumberFormat('vi-VN').format(amount);
  };

  const formatMinSpend = (amount: number) => {
    if (!amount || amount === 0) return 'Đơn tối thiểu 0₫';
    return `Đơn tối thiểu ${new Intl.NumberFormat('vi-VN').format(amount)}₫`;
  };

  const formatExpiry = (dateStr: string) => {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return `HSD: ${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
  };

  if (!vouchers || vouchers.length === 0) return null;

  return (
    <div className={styles.wrapper}>
      {/* HEADER SECTION */}
      <div className={styles.sectionHeader}>
        <div className={styles.titleGroup}>
          <span className={styles.iconBadge}>
            <RiCoupon3Line size={20} />
          </span>
          <div className={styles.titleInfo}>
            <div className={styles.titleRow}>
              <h3 className={styles.title}>Mã Giảm Giá Của Shop</h3>
            </div>
          </div>
        </div>

        {/* Desktop Carousel Navigation Arrows */}
        <div className={styles.navControls}>
          <button
            type="button"
            className={styles.navBtn}
            onClick={() => scroll('left')}
            aria-label="Cuộn sang trái"
            title="Xem mã trước"
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            type="button"
            className={styles.navBtn}
            onClick={() => scroll('right')}
            aria-label="Cuộn sang phải"
            title="Xem mã tiếp theo"
          >
            <FiChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* HORIZONTAL CAROUSEL */}
      <div className={styles.carousel} ref={carouselRef}>
        {vouchers.map((item) => {
          const saved = isSaved(item.code);
          const isUsed = item.isUsedByCustomer;
          const badgeText =
            item.discountType === 'percent'
              ? `-${item.discountValue}%`
              : `-${formatCurrency(item.discountValue).toUpperCase()}`;

          return (
            <div key={item._id || item.code} className={styles.voucherCard}>
              {/* Left Ticket Badge (To, rõ, màu sắc ấn tượng) */}
              <div className={styles.leftBadge}>
                <span className={styles.badgeValue}>{badgeText}</span>
                <span className={styles.badgeLabel}>GIẢM GIÁ</span>
                {item.discountType === 'percent' && item.maxDiscountAmount > 0 && (
                  <span className={styles.badgeSub}>Tối đa {formatCurrency(item.maxDiscountAmount)}</span>
                )}
              </div>

              {/* Dashed Divider with punch holes */}
              <div className={styles.dashedDivider} />

              {/* Right Content (To, rõ ràng chi tiết) */}
              <div className={styles.rightContent}>
                <div className={styles.topInfo}>
                  <div className={styles.badgeCodeRow}>
                    <span className={styles.codeTag}>
                      <FiTag size={11} /> {item.code}
                    </span>
                  </div>
                  <div className={styles.codeName} title={item.name || item.code}>
                    {item.name || item.code}
                  </div>
                </div>

                <div className={styles.minSpend}>
                  {formatMinSpend(item.minOrderValue)}
                </div>

                <div className={styles.bottomRow}>
                  <span className={styles.expiry} title={`Hạn sử dụng: ${formatExpiry(item.endDate)}`}>
                    <FiClock size={13} /> {formatExpiry(item.endDate)}
                  </span>

                  {isUsed ? (
                    <button type="button" className={styles.usedBtn} disabled>
                      Đã Dùng
                    </button>
                  ) : saved ? (
                    <button type="button" className={styles.savedBtn} disabled>
                      <FiCheck size={13} /> Đã Lưu
                    </button>
                  ) : (
                    <button
                      type="button"
                      className={styles.saveBtn}
                      onClick={() => saveVoucher(item.code)}
                    >
                      Lưu Mã
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
