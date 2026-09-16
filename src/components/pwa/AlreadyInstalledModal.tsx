'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiCheckCircle, FiX, FiMonitor, FiTerminal, FiRotateCcw, FiExternalLink } from 'react-icons/fi';
import styles from './pwa.module.css';

interface AlreadyInstalledModalProps {
  isOpen: boolean;
  onClose: () => void;
  shopName?: string;
  iconUrl?: string;
  onResetInstallState?: () => void;
}

export default function AlreadyInstalledModal({
  isOpen,
  onClose,
  shopName = 'ShopBig',
  iconUrl = '/icon-192.png',
  onResetInstallState,
}: AlreadyInstalledModalProps) {
  const [logTime, setLogTime] = useState('');

  useEffect(() => {
    if (isOpen) {
      const now = new Date();
      setLogTime(now.toLocaleTimeString('vi-VN') + ' ' + now.toLocaleDateString('vi-VN'));
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalSheet} onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className={styles.modalHeader}>
          <div className={styles.modalAppInfo}>
            <div className={styles.modalAppIcon} style={{ position: 'relative' }}>
              <Image
                src={iconUrl}
                alt={shopName}
                width={54}
                height={54}
                className={styles.modalAppImg}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: -2,
                  right: -2,
                  background: '#10b981',
                  borderRadius: '50%',
                  width: 18,
                  height: 18,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #181b26',
                  color: '#ffffff',
                }}
              >
                <FiCheckCircle size={12} />
              </div>
            </div>
            <div>
              <h3 className={styles.modalTitle}>Ứng dụng đã được cài đặt!</h3>
              <p className={styles.modalSubtitle} style={{ color: '#10b981', fontWeight: 600 }}>
                ✓ {shopName} đã có sẵn trên máy tính
              </p>
            </div>
          </div>
          <button
            type="button"
            className={styles.modalCloseBtn}
            onClick={onClose}
            aria-label="Đóng"
          >
            <FiX size={18} />
          </button>
        </div>

        {/* Thông báo mô tả */}
        <div
          style={{
            background: 'rgba(16, 185, 129, 0.12)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: 12,
            padding: '12px 14px',
            marginBottom: 16,
            display: 'flex',
            alignItems: 'flex-start',
            gap: 10,
          }}
        >
          <FiMonitor size={20} color="#10b981" style={{ flexShrink: 0, marginTop: 2 }} />
          <div style={{ fontSize: 13, color: '#e2e8f0', lineHeight: 1.45 }}>
            Bạn đã tải và cài đặt <strong>{shopName}</strong> trên thiết bị này rồi. Bạn không cần phải cài đặt lại!
          </div>
        </div>

        {/* Khung Log hiển thị trực quan ra màn hình */}
        <div style={{ marginBottom: 18 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 12,
              fontWeight: 700,
              color: '#94a3b8',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginBottom: 6,
            }}
          >
            <FiTerminal size={14} color="#38bdf8" />
            <span>Nhật ký trạng thái cài đặt (On-screen Log)</span>
          </div>

          <div
            style={{
              background: '#0a0d14',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 10,
              padding: '12px 14px',
              fontFamily: 'Consolas, Monaco, "Courier New", monospace',
              fontSize: 12,
              lineHeight: 1.6,
              color: '#94a3b8',
            }}
          >
            <div>
              <span style={{ color: '#64748b' }}>[{logTime || 'Vừa xong'}]</span>{' '}
              <span style={{ color: '#38bdf8' }}>[PWA STATUS]</span> Kiểm tra ứng dụng trên hệ điều hành...
            </div>
            <div>
              <span style={{ color: '#64748b' }}>[{logTime || 'Vừa xong'}]</span>{' '}
              <span style={{ color: '#10b981', fontWeight: 700 }}>[SUCCESS]</span>{' '}
              <span style={{ color: '#ffffff' }}>Ứng dụng:</span> {shopName} - Mua Sắm Vô Hạn
            </div>
            <div>
              <span style={{ color: '#64748b' }}>[{logTime || 'Vừa xong'}]</span>{' '}
              <span style={{ color: '#10b981', fontWeight: 700 }}>[INSTALLED]</span> Tình trạng:{' '}
              <strong style={{ color: '#10b981' }}>ĐÃ CÀI ĐẶT THÀNH CÔNG</strong>
            </div>
            <div>
              <span style={{ color: '#64748b' }}>[{logTime || 'Vừa xong'}]</span>{' '}
              <span style={{ color: '#f59e0b' }}>[LOCATION]</span> Vị trí: Desktop Shortcut, Windows Start Menu, Chrome Apps
            </div>
            <div>
              <span style={{ color: '#64748b' }}>[{logTime || 'Vừa xong'}]</span>{' '}
              <span style={{ color: '#a855f7' }}>[HINT]</span> Mở app bằng icon ngoài Desktop hoặc biểu tượng 💻 trên thanh URL
            </div>
          </div>
        </div>

        {/* Hành động */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <button type="button" className={styles.modalOkBtn} onClick={onClose}>
            Đã Hiểu (Đóng Thông Báo)
          </button>

          {onResetInstallState && (
            <button
              type="button"
              onClick={() => {
                onResetInstallState();
                onClose();
              }}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#94a3b8',
                padding: '8px 14px',
                borderRadius: 10,
                fontSize: 12,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
                transition: 'all 0.2s ease',
              }}
            >
              <FiRotateCcw size={13} />
              <span>Đặt lại trạng thái (Nếu bạn vừa gỡ app để test cài lại)</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
