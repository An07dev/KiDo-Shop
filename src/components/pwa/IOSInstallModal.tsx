'use client';

import React from 'react';
import Image from 'next/image';
import { FiX, FiShare, FiPlusSquare, FiCheck, FiArrowDown } from 'react-icons/fi';
import styles from './pwa.module.css';

interface IOSInstallModalProps {
  isOpen: boolean;
  onClose: () => void;
  shopName?: string;
  iconUrl?: string;
}

export default function IOSInstallModal({
  isOpen,
  onClose,
  shopName = 'ShopBig',
  iconUrl = '/icon-192.png',
}: IOSInstallModalProps) {
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
              <h3 className={styles.modalTitle}>Cài đặt {shopName}</h3>
              <p className={styles.modalSubtitle}>Ghim ra màn hình chính iPhone / iPad</p>
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

        <div className={styles.stepList}>
          <div className={styles.stepItem}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepText}>
              Nhấn vào biểu tượng <strong>Chia sẻ (Share)</strong> ở thanh dưới cùng Safari.
            </div>
            <div className={styles.stepIcon}>
              <FiShare size={20} />
            </div>
          </div>

          <div className={styles.stepItem}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepText}>
              Cuộn xuống và chọn <strong>&quot;Thêm vào Màn hình chính&quot;</strong> (Add to Home Screen).
            </div>
            <div className={styles.stepIcon}>
              <FiPlusSquare size={20} />
            </div>
          </div>

          <div className={styles.stepItem}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepText}>
              Nhấn <strong>&quot;Thêm&quot; (Add)</strong> ở góc trên bên phải để hoàn tất cài đặt.
            </div>
            <div className={styles.stepIcon}>
              <FiCheck size={20} />
            </div>
          </div>
        </div>

        <div className={styles.modalBottomBar}>
          <div className={styles.iosPointerNotice}>
            <FiArrowDown size={16} />
            <span>Nút chia sẻ ở ngay phía dưới thanh công cụ Safari</span>
          </div>
          <button type="button" className={styles.modalOkBtn} onClick={onClose}>
            Đã hiểu
          </button>
        </div>
      </div>
    </div>
  );
}
