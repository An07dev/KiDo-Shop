'use client';

import { useEffect } from 'react';

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js', { scope: '/' })
        .then((registration) => {
          console.log(
            '%c[PWA SW]%c Registered successfully with scope: ' + registration.scope,
            'background: #10b981; color: #fff; padding: 2px 6px; border-radius: 4px;',
            'color: #10b981;'
          );
          // Check for service worker updates immediately
          registration.update().catch(() => {});
        })
        .catch((error) => {
          console.warn('[PWA SW] Registration failed:', error);
        });
    }
  }, []);

  return null;
}
