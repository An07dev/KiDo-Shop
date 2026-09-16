'use client';

import React from 'react';
import Image from 'next/image';
import { FiDownload, FiX, FiSmartphone, FiMonitor } from 'react-icons/fi';
import { usePWAInstall } from '@/hooks/usePWAInstall';
import { useTheme } from '@/contexts/ThemeContext';
import IOSInstallModal from './IOSInstallModal';
import DesktopInstallModal from './DesktopInstallModal';
import styles from './pwa.module.css';

export default function PWAInstallBanner() {
  const { theme } = useTheme();
  const {
    isInstallable,
    isStandalone,
    isAlreadyInstalled,
    isDismissed,
    isIOS,
    isWindows,
    isIOSModalOpen,
    setIsIOSModalOpen,
    isDesktopModalOpen,
    setIsDesktopModalOpen,
    hasDeferredPrompt,
    promptInstall,
    dismissBanner,
  } = usePWAInstall();

  // If already running as standalone app, or dismissed, or cannot install, do not show banner
  if (isStandalone || isDismissed || !isInstallable) {
    return (
      <>
        <IOSInstallModal
          isOpen={isIOSModalOpen}
          onClose={() => setIsIOSModalOpen(false)}
          shopName={theme?.pageTitles?.logoText || 'ShopBig'}
          iconUrl="/icon-192.png"
        />
        <DesktopInstallModal
          isOpen={isDesktopModalOpen}
          onClose={() => setIsDesktopModalOpen(false)}
          shopName={theme?.pageTitles?.logoText || 'ShopBig'}
          iconUrl="/icon-192.png"
          hasDeferredPrompt={hasDeferredPrompt}
          onRetryPrompt={promptInstall}
        />
      </>
    );
  }

  const shopName = theme?.pageTitles?.logoText || 'ShopBig';
  const installText = isIOS ? 'Ghim App' : isWindows ? 'Cài trên PC' : 'Tải App';

  return (
    <>
      {/* iOS Step-by-Step Installation Modal */}
      <IOSInstallModal
        isOpen={isIOSModalOpen}
        onClose={() => setIsIOSModalOpen(false)}
        shopName={shopName}
        iconUrl="/icon-192.png"
      />

      {/* Windows & Desktop Installation Modal */}
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
