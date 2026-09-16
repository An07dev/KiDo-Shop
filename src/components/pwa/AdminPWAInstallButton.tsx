'use client';

import React from 'react';
import { FiDownload } from 'react-icons/fi';
import toast from 'react-hot-toast';
import { usePWAInstall } from '@/hooks/usePWAInstall';
import { useTheme } from '@/contexts/ThemeContext';
import IOSInstallModal from './IOSInstallModal';
import DesktopInstallModal from './DesktopInstallModal';
import styles from '@/app/admin/layout.module.css';

export default function AdminPWAInstallButton() {
  const { theme } = useTheme();
  const {
    isStandalone,
    isAlreadyInstalled,
    isIOSModalOpen,
    setIsIOSModalOpen,
    isDesktopModalOpen,
    setIsDesktopModalOpen,
    hasDeferredPrompt,
    promptInstall,
    resetInstallState,
  } = usePWAInstall();

  // If already inside standalone window, do not show install button
  if (isStandalone) {
    return null;
  }

  const shopName = (theme?.pageTitles?.logoText || 'ShopBig') + ' - Quản Trị';

  const handleClick = () => {
    const isRecordedInstalled =
      isAlreadyInstalled ||
      (typeof window !== 'undefined' && localStorage.getItem('pwa_app_installed') === 'true');

    if (isRecordedInstalled) {
      toast.success('✓ Ứng dụng ShopBig đã được cài đặt trên thiết bị!', {
        duration: 4000,
        icon: '💻',
        style: {
          background: '#13161f',
          color: '#f8fafc',
          border: '1px solid #10b981',
          borderRadius: '10px',
          fontSize: '13px',
          fontWeight: 500,
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4), 0 0 12px rgba(16, 185, 129, 0.25)',
        },
      });
      return;
    }

    promptInstall();
  };

  return (
    <>
      <button
        type="button"
        className={styles.pinAppBtn}
        onClick={handleClick}
        title="Ghim ứng dụng Quản trị ra ngoài màn hình máy tính / điện thoại"
        aria-label="Ghim ứng dụng quản trị"
      >
        <FiDownload size={14} />
        <span>Ghim App</span>
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
        onResetState={resetInstallState}
      />
    </>
  );
}
