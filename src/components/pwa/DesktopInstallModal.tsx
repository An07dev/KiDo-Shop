'use client';

import React from 'react';
import Image from 'next/image';
import { FiX, FiMonitor, FiMoreVertical, FiPlusCircle, FiCheck, FiInfo, FiRefreshCw } from 'react-icons/fi';
import styles from './pwa.module.css';

interface DesktopInstallModalProps {
  isOpen: boolean;
  onClose: () => void;
  shopName?: string;
  iconUrl?: string;
  hasDeferredPrompt: boolean;
  onRetryPrompt?: () => void;
  onResetState?: () => void;
}

export default function DesktopInstallModal({
  isOpen,
  onClose,
  shopName = 'ShopBig',
  iconUrl = '/icon-192.png',
  hasDeferredPrompt,
  onRetryPrompt,
  onResetState,
}: DesktopInstallModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalSheet} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div className={styles.modalAppInfo}>
            <div className={styles.modalAppIcon}>
              <Image
                src={iconUrl}
                alt={shopName}
                width={54}
                height={54}
                className={styles.modalAppImg}
              />
            </div>
            <div>
              <h3 className={styles.modalTitle}>Cài đặt {shopName} trên PC</h3>
              <p className={styles.modalSubtitle}>Ghim ra Desktop &amp; Taskbar Windows</p>
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

        {hasDeferredPrompt ? (
          <div style={{ marginBottom: 16 }}>
            <p style={{ fontSize: 13, color: '#94a3b8', margin: '0 0 12px 0' }}>
              Trình duyệt đã sẵn sàng mở hộp thoại cài đặt. Nhấn nút bên dưới để ghim app ra Desktop:
            </p>
            <button
              type="button"
              className={styles.modalOkBtn}
              onClick={() => {
                if (onRetryPrompt) onRetryPrompt();
                onClose();
              }}
            >
              Mở Hộp Thoại Cài Đặt Ngay
            </button>
          </div>
        ) : (
          <>
            <div style={{
              background: 'rgba(238, 77, 45, 0.1)',
              border: '1px solid rgba(238, 77, 45, 0.25)',
              borderRadius: 10,
              padding: '10px 12px',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 16,
              fontSize: 12,
              color: '#ff9478'
            }}>
              <FiInfo size={16} style={{ flexShrink: 0 }} />
              <span>
                Trình duyệt Chrome / Edge yêu cầu kích hoạt cài đặt qua thanh địa chỉ hoặc Menu. Hãy làm theo 2 bước bên dưới:
              </span>
            </div>

            <div className={styles.stepList}>
              <div className={styles.stepItem}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepText}>
                  Nhìn sang góc phải của <strong>thanh địa chỉ URL (Address Bar)</strong> và nhấp vào biểu tượng <strong>Cài đặt Ứng dụng (⊕ hoặc 💻)</strong>.
                </div>
                <div className={styles.stepIcon}>
                  <FiPlusCircle size={20} color="#38bdf8" />
                </div>
              </div>

              <div className={styles.stepItem}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepText}>
                  <strong>Hoặc:</strong> Bấm vào menu <strong>3 dấu chấm (⋮ hoặc ⋯)</strong> ở góc trên bên phải trình duyệt &rarr; chọn <strong>&quot;Ứng dụng&quot; (Apps)</strong> &rarr; <strong>&quot;Cài đặt {shopName}&quot;</strong>.
                </div>
                <div className={styles.stepIcon}>
                  <FiMoreVertical size={20} color="#38bdf8" />
                </div>
              </div>

              <div className={styles.stepItem}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepText}>
                  Nhấn <strong>&quot;Cài đặt&quot; (Install)</strong> trong hộp thoại xác nhận để app được ghim ra Desktop &amp; Taskbar.
                </div>
                <div className={styles.stepIcon}>
                  <FiCheck size={20} color="#10b981" />
                </div>
              </div>
            </div>

            <div className={styles.modalBottomBar} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
              {onResetState && (
                <button
                  type="button"
                  onClick={() => {
                    onResetState();
                    onClose();
                  }}
                  style={{
                    background: 'transparent',
                    border: '1px dashed #64748b',
                    color: '#94a3b8',
                    padding: '8px 12px',
                    borderRadius: 8,
                    fontSize: 12,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    transition: 'all 0.2s',
                  }}
                  title="Xóa cache lưu trạng thái nếu bạn vừa gỡ app"
                >
                  <FiRefreshCw size={13} />
                  <span>Xóa cache cài lại</span>
                </button>
              )}
              <button type="button" className={styles.modalOkBtn} onClick={onClose}>
                Đã Hiểu
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
