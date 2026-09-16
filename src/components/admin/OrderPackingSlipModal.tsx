'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  FiPrinter,
  FiX,
  FiCheckCircle,
  FiPackage,
  FiMapPin,
  FiExternalLink,
  FiZoomIn,
  FiZoomOut,
  FiChevronLeft,
  FiChevronRight,
  FiEye,
  FiEyeOff,
  FiFileText,
  FiCheck,
  FiCopy,
} from 'react-icons/fi';
import toast from 'react-hot-toast';
import { formatPrice, formatDate } from '@/lib/utils';
import { generateBarcodeSVG } from '@/lib/barcode';
import { formatVariantDisplay } from '@/lib/variant-helper';
import { useTheme } from '@/contexts/ThemeContext';
import { apiFetch } from '@/lib/api';
import styles from './OrderPackingSlipModal.module.css';

interface OrderPackingSlipModalProps {
  orders: any[];
  onClose: () => void;
  warehouseConfig?: any;
}

// Format full warehouse origin address string
const formatWarehouseAddress = (origin?: any) => {
  if (!origin) return 'Số 10 Phạm Hùng, Nam Từ Liêm, Hà Nội';
  const parts: string[] = [];
  if (origin.address) parts.push(origin.address.trim());
  if (origin.ward) parts.push(origin.ward.trim());
  if (origin.district) parts.push(origin.district.trim());
  if (origin.province) parts.push(origin.province.trim());

  if (parts.length === 0) return 'Số 10 Phạm Hùng, Nam Từ Liêm, Hà Nội';

  // Prevent duplicate tokens if address field already contains full string
  if (origin.address && parts.length > 1) {
    const raw = origin.address.toLowerCase();
    const cleanParts = [origin.address.trim()];
    if (origin.ward && !raw.includes(origin.ward.toLowerCase().trim())) {
      cleanParts.push(origin.ward.trim());
    }
    if (origin.district && !raw.includes(origin.district.toLowerCase().trim())) {
      cleanParts.push(origin.district.trim());
    }
    if (origin.province && !raw.includes(origin.province.toLowerCase().trim())) {
      cleanParts.push(origin.province.trim());
    }
    return cleanParts.join(', ');
  }

  return parts.join(', ');
};

// Format customer recipient address string
const formatCustomerAddress = (customer?: any) => {
  if (!customer) return 'Địa chỉ nhận hàng';
  const parts: string[] = [];
  if (customer.address) parts.push(customer.address.trim());
  if (customer.ward) parts.push(customer.ward.trim());
  if (customer.district) parts.push(customer.district.trim());
  const prov = customer.province || customer.city;
  if (prov) parts.push(prov.trim());

  if (parts.length === 0) return 'Địa chỉ nhận hàng';

  // Check if main address already has ward / district / province to prevent duplicate text
  if (customer.address && parts.length > 1) {
    const raw = customer.address.toLowerCase();
    const cleanParts = [customer.address.trim()];
    if (customer.ward && !raw.includes(customer.ward.toLowerCase().trim())) {
      cleanParts.push(customer.ward.trim());
    }
    if (customer.district && !raw.includes(customer.district.toLowerCase().trim())) {
      cleanParts.push(customer.district.trim());
    }
    if (prov && !raw.includes(prov.toLowerCase().trim())) {
      cleanParts.push(prov.trim());
    }
    return cleanParts.join(', ');
  }

  return parts.join(', ');
};

// Format carrier display name
const getCarrierDisplayName = (order: any) => {
  const carrier = (order.shippingCarrier || order.shippingProvider || '').toLowerCase();
  if (carrier.includes('ghn')) return 'GIAO HÀNG NHANH (GHN)';
  if (carrier.includes('ghtk')) return 'GIAO HÀNG TIẾT KIỆM (GHTK)';
  if (carrier.includes('viettel') || carrier.includes('vtp')) return 'VIETTEL POST';
  if (order.shippingCarrier) return String(order.shippingCarrier).toUpperCase();
  if (order.shippingProvider) return String(order.shippingProvider).toUpperCase();
  return 'GIAO HÀNG TIÊU CHUẨN';
};

export default function OrderPackingSlipModal({
  orders,
  onClose,
  warehouseConfig,
}: OrderPackingSlipModalProps) {
  if (!orders || orders.length === 0) return null;

  const { theme } = useTheme();
  const [originAddress, setOriginAddress] = useState<any>(
    warehouseConfig?.originAddress || null
  );

  // Workstation Interactive Settings
  const [zoom, setZoom] = useState<number>(100);
  const [showPrices, setShowPrices] = useState<boolean>(true);
  const [showNotes, setShowNotes] = useState<boolean>(true);
  const [copies, setCopies] = useState<number>(1);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [viewAll, setViewAll] = useState<boolean>(orders.length <= 3);
  const [isPrinting, setIsPrinting] = useState<boolean>(false);

  // Fetch real-time warehouse origin address configured in Shipping settings
  useEffect(() => {
    if (warehouseConfig?.originAddress) {
      setOriginAddress(warehouseConfig.originAddress);
      return;
    }

    let isMounted = true;
    const fetchShippingConfig = async () => {
      try {
        const res = await apiFetch('/api/shipping/config');
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.data?.originAddress && isMounted) {
            setOriginAddress(json.data.originAddress);
          }
        }
      } catch (err) {
        console.error('Error fetching shipping warehouse config:', err);
      }
    };

    fetchShippingConfig();
    return () => {
      isMounted = false;
    };
  }, [warehouseConfig]);

  // Derived Shop & Sender details
  const shopDisplayName =
    theme?.pageTitles?.logoText ||
    originAddress?.name?.replace(/ - Kho.*$/i, '') ||
    'ShopBig Store';
  const shopHotline = originAddress?.phone || '0364978796';
  const shopDomain =
    typeof window !== 'undefined'
      ? window.location.host.includes('localhost')
        ? 'www.shopbig.vn'
        : window.location.host
      : 'www.shopbig.vn';

  const senderName = originAddress?.name || shopDisplayName;
  const senderPhone = originAddress?.phone || shopHotline;
  const senderAddress = formatWarehouseAddress(originAddress);

  // Build Standalone HTML for Isolated Iframe Printing (Guarantees 100% Non-blank Print)
  const generatePrintHTML = useCallback(() => {
    // Generate slips for target orders, multiplied by copies
    const targetOrders = orders;

    let slipsHtml = '';
    targetOrders.forEach((order, orderIdx) => {
      const barcodeSvg = generateBarcodeSVG(order.orderCode || `ST${orderIdx}`, 36, 180);
      const items = order.items || [];
      const totalQty = items.reduce(
        (sum: number, it: any) => sum + (it.quantity || 1),
        0
      );
      const isPaid = order.paymentStatus === 'paid';
      const carrierDisplayName = getCarrierDisplayName(order);
      const customerAddress = formatCustomerAddress(order.customer);

      const rowsHtml =
        items.length === 0
          ? `<tr><td colspan="${showPrices ? 5 : 3}" style="text-align:center; padding: 6px;">Không có thông tin sản phẩm</td></tr>`
          : items
              .map((item: any, idx: number) => {
                const variant = formatVariantDisplay(item);
                const itemTotal = (item.price || 0) * (item.quantity || 1);
                return `
                <tr>
                  <td style="text-align: center; border: 1px solid #000; padding: 4px 5px;">${idx + 1}</td>
                  <td style="border: 1px solid #000; padding: 4px 6px;">
                    <div style="font-weight: 700;">${item.name}</div>
                    ${variant ? `<div style="font-size: 9px; color: #333; background: #f1f5f9; display: inline-block; padding: 1px 4px; border-radius: 2px; margin-top: 1px;">Phân loại: ${variant}</div>` : ''}
                  </td>
                  <td style="text-align: center; font-weight: 800; border: 1px solid #000; padding: 4px 5px;">${item.quantity || 1}</td>
                  ${
                    showPrices
                      ? `
                    <td style="text-align: right; border: 1px solid #000; padding: 4px 6px;">${formatPrice(item.price || 0)}</td>
                    <td style="text-align: right; font-weight: 700; border: 1px solid #000; padding: 4px 6px;">${formatPrice(itemTotal)}</td>
                  `
                      : ''
                  }
                </tr>
              `;
              })
              .join('');

      const orderNotesHtml = order.notes
        ? `<div>• ${order.notes}</div>`
        : '<div style="color: #555;">• Giao giờ hành chính, gọi trước khi giao.</div>';

      const pickNoteHtml = originAddress?.pickNote
        ? `<div style="color: #333; margin-top: 2px; font-size: 8.5px;">• Lưu ý kho: ${originAddress.pickNote}</div>`
        : '';

      const singleSlipTemplate = `
        <div class="slip-page">
          <!-- 1. Header with Shop Brand & Barcode -->
          <div class="slip-header">
            <div class="brand-info">
              <div class="shop-name">${shopDisplayName}</div>
              <div class="shop-details">Hotline: ${shopHotline} • ${shopDomain}</div>
              <div class="shop-warehouse">Kho gửi: ${senderAddress}</div>
            </div>

            <div class="barcode-area">
              <div class="barcode-svg">${barcodeSvg}</div>
              <div class="order-date">Ngày đặt: ${formatDate(order.createdAt || new Date())}</div>
            </div>
          </div>

          <!-- 2. Sender & Recipient 2-Column Grid -->
          <div class="grid-sender-recipient">
            <div class="address-box">
              <div class="box-title">📤 Người gửi</div>
              <div class="person-name">${senderName}</div>
              <div class="person-phone">📞 ${senderPhone}</div>
              <div class="person-address">${senderAddress}</div>
            </div>

            <div class="address-box">
              <div class="box-title">📥 Người nhận</div>
              <div class="person-name">${order.customer?.name || 'Khách hàng'}</div>
              <div class="person-phone">📞 ${order.customer?.phone || ''}</div>
              <div class="person-address">${customerAddress}</div>
            </div>
          </div>

          <!-- 3. Carrier Strip -->
          <div class="carrier-bar">
            <div>ĐVVC: <span class="carrier-tag">${carrierDisplayName}</span></div>
            ${order.trackingCode ? `<div style="font-size: 10px;">Mã vận đơn: <strong>${order.trackingCode}</strong></div>` : ''}
            <div style="font-size: 9.5px; color: #333;">Phân loại: <strong>${totalQty} món</strong></div>
          </div>

          <!-- 4. Products Table -->
          <table class="items-table">
            <thead>
              <tr>
                <th style="width: 24px; text-align: center;">STT</th>
                <th>Tên sản phẩm & Phân loại</th>
                <th style="width: 35px; text-align: center;">SL</th>
                ${
                  showPrices
                    ? `
                  <th style="width: 65px; text-align: right;">Đơn giá</th>
                  <th style="width: 75px; text-align: right;">Thành tiền</th>
                `
                    : ''
                }
              </tr>
            </thead>
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>

          <!-- 5. Summary & COD Amount -->
          <div class="summary-section">
            <div class="notes-box">
              <div class="notes-title">📌 Ghi chú giao hàng:</div>
              <div style="font-weight: 700; color: #b45309; margin-bottom: 2px;">• CHO XEM HÀNG, KHÔNG CHO THỬ</div>
              ${showNotes ? orderNotesHtml : ''}
              ${showNotes ? pickNoteHtml : ''}
            </div>

            <div class="cod-card">
              ${
                !showPrices
                  ? `
                  <div style="font-size: 10.5px; font-weight: 800; color: #0284c7;">ĐÓNG GÓI KIỂM HÀNG</div>
                  <div style="font-size: 9px; color: #555; margin-top: 2px;">Tổng số lượng: ${totalQty} món</div>
                `
                  : isPaid
                  ? `
                  <div class="paid-stamp">✓ ĐÃ THANH TOÁN</div>
                  <div style="font-size: 9.5px; color: #15803d; margin-top: 2px; font-weight: 700;">KHÔNG THU TIỀN (0 ₫)</div>
                `
                  : `
                  <div class="cod-label">Tiền Thu Hộ (COD)</div>
                  <div class="cod-amount">${formatPrice(order.totalAmount || 0)}</div>
                  <div style="font-size: 8.5px; color: #475569;">(Đã gồm tiền hàng + ship)</div>
                `
              }
            </div>
          </div>

          <!-- 6. Footer & Signatures -->
          <div class="slip-footer">
            <div>
              <div>🛡️ <strong>Chính sách đổi trả:</strong> Đổi size miễn phí trong 7 ngày.</div>
              <div>Cảm ơn quý khách đã mua sắm tại <strong>${shopDisplayName}</strong>!</div>
            </div>

            <div class="signature-area">
              <div>Chữ ký người nhận</div>
              <div class="signature-line">(Ký và ghi rõ họ tên)</div>
            </div>
          </div>
        </div>
      `;

      // Repeat for copies
      for (let c = 0; c < copies; c++) {
        slipsHtml += singleSlipTemplate;
      }
    });

    return `
      <!DOCTYPE html>
      <html lang="vi">
      <head>
        <meta charset="UTF-8">
        <title>In Phiếu Đóng Hàng A6</title>
        <style>
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background: #ffffff;
            color: #000000;
            font-size: 11px;
            line-height: 1.35;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .slip-page {
            width: 100mm;
            min-height: 145mm;
            max-width: 100mm;
            margin: 0 auto 0 auto;
            padding: 6mm 5mm;
            background: #ffffff;
            page-break-after: always;
            break-after: page;
          }
          .slip-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            border-bottom: 2px solid #000000;
            padding-bottom: 6px;
            margin-bottom: 6px;
          }
          .shop-name {
            font-size: 13px;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .shop-details {
            font-size: 9.5px;
            color: #222;
            margin-top: 1px;
          }
          .shop-warehouse {
            font-size: 8.5px;
            color: #333;
            margin-top: 2px;
            line-height: 1.25;
          }
          .barcode-area {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            max-width: 160px;
          }
          .barcode-svg svg {
            width: 145px;
            height: 36px;
            display: block;
          }
          .order-date {
            font-size: 8.5px;
            color: #444;
            margin-top: 2px;
          }
          .grid-sender-recipient {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 6px;
            border-bottom: 1px solid #000000;
            padding-bottom: 6px;
            margin-bottom: 6px;
          }
          .box-title {
            font-size: 10px;
            font-weight: 800;
            text-transform: uppercase;
            border-bottom: 1px solid #ccc;
            padding-bottom: 2px;
            margin-bottom: 2px;
          }
          .person-name {
            font-weight: 700;
            font-size: 11px;
          }
          .person-phone {
            font-weight: 800;
            font-size: 11.5px;
          }
          .person-address {
            font-size: 9.5px;
            color: #111;
            margin-top: 1px;
            line-height: 1.25;
          }
          .carrier-bar {
            background: #f1f5f9;
            border: 1px solid #000000;
            padding: 3px 6px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 10px;
            font-weight: 700;
            margin-bottom: 6px;
          }
          .carrier-tag {
            text-transform: uppercase;
            font-weight: 800;
          }
          .items-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 6px;
            font-size: 9.5px;
          }
          .items-table th, .items-table td {
            border: 1px solid #000000;
            padding: 3px 5px;
          }
          .items-table th {
            background: #e2e8f0;
            font-weight: 800;
            text-transform: uppercase;
            font-size: 9px;
          }
          .summary-section {
            display: grid;
            grid-template-columns: 1.2fr 1fr;
            gap: 6px;
            border-top: 1px solid #000000;
            padding-top: 5px;
            margin-bottom: 6px;
          }
          .notes-box {
            border: 1px dashed #000000;
            padding: 4px 6px;
            font-size: 9px;
            background: #fffbeb;
          }
          .notes-title {
            font-weight: 800;
            text-transform: uppercase;
            font-size: 8.5px;
            margin-bottom: 2px;
          }
          .cod-card {
            border: 2px solid #000000;
            padding: 5px 6px;
            text-align: center;
            background: #f8fafc;
          }
          .cod-label {
            font-size: 9.5px;
            font-weight: 800;
            text-transform: uppercase;
          }
          .cod-amount {
            font-size: 15px;
            font-weight: 900;
            color: #000000;
            margin: 1px 0;
          }
          .paid-stamp {
            border: 2px solid #16a34a;
            color: #16a34a;
            font-size: 12px;
            font-weight: 900;
            text-transform: uppercase;
            padding: 2px 5px;
            display: inline-block;
            border-radius: 3px;
          }
          .slip-footer {
            border-top: 1px solid #000000;
            padding-top: 5px;
            display: flex;
            justify-content: space-between;
            font-size: 8.5px;
            color: #333;
          }
          .signature-area {
            text-align: center;
            width: 120px;
          }
          .signature-line {
            margin-top: 24px;
            border-top: 1px dotted #666;
            padding-top: 1px;
            font-style: italic;
            font-size: 8px;
          }
          @page {
            size: 100mm 150mm;
            margin: 0;
          }
        </style>
      </head>
      <body>
        ${slipsHtml}
      </body>
      </html>
    `;
  }, [orders, showPrices, showNotes, copies, shopDisplayName, shopHotline, shopDomain, senderName, senderPhone, senderAddress, originAddress]);

  const handlePrint = useCallback(() => {
    try {
      setIsPrinting(true);
      const existingIframe = document.getElementById('print-slip-iframe');
      if (existingIframe) {
        existingIframe.remove();
      }

      const printIframe = document.createElement('iframe');
      printIframe.id = 'print-slip-iframe';
      printIframe.style.position = 'fixed';
      printIframe.style.right = '0';
      printIframe.style.bottom = '0';
      printIframe.style.width = '0';
      printIframe.style.height = '0';
      printIframe.style.border = 'none';
      printIframe.style.visibility = 'hidden';
      document.body.appendChild(printIframe);

      const doc = printIframe.contentWindow?.document;
      if (doc) {
        doc.open();
        doc.write(generatePrintHTML());
        doc.close();

        printIframe.contentWindow?.focus();
        setTimeout(() => {
          printIframe.contentWindow?.print();
          setIsPrinting(false);
          setTimeout(() => {
            const el = document.getElementById('print-slip-iframe');
            if (el) el.remove();
          }, 3000);
        }, 400);
      }
    } catch (e) {
      console.error('Error opening print iframe:', e);
      setIsPrinting(false);
      window.print();
    }
  }, [generatePrintHTML]);

  // Keyboard Shortcuts (Ctrl+P to print, Esc to close)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if ((e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 'P')) {
        e.preventDefault();
        handlePrint();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, handlePrint]);

  // Filter orders to render in preview
  const previewOrders = viewAll ? orders : [orders[currentIdx] || orders[0]];

  // Active order summary for footer
  const activeOrder = orders[currentIdx] || orders[0];
  const totalItemsCount = orders.reduce(
    (sum, o) => sum + (o.items || []).reduce((s: number, it: any) => s + (it.quantity || 1), 0),
    0
  );
  const totalOrdersAmount = orders.reduce((sum, o) => sum + (o.totalAmount || 0), 0);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* =========================================================
            1. TOP HEADER
            ========================================================= */}
        <div className={styles.header}>
          <div className={styles.titleArea}>
            <div className={styles.iconWrapper}>
              <FiPrinter />
            </div>
            <div>
              <div className={styles.titleRow}>
                <h2 className={styles.title}>
                  In Phiếu Đóng Hàng
                </h2>
                {orders.length === 1 ? (
                  <span className={styles.orderBadge}>#{orders[0]?.orderCode}</span>
                ) : (
                  <span className={styles.orderBadge}>{orders.length} Đơn Hàng</span>
                )}
                <span className={styles.paperBadge}>Khổ A6 (100×150mm)</span>
              </div>
              <p className={styles.subtitle}>
                Tương thích máy in nhiệt Xprinter, HPRT, Gprinter, Giao Hàng Nhanh
              </p>
            </div>
          </div>

          <div className={styles.headerActions}>
            <button
              type="button"
              className={styles.btnPrintHeader}
              onClick={handlePrint}
              title="Nhấn để in hoặc bấm phím tắt Ctrl + P"
              disabled={isPrinting}
            >
              <FiPrinter /> {isPrinting ? 'Đang gửi...' : `In ngay (${orders.length * copies} liên)`}
              <span className={styles.kbdHint}>Ctrl+P</span>
            </button>
            <button
              type="button"
              className={styles.btnClose}
              onClick={onClose}
              title="Đóng (Esc)"
            >
              <FiX />
            </button>
          </div>
        </div>

        {/* =========================================================
            2. DYNAMIC WAREHOUSE ORIGIN ADDRESS BAR
            ========================================================= */}
        <div className={styles.warehouseBar}>
          <div className={styles.warehouseInfo}>
            <FiMapPin className={styles.warehousePinIcon} />
            <span className={styles.warehouseLabel}>Điểm lấy hàng:</span>
            <span className={styles.warehouseValue}>
              <strong>{senderName}</strong> — {senderAddress}
            </span>
            {senderPhone && (
              <span className={styles.warehousePhone}>• SĐT: {senderPhone}</span>
            )}
          </div>
          <Link
            href="/admin/shipping"
            target="_blank"
            className={styles.warehouseLink}
            title="Xem và chỉnh sửa địa chỉ kho trong Cấu hình Vận chuyển"
          >
            <FiExternalLink size={12} /> Cấu hình kho
          </Link>
        </div>

        {/* =========================================================
            3. WORKSTATION TOOLBAR (OPTIONS & CONTROLS)
            ========================================================= */}
        <div className={styles.toolbar}>
          {/* Options Toggles */}
          <div className={styles.toolbarGroup}>
            <span className={styles.toolbarLabel}>Tùy chọn in:</span>

            <button
              type="button"
              className={`${styles.toggleBtn} ${showPrices ? styles.activeToggle : ''}`}
              onClick={() => setShowPrices(!showPrices)}
              title="Hiển thị hoặc ẩn giá tiền trên phiếu đóng hàng"
            >
              {showPrices ? <FiEye size={13} /> : <FiEyeOff size={13} />}
              <span>Hiển thị giá</span>
            </button>

            <button
              type="button"
              className={`${styles.toggleBtn} ${showNotes ? styles.activeToggle : ''}`}
              onClick={() => setShowNotes(!showNotes)}
              title="Hiển thị hoặc ẩn ghi chú khách hàng và lưu ý kho"
            >
              <FiFileText size={13} />
              <span>Ghi chú</span>
            </button>

            <div className={styles.segmentedControl}>
              <button
                type="button"
                className={`${styles.segmentItem} ${copies === 1 ? styles.activeSegment : ''}`}
                onClick={() => setCopies(1)}
              >
                1 Liên
              </button>
              <button
                type="button"
                className={`${styles.segmentItem} ${copies === 2 ? styles.activeSegment : ''}`}
                onClick={() => setCopies(2)}
              >
                2 Liên
              </button>
            </div>
          </div>

          {/* Batch Order Navigation */}
          {orders.length > 1 && (
            <div className={styles.toolbarGroup}>
              <div className={styles.segmentedControl}>
                <button
                  type="button"
                  className={`${styles.segmentItem} {!viewAll ? styles.activeSegment : ''}`}
                  onClick={() => setViewAll(false)}
                >
                  Xem từng đơn
                </button>
                <button
                  type="button"
                  className={`${styles.segmentItem} {viewAll ? styles.activeSegment : ''}`}
                  onClick={() => setViewAll(true)}
                >
                  Xem tất cả ({orders.length})
                </button>
              </div>

              {!viewAll && (
                <div className={styles.orderPagination}>
                  <button
                    type="button"
                    className={styles.pageNavBtn}
                    onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))}
                    disabled={currentIdx === 0}
                    title="Đơn hàng trước"
                  >
                    <FiChevronLeft />
                  </button>
                  <span className={styles.pageIndicator}>
                    {currentIdx + 1} / {orders.length}
                  </span>
                  <button
                    type="button"
                    className={styles.pageNavBtn}
                    onClick={() => setCurrentIdx(Math.min(orders.length - 1, currentIdx + 1))}
                    disabled={currentIdx === orders.length - 1}
                    title="Đơn hàng kế tiếp"
                  >
                    <FiChevronRight />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Zoom Controls */}
          <div className={styles.toolbarGroup}>
            <span className={styles.toolbarLabel}>Thu phóng:</span>
            <div className={styles.zoomControls}>
              <button
                type="button"
                className={styles.zoomBtn}
                onClick={() => setZoom(Math.max(75, zoom - 15))}
                disabled={zoom <= 75}
                title="Thu nhỏ"
              >
                <FiZoomOut />
              </button>
              <span className={styles.zoomText}>{zoom}%</span>
              <button
                type="button"
                className={styles.zoomBtn}
                onClick={() => setZoom(Math.min(125, zoom + 15))}
                disabled={zoom >= 125}
                title="Phóng to"
              >
                <FiZoomIn />
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================
            4. WORKSPACE DESK AREA (A6 THERMAL PREVIEW)
            ========================================================= */}
        <div className={styles.workspace}>
          <div
            className={styles.paperWrapper}
            style={{ transform: `scale(${zoom / 100})` }}
          >
            {previewOrders.map((order, orderIdx) => {
              const barcodeSvg = generateBarcodeSVG(order.orderCode || `ST${orderIdx}`, 36, 180);
              const items = order.items || [];
              const totalQty = items.reduce(
                (sum: number, it: any) => sum + (it.quantity || 1),
                0
              );
              const isPaid = order.paymentStatus === 'paid';
              const carrierDisplayName = getCarrierDisplayName(order);
              const customerAddress = formatCustomerAddress(order.customer);

              return (
                <div
                  key={order._id || orderIdx}
                  className={styles.slipPaper}
                  style={{ marginBottom: previewOrders.length > 1 ? 32 : 0 }}
                >
                  {/* 1. Header with Shop Brand & Barcode */}
                  <div className={styles.slipHeader}>
                    <div className={styles.brandInfo}>
                      <div className={styles.shopName}>
                        <span style={{ fontSize: 16 }}>🏪</span>
                        {shopDisplayName}
                      </div>
                      <div className={styles.shopDetails}>
                        Hotline: {shopHotline} • {shopDomain}
                      </div>
                      <div className={styles.shopWarehouse}>
                        Kho gửi: {senderAddress}
                      </div>
                    </div>

                    <div className={styles.barcodeArea}>
                      <div
                        className={styles.barcodeSvg}
                        dangerouslySetInnerHTML={{ __html: barcodeSvg }}
                      />
                      <div className={styles.orderDateTag}>
                        Ngày đặt: {formatDate(order.createdAt || new Date())}
                      </div>
                    </div>
                  </div>

                  {/* 2. Sender & Recipient 2-Column Grid */}
                  <div className={styles.gridSenderRecipient}>
                    <div className={styles.addressBox}>
                      <div className={styles.boxTitle}>
                        <span>📤 Người gửi</span>
                      </div>
                      <div className={styles.personName}>{senderName}</div>
                      <div className={styles.personPhone}>📞 {senderPhone}</div>
                      <div className={styles.personAddress}>
                        {senderAddress}
                      </div>
                    </div>

                    <div className={styles.addressBox}>
                      <div className={styles.boxTitle}>
                        <span>📥 Người nhận</span>
                      </div>
                      <div className={styles.personName}>
                        {order.customer?.name || 'Khách hàng'}
                      </div>
                      <div className={styles.personPhone}>
                        📞 {order.customer?.phone || ''}
                      </div>
                      <div className={styles.personAddress}>
                        {customerAddress}
                      </div>
                    </div>
                  </div>

                  {/* 3. Carrier Strip */}
                  <div className={styles.shippingCarrierBar}>
                    <div>
                      ĐVVC: <span className={styles.carrierTag}>{carrierDisplayName}</span>
                    </div>
                    {order.trackingCode && (
                      <div style={{ fontSize: 10 }}>
                        Mã vận đơn: <strong>{order.trackingCode}</strong>
                      </div>
                    )}
                    <div style={{ fontSize: 9.5, color: '#334155' }}>
                      Phân loại: <strong>{totalQty} món</strong>
                    </div>
                  </div>

                  {/* 4. Products Table */}
                  <table className={styles.itemsTable}>
                    <thead>
                      <tr>
                        <th style={{ width: 24 }} className={styles.textCenter}>STT</th>
                        <th>Tên sản phẩm & Phân loại</th>
                        <th style={{ width: 35 }} className={styles.textCenter}>SL</th>
                        {showPrices && (
                          <>
                            <th style={{ width: 68 }} className={styles.textRight}>Đơn giá</th>
                            <th style={{ width: 78 }} className={styles.textRight}>Thành tiền</th>
                          </>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {items.length === 0 ? (
                        <tr>
                          <td colSpan={showPrices ? 5 : 3} className={styles.textCenter}>
                            Không có thông tin sản phẩm
                          </td>
                        </tr>
                      ) : (
                        items.map((item: any, itemIdx: number) => {
                          const variant = formatVariantDisplay(item);
                          const itemTotal = (item.price || 0) * (item.quantity || 1);

                          return (
                            <tr key={itemIdx}>
                              <td className={styles.textCenter}>{itemIdx + 1}</td>
                              <td>
                                <div style={{ fontWeight: 700 }}>{item.name}</div>
                                {variant && (
                                  <div className={styles.itemVariantTag}>
                                    Phân loại: {variant}
                                  </div>
                                )}
                              </td>
                              <td className={styles.textCenter}>
                                <span className={styles.qtyBadge}>{item.quantity || 1}</span>
                              </td>
                              {showPrices && (
                                <>
                                  <td className={styles.textRight}>
                                    {formatPrice(item.price || 0)}
                                  </td>
                                  <td className={styles.textRight} style={{ fontWeight: 700 }}>
                                    {formatPrice(itemTotal)}
                                  </td>
                                </>
                              )}
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>

                  {/* 5. Summary & COD Amount */}
                  <div className={styles.summarySection}>
                    <div className={styles.notesBox}>
                      <div className={styles.notesTitle}>📌 Ghi chú giao hàng:</div>
                      <div style={{ fontWeight: 700, color: '#b45309', marginBottom: 2 }}>
                        • CHO XEM HÀNG, KHÔNG CHO THỬ
                      </div>
                      {showNotes && order.notes && (
                        <div>• {order.notes}</div>
                      )}
                      {showNotes && !order.notes && (
                        <div style={{ color: '#666' }}>• Giao giờ hành chính, gọi trước khi giao.</div>
                      )}
                      {showNotes && originAddress?.pickNote && (
                        <div style={{ color: '#334155', marginTop: 2, fontSize: '9px' }}>
                          • Lưu ý kho: {originAddress.pickNote}
                        </div>
                      )}
                    </div>

                    <div className={styles.codCard}>
                      {!showPrices ? (
                        <div>
                          <div style={{ fontSize: 11, fontWeight: 800, color: '#0284c7' }}>
                            ĐÓNG GÓI KIỂM HÀNG
                          </div>
                          <div style={{ fontSize: 9.5, color: '#475569', marginTop: 3 }}>
                            Tổng số lượng: <strong>{totalQty} món</strong>
                          </div>
                        </div>
                      ) : isPaid ? (
                        <div>
                          <div className={styles.paidStamp}>✓ ĐÃ THANH TOÁN</div>
                          <div style={{ fontSize: 9.5, color: '#15803d', marginTop: 2, fontWeight: 700 }}>
                            KHÔNG THU TIỀN (0 ₫)
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className={styles.codLabel}>Tiền Thu Hộ (COD)</div>
                          <div className={styles.codAmount}>
                            {formatPrice(order.totalAmount || 0)}
                          </div>
                          <div style={{ fontSize: 8.5, color: '#475569' }}>
                            (Đã bao gồm tiền hàng + cước ship)
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 6. Footer & Signatures */}
                  <div className={styles.slipFooter}>
                    <div>
                      <div>🛡️ <strong>Chính sách đổi trả:</strong> Đổi size miễn phí trong 7 ngày.</div>
                      <div>Cảm ơn quý khách đã mua sắm tại <strong>{shopDisplayName}</strong>!</div>
                    </div>

                    <div className={styles.signatureArea}>
                      <div>Chữ ký người nhận</div>
                      <div className={styles.signatureLine}>(Ký và ghi rõ họ tên)</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            5. FOOTER BAR (SUMMARY & ACTIONS)
            ========================================================= */}
        <div className={styles.footerBar}>
          <div className={styles.footerSummary}>
            <span className={styles.summaryPill}>
              Đơn hàng: <strong>{orders.length}</strong>
            </span>
            <span className={styles.summaryPill}>
              Tổng sản phẩm: <strong>{totalItemsCount} món</strong>
            </span>
            {showPrices && (
              <span className={styles.summaryPill}>
                Tổng giá trị: <strong>{formatPrice(totalOrdersAmount)}</strong>
              </span>
            )}
            <span className={styles.summaryPill}>
              Bản in: <strong>{orders.length * copies} trang A6</strong>
            </span>
          </div>

          <div className={styles.footerActions}>
            <button
              type="button"
              className={styles.btnCancel}
              onClick={onClose}
            >
              Đóng (Esc)
            </button>
            <button
              type="button"
              className={styles.btnPrintPrimary}
              onClick={handlePrint}
              disabled={isPrinting}
            >
              <FiPrinter /> {isPrinting ? 'Đang gửi lệnh in...' : `In ngay (${orders.length * copies} bản)`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
