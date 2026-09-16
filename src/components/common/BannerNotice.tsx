'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import styles from './BannerNotice.module.css';

interface BannerNoticeProps {
  customText?: string;
  forceShow?: boolean;
}

export default function BannerNotice({ customText, forceShow }: BannerNoticeProps) {
  const { theme } = useTheme();

  const isVisible = forceShow || (theme?.pageTitles?.showBannerNotice !== false);
  if (!isVisible) return null;

  const rawMessage = customText || theme?.pageTitles?.bannerNotice;
  const message = typeof rawMessage === 'string' ? rawMessage.trim() : '';
  if (!message) return null;

  const primaryBg = theme?.buttonColors?.primaryBg || 'var(--primary, #ee4d2d)';

  return (
    <div
      className={styles.bannerWrapper}
      style={{
        background: `linear-gradient(90deg, ${primaryBg} 0%, #26C6DA 100%)`,
      }}
    >
      <div className={styles.marqueeTrack}>
        <span className={styles.marqueeItem}>{message}</span>
        <span className={styles.marqueeItem}>{message}</span>
        <span className={styles.marqueeItem}>{message}</span>
        <span className={styles.marqueeItem}>{message}</span>
      </div>
    </div>
  );
}
