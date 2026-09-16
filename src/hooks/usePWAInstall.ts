'use client';

import { useState, useEffect, useCallback } from 'react';
import toast from 'react-hot-toast';

export type PlatformType = 'ios' | 'android' | 'windows' | 'mac' | 'other';

export interface UsePWAInstallReturn {
  isInstallable: boolean;
  isStandalone: boolean;
  isAlreadyInstalled: boolean;
  platform: PlatformType;
  isIOS: boolean;
  isAndroid: boolean;
  isWindows: boolean;
  isIOSModalOpen: boolean;
  setIsIOSModalOpen: (open: boolean) => void;
  isDesktopModalOpen: boolean;
  setIsDesktopModalOpen: (open: boolean) => void;
  isAlreadyInstalledModalOpen: boolean;
  setIsAlreadyInstalledModalOpen: (open: boolean) => void;
  hasDeferredPrompt: boolean;
  promptInstall: () => Promise<boolean>;
  openInstalledApp: (targetPath?: string) => void;
  resetInstallState: () => void;
  dismissBanner: () => void;
  isDismissed: boolean;
}

export function usePWAInstall(): UsePWAInstallReturn {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isAlreadyInstalled, setIsAlreadyInstalled] = useState(false);
  const [platform, setPlatform] = useState<PlatformType>('other');
  const [isIOSModalOpen, setIsIOSModalOpen] = useState(false);
  const [isDesktopModalOpen, setIsDesktopModalOpen] = useState(false);
  const [isAlreadyInstalledModalOpen, setIsAlreadyInstalledModalOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(true);

  // 1. Detect platform and standalone status on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check standalone
    const isStandaloneMedia = window.matchMedia('(display-mode: standalone)').matches;
    const isNavigatorStandalone = (window.navigator as any).standalone === true;
    const standalone = isStandaloneMedia || isNavigatorStandalone;
    setIsStandalone(standalone);

    // Check if previously recorded as installed in localStorage
    const recordedInstalled = localStorage.getItem('pwa_app_installed') === 'true';
    if (standalone || recordedInstalled) {
      setIsAlreadyInstalled(true);
    }

    // Detect platform
    const ua = window.navigator.userAgent.toLowerCase();
    let detectedPlatform: PlatformType = 'other';
    if (/iphone|ipad|ipod/.test(ua)) {
      detectedPlatform = 'ios';
    } else if (/android/.test(ua)) {
      detectedPlatform = 'android';
    } else if (/windows|win32|win64/.test(ua)) {
      detectedPlatform = 'windows';
    } else if (/macintosh|mac os x/.test(ua)) {
      detectedPlatform = 'mac';
    }
    setPlatform(detectedPlatform);

    // Check dismissed in session
    const dismissed = sessionStorage.getItem('pwa_banner_dismissed') === 'true';
    setIsDismissed(dismissed);

    // Query OS-level installed status to sync with actual reality
    if (typeof navigator !== 'undefined' && 'getInstalledRelatedApps' in navigator) {
      (navigator as any).getInstalledRelatedApps().then((apps: any[]) => {
        console.log('[PWA Debug Init] getInstalledRelatedApps check:', apps);
        if (apps && apps.length > 0) {
          setIsAlreadyInstalled(true);
          try { localStorage.setItem('pwa_app_installed', 'true'); } catch (e) {}
        }
      }).catch(() => {});
    }

    console.log(
      '%c[PWA Debug Init]%c Platform: ' +
        detectedPlatform +
        ' | Standalone: ' +
        standalone +
        ' | AlreadyInstalled: ' +
        (standalone || recordedInstalled),
      'background: #ee4d2d; color: #fff; padding: 2px 6px; border-radius: 4px; font-weight: bold;',
      'color: #00d2d3;'
    );

    // Check if early inline script already caught beforeinstallprompt
    if ((window as any).__pwaDeferredPrompt) {
      console.log(
        '%c[PWA Debug]%c Found pre-captured beforeinstallprompt from window.__pwaDeferredPrompt',
        'background: #10b981; color: #fff; padding: 2px 6px; border-radius: 4px;',
        'color: #10b981;'
      );
      setDeferredPrompt((window as any).__pwaDeferredPrompt);
      // Browser fired beforeinstallprompt => app is definitely not installed
      setIsAlreadyInstalled(false);
      try { localStorage.removeItem('pwa_app_installed'); } catch (e) {}
    }

    // Handler for beforeinstallprompt
    const handleBeforeInstallPrompt = (e: Event) => {
      console.log(
        '%c[PWA Debug]%c beforeinstallprompt event captured!',
        'background: #10b981; color: #fff; padding: 2px 6px; border-radius: 4px;',
        'color: #10b981;',
        e
      );
      e.preventDefault();
      (window as any).__pwaDeferredPrompt = e;
      setDeferredPrompt(e);
      // Browser emitted beforeinstallprompt => app is definitely not installed
      setIsAlreadyInstalled(false);
      try { localStorage.removeItem('pwa_app_installed'); } catch (e) {}
    };

    // Handler for early custom event
    const handleEarlyDeferredReady = () => {
      if ((window as any).__pwaDeferredPrompt) {
        console.log('[PWA Debug] Received pwa-deferred-ready event');
        setDeferredPrompt((window as any).__pwaDeferredPrompt);
        setIsAlreadyInstalled(false);
        try { localStorage.removeItem('pwa_app_installed'); } catch (e) {}
      }
    };

    // App installed listener
    const handleAppInstalled = () => {
      console.log(
        '%c[PWA Debug]%c App was successfully installed!',
        'background: #8b5cf6; color: #fff; padding: 2px 6px; border-radius: 4px;',
        'color: #8b5cf6;'
      );
      setDeferredPrompt(null);
      (window as any).__pwaDeferredPrompt = null;
      setIsStandalone(true);
      setIsAlreadyInstalled(true);
      try {
        localStorage.setItem('pwa_app_installed', 'true');
      } catch (e) {}
      toast.success('Ứng dụng ShopBig đã được cài đặt thành công!');
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('pwa-deferred-ready', handleEarlyDeferredReady);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('pwa-deferred-ready', handleEarlyDeferredReady);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const isIOS = platform === 'ios';
  const isAndroid = platform === 'android';
  const isWindows = platform === 'windows';
  const hasDeferredPrompt = Boolean(deferredPrompt);
  const isInstallable = !isStandalone;

  const resetInstallState = useCallback(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem('pwa_app_installed');
        sessionStorage.removeItem('pwa_banner_dismissed');
      } catch (e) {}
    }
    setIsAlreadyInstalled(false);
    toast('Đã xóa bộ nhớ đệm trạng thái cài đặt! Bạn có thể thử cài đặt lại.', { icon: '🔄' });
  }, []);

  // Directly launch/focus the installed PWA application
  const openInstalledApp = useCallback((targetPath?: string) => {
    const url = targetPath || (typeof window !== 'undefined' ? window.location.pathname : '/admin');
    console.log('[PWA Open] Direct app launch initiated for:', url);

    toast.success('🚀 Đang mở ứng dụng...', {
      duration: 3500,
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

    // 1. Try custom protocol scheme web+shopbig (handled by installed PWA on Windows)
    try {
      const link = document.createElement('a');
      link.href = `web+shopbig://open?url=${encodeURIComponent(url)}`;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        try {
          document.body.removeChild(link);
        } catch (e) {}
      }, 1000);
    } catch (e) {
      console.warn('[PWA Open] Protocol trigger failed:', e);
    }

    // 2. Open via window.open (handled by browser launch_handler: client_mode focus-existing)
    try {
      window.open(url, '_blank');
    } catch (e) {}
  }, []);

  // Trigger installation with on-screen log feedback
  const promptInstall = useCallback(async (): Promise<boolean> => {
    console.log(
      '%c[PWA Click]%c promptInstall called. Platform: ' +
        platform +
        ', hasDeferredPrompt: ' +
        Boolean(deferredPrompt) +
        ', isStandalone: ' +
        isStandalone +
        ', isAlreadyInstalled: ' +
        isAlreadyInstalled,
      'background: #3b82f6; color: #fff; padding: 2px 6px; border-radius: 4px; font-weight: bold;',
      'color: #f1f2f6;'
    );

    // 1. If actively running inside a standalone app window
    if (isStandalone) {
      toast.success('Bạn đang sử dụng ứng dụng ở chế độ độc lập (Standalone).', {
        icon: '💻',
      });
      return true;
    }

    // 2. iOS Safari
    if (isIOS) {
      console.log('[PWA Debug] Opening iOS installation guide modal.');
      setIsIOSModalOpen(true);
      return true;
    }

    // 3. Check for active prompt from state or window global FIRST
    const activePrompt =
      deferredPrompt || (typeof window !== 'undefined' ? (window as any).__pwaDeferredPrompt : null);

    if (activePrompt) {
      console.log('[PWA Debug] Triggering native activePrompt.prompt()...');
      setIsAlreadyInstalled(false);
      try {
        localStorage.removeItem('pwa_app_installed');
      } catch (e) {}

      try {
        await activePrompt.prompt();
        const choiceResult = await activePrompt.userChoice;
        console.log(
          '%c[PWA Debug]%c User choice result:',
          'background: #10b981; color: #fff; padding: 2px 6px;',
          'color: #10b981;',
          choiceResult
        );
        if (choiceResult.outcome === 'accepted') {
          console.log('[PWA Debug] User accepted the install prompt.');
          setDeferredPrompt(null);
          if (typeof window !== 'undefined') {
            (window as any).__pwaDeferredPrompt = null;
            localStorage.setItem('pwa_app_installed', 'true');
          }
          setIsAlreadyInstalled(true);
          toast.success('Đang tiến hành cài đặt ứng dụng vào máy tính...');
          return true;
        } else {
          console.log('[PWA Debug] User dismissed the install prompt.');
          return false;
        }
      } catch (err) {
        console.error('[PWA Debug Error] Exception while triggering prompt():', err);
        toast.error('Lỗi khi mở hộp thoại cài đặt: ' + (err as any)?.message);
        return false;
      }
    }

    // 4. If activePrompt is null on Windows / Desktop:
    // Chrome / Edge suppresses beforeinstallprompt when the app is ALREADY installed on the machine.
    // Show toast notification that the app is already installed without opening the app or modal!
    if (platform === 'windows' || platform === 'mac' || platform === 'other') {
      console.info('[PWA Click] Prompt is null on Desktop (app already installed). Showing notification...');
      setIsAlreadyInstalled(true);
      try {
        localStorage.setItem('pwa_app_installed', 'true');
      } catch (e) {}

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
      return true;
    }

    // 5. Android fallback if beforeinstallprompt not fired yet
    if (platform === 'android') {
      toast('Trình duyệt đang khởi tạo, bạn có thể bấm vào Menu (⋮) góc trên và chọn "Cài đặt ứng dụng"', {
        icon: '💡',
        duration: 5000,
      });
      return false;
    }

    return false;
  }, [deferredPrompt, isAlreadyInstalled, isIOS, isStandalone, openInstalledApp, platform]);

  const dismissBanner = useCallback(() => {
    setIsDismissed(true);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('pwa_banner_dismissed', 'true');
    }
  }, []);

  return {
    isInstallable,
    isStandalone,
    isAlreadyInstalled,
    platform,
    isIOS,
    isAndroid,
    isWindows,
    isIOSModalOpen,
    setIsIOSModalOpen,
    isDesktopModalOpen,
    setIsDesktopModalOpen,
    isAlreadyInstalledModalOpen,
    setIsAlreadyInstalledModalOpen,
    hasDeferredPrompt,
    promptInstall,
    openInstalledApp,
    resetInstallState,
    dismissBanner,
    isDismissed,
  };
}
