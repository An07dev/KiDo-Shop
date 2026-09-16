'use client';

import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { usePWAInstall } from '@/hooks/usePWAInstall';
import { useTheme } from '@/contexts/ThemeContext';
import IOSInstallModal from './IOSInstallModal';
import DesktopInstallModal from './DesktopInstallModal';
import styles from './pwa.module.css';

export default function PWAHeaderButton() {
  const { theme } = useTheme();
  const {
    isStandalone,
    isAlreadyInstalled,
    isIOS,
    isWindows,
    isIOSModalOpen,
    setIsIOSModalOpen,
    isDesktopModalOpen,
    setIsDesktopModalOpen,
    hasDeferredPrompt,
    promptInstall,
  } = usePWAInstall();

  // If already running inside standalone installed window, do not show install button
  if (isStandalone) {
    return null;
  }

  const shopName = theme?.pageTitles?.logoText || 'ShopBig';

  return (
    <>
      <button
        type="button"
        className={styles.headerPwaIconBtn}
        onClick={promptInstall}
        title="Tải ứng dụng ShopBig / Ghim ra màn hình"
        aria-label="Tải ứng dụng"
      >
        <FiDownload className={styles.headerPwaIconSvg} />
      </button>

      {/* iOS Modal */}
      <IOSInstallModal
        isOpen={isIOSModalOpen}
        onClose={() => setIsIOSModalOpen(false)}
        shopName={shopName}
        iconUrl="/icon-192.png"
      />

      {/* Windows & Desktop Modal */}
      <DesktopInstallModal
        isOpen={isDesktopModalOpen}
        onClose={() => setIsDesktopModalOpen(false)}
        shopName={shopName}
        iconUrl="/icon-192.png"
        hasDeferredPrompt={hasDeferredPrompt}
        onRetryPrompt={promptInstall}
      />
    </>
  );
}
