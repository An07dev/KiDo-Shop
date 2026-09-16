# 📋 CHANGELOG - TỔNG HỢP CÁC THAY ĐỔI ĐÃ THỰC HIỆN

> **Tài liệu này tổng hợp 100% các file đã chỉnh sửa, thêm mới và xóa bỏ để bạn có thể sao chép / clone chính xác vào project chính.**

---

## 📑 MỤC LỤC
1. [Hệ Thống Bản Quyền (License System) & Webhook SePay](#1-hệ-thống-bản-quyền-license-system--webhook-sepay)
2. [Chuẩn Hóa Font Chữ Toàn Bộ Hệ Thống (Plus Jakarta Sans)](#2-chuẩn-hóa-font-chữ-toàn-bộ-hệ-thống-plus-jakarta-sans)
3. [Tối Ưu Giao Diện & Header (Checkout, Cart, Product, Order-Success)](#3-tối-ưu-giao-diện--header-checkout-cart-product-order-success)
4. [Tích Hợp PWA (Progressive Web App - Ghim App Lên Màn Hình)](#4-tích-hợp-pwa-progressive-web-app---ghim-app-lên-màn-hình)
5. [Danh Sách Tất Cả Các File Thay Đổi (File Diff Stat)](#5-danh-sách-tất-cả-các-file-thay-đổi-file-diff-stat)

---

## 1. Hệ Thống Bản Quyền (License System) & Webhook SePay

### 🔹 Vấn Đề Trước Đây
- Khi cấp phát bản quyền lần đầu qua endpoint provisioning / setup hoặc kích hoạt CSDL riêng, trường `status` bị gán là `"activated"`.
- Trong khi đó, Model Schema, bảng quản trị `/master/licenses` và các API thống kê đều quy định trạng thái hoạt động là `"active"`. Điều này gây ra lệch trạng thái (badge không hiện đúng, bộ lọc đếm sai).

### 🔹 Các Thay Đổi Chi Tiết

#### 1.1. Model Schema: `src/models/License.ts`
- Mở rộng kiểu dữ liệu `status` và `enum` Mongoose:
  ```typescript
  // Trước: enum: ['available', 'active', 'revoked']
  // Sau:
  status: 'available' | 'active' | 'activated' | 'revoked';
  enum: ['available', 'active', 'activated', 'revoked']
  ```
  *(Vừa chuẩn hóa `active`, vừa giữ tương thích ngược nếu còn bản ghi cũ).*

#### 1.2. Thư Viện Quản Lý Bản Quyền: `src/lib/license-manager.ts`
- **Hàm `validateAndConsumeLicense`**:
  - Khi xác thực và cấp CSDL lần đầu cho shop, sửa `$set: { status: 'active' }` (thay vì `'activated'`).
  - Điều kiện Atomic CAS update được mở rộng để chấp nhận cả key có `status: 'available'` hoặc `status: 'active'` (khi vừa mua qua SePay nhưng chưa gắn `assignedDb`):
    ```typescript
    {
      licenseKey: key,
      $or: [
        { status: 'available' },
        { status: 'active', assignedDb: null },
        { status: 'activated', assignedDb: null },
      ],
    }
    ```
  - Khi key đã được kích hoạt và đã có `assignedDb`, cho phép khôi phục / đồng bộ kết nối bình thường mà không ghi đè lỗi.
- **Hàm `reactivateLicense`**:
  - Khi mở khóa lại license, cập nhật `$set: { status: 'active', updatedAt: new Date() }`.
- **Cập nhật Types**:
  - `LicenseRecord` và `LicenseCheckResult` cho phép `shopName?: string | null`, `assignedDb?: string | null` để tránh lỗi TypeScript khi query MongoDB.

#### 1.3. SePay Webhook: `src/app/api/webhooks/sepay/route.ts`
- Khi khách hàng thanh toán thành công trên Landing Page qua SePay, mã bản quyền mới sinh ra được gán trực tiếp:
  ```typescript
  status: 'active', // Trạng thái ban đầu khi mua thành công
  ```

#### 1.4. Master License API: `src/app/api/master/licenses/route.ts`
- `countDocuments` cho số lượng active tính cả `'active'` và `'activated'`:
  ```typescript
  License.countDocuments({ status: { $in: ['active', 'activated'] } })
  ```
- Bộ lọc `filter.status = status === 'active' ? { $in: ['active', 'activated'] } : status;`.

#### 1.5. Master License Delete API: `src/app/api/master/licenses/[id]/route.ts`
- Chặn xóa nếu key đang active (`license.status === 'active' || license.status === 'activated'`).

#### 1.6. Master License Dashboard: `src/app/master/licenses/page.tsx`
- Badge **🟢 Đang hoạt động** hiển thị chuẩn xác cho cả `active` và `activated`.
- Nút xóa chỉ hiển thị cho key chưa kích hoạt.

#### 1.7. CLI Quản Trị: `scripts/license-cli.js`
- Cập nhật lệnh `list` và lệnh `unrevoke / reactivate` sang trạng thái `active`.

#### 1.8. Dữ Liệu Thực Tế MongoDB
- Đã chạy cập nhật trên Master MongoDB (`webstore._system_licenses`), toàn bộ bản ghi cũ (bao gồm `AFF-8GUU-0U7M-C4AD`) đã chuyển sang `status: "active"`.

---

## 2. Chuẩn Hóa Font Chữ Toàn Bộ Hệ Thống (Plus Jakarta Sans)

### 🔹 Mục Tiêu
- Loại bỏ hoàn toàn tình trạng font chữ không đồng nhất, lỗi vỡ font tiếng Việt trên các trình duyệt Windows / Android / iOS.
- Áp dụng font **Plus Jakarta Sans** (Google Fonts) làm font chính thức toàn web.

### 🔹 Các File Đã Thay Đổi
- **`src/app/layout.tsx`**:
  - Nạp font `Plus_Jakarta_Sans` từ `next/font/google` với `subsets: ['latin', 'vietnamese']`, biến CSS `--font-jakarta`.
  - Thiết lập font class cho `<body>`: `className={`${jakarta.variable} font-sans`}`.
- **`src/app/globals.css`**:
  - Cấu hình font stack toàn diện:
    ```css
    :root {
      --font-family: var(--font-jakarta), 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    }
    body, input, button, select, textarea {
      font-family: var(--font-family);
    }
    ```
- **Đồng bộ trên tất cả CSS Modules**:
  - `src/app/(store)/cart/page.module.css`
  - `src/app/(store)/checkout/page.module.css`
  - `src/app/(store)/order-success/page.module.css`
  - `src/app/(store)/payment/page.module.css`
  - `src/app/(store)/product/[slug]/page.module.css`
  - `src/app/(store)/product/[slug]/reviews/page.module.css`
  - `src/app/(store)/profile/page.module.css`
  - `src/app/(store)/tracking/page.module.css`
  - `src/app/master/licenses/master.module.css`
  - `src/components/admin/OrderPackingSlipModal.module.css`
  - `src/components/store/CartDrawer.module.css`
  - `src/components/store/CheckoutVoucherModal.module.css`
  - `src/components/store/ProductDetailModal.module.css`
  - `src/components/store/VoucherCollectionBar.module.css`
  - `src/components/store/home/*.module.css` (FlashSale, HeroBanner, HomeCategory, Recommended, TopBestSellers).

---

## 3. Tối Ưu Giao Diện & Header (Checkout, Cart, Product, Order-Success)

### 3.1. Trang Thanh Toán ([`src/app/(store)/checkout/`](file:///c:/Users/PC/Desktop/New%20folder/shop-landing/webbanhang/src/app/(store)/checkout))
- **Header Thanh Toán Mới**:
  - Bỏ nút "Trang chủ". Tiêu đề **"Thanh Toán Đơn Hàng"** được căn chính giữa.
  - Tích hợp **Nút quay lại (Back button)** góc trái.
  - Tích hợp **Breadcrumb bước 2 (Giỏ hàng -> Thanh toán -> Hoàn tất)** và **Đồng hồ đếm ngược giữ hàng** ngay trên thanh header.
  - Bỏ phần thông báo "Bảo mật 256-bit" rườm rà.
  - Bo tròn góc thanh header: `border-radius: 16px` (hoặc `20px`) sang trọng.

### 3.2. Trang Giỏ Hàng ([`src/app/(store)/cart/`](file:///c:/Users/PC/Desktop/New%20folder/shop-landing/webbanhang/src/app/(store)/cart))
- Thêm thanh header đồng bộ với nút quay lại, tiêu đề **"Giỏ Hàng"** căn giữa.
- Chuẩn hóa layout và font chữ cho toàn bộ bảng sản phẩm giỏ hàng.

### 3.3. Trang Đặt Hàng Thành Công ([`src/app/(store)/order-success/`](file:///c:/Users/PC/Desktop/New%20folder/shop-landing/webbanhang/src/app/(store)/order-success))
- Gỡ bỏ dòng breadcrumb thừa bên dưới thanh header (`[Trang Chủ]/Đặt Hàng Thành Công`).
- Tinh chỉnh header và typography cho trải nghiệm đơn giản, trang nhã.

### 3.4. Trang Chi Tiết Sản Phẩm ([`src/app/(store)/product/[slug]/`](file:///c:/Users/PC/Desktop/New%20folder/shop-landing/webbanhang/src/app/(store)/product/[slug]))
- Bỏ mục "Trang chủ" trên header chi tiết sản phẩm.
- Tên sản phẩm được đưa ra chính giữa thanh header kèm nút quay lại.

---

## 4. Tích Hợp PWA (Progressive Web App - Ghim App Lên Màn Hình)

Hệ thống được bổ sung khả năng cài đặt PWA hoàn chỉnh cho thiết bị di động (Android, iOS) và máy tính (Windows, Mac):

### 4.1. File Cấu Hình & Tài Nguyên PWA (Mới)
- **`src/app/manifest.ts`**: Cấu hình Manifest tự động cho Next.js App Router (`standalone`, màu theme `#ee4d2d`, start_url `/demo`).
- **`public/manifest.json`**: File JSON dự phòng tương thích mọi trình duyệt cũ.
- **`public/sw.js`**: Service Worker tự động cache tài nguyên tĩnh, tối ưu tốc độ và hỗ trợ offline.
- **Bộ Icon Chuẩn**:
  - `public/icon-192.png` (192x192)
  - `public/icon-512.png` (512x512)
  - `public/icon-maskable.png` (512x512 adaptive an toàn cho Android)
  - `public/apple-touch-icon.png` (180x180 cho iOS Safari)
- **`scripts/generate-pwa-icons.js`**: Script tạo bộ icon tự động từ logo.

### 4.2. Components & Hooks PWA (Mới)
- **`src/hooks/usePWAInstall.ts`**: Hook bắt sớm sự kiện `beforeinstallprompt`, kiểm tra trạng thái cài đặt và nền tảng thiết bị.
- **`src/components/pwa/AdminPWAInstallButton.tsx`**: Nút **"Ghim App"** trên thanh header quản trị (`src/app/admin/layout.tsx`).
  - Chưa cài: Nhấp vào bật hộp thoại cài đặt của trình duyệt.
  - Đã cài: Nhấp vào hiển thị thông báo đã cài app mà không bật popup phiền phức.
- **`src/components/pwa/DesktopInstallModal.tsx`**: Hướng dẫn cài đặt trên máy tính (Chrome / Edge).
- **`src/components/pwa/IOSInstallModal.tsx`**: Hướng dẫn 3 bước ghim ra MH chính trên iPhone Safari ("Thêm vào MH chính").
- **`src/components/pwa/ServiceWorkerRegister.tsx`**: Tự động đăng ký Service Worker khi tải trang.
- **Storefront**: Gỡ bỏ hoàn toàn banner/nút tải app ở giao diện khách mua hàng để giữ trải nghiệm mua sắm sạch sẽ, tập trung.

---

## 5. Danh Sách Tất Cả Các File Thay Đổi (File Diff Stat)

### 📁 Files Sửa Đổi (Modified):
1. `src/models/License.ts` *(Mở rộng enum status active/activated)*
2. `src/lib/license-manager.ts` *(validateAndConsumeLicense, reactivateLicense, status active)*
3. `src/app/api/webhooks/sepay/route.ts` *(Tạo license status active)*
4. `src/app/api/master/licenses/route.ts` *(Bộ lọc & đếm license active)*
5. `src/app/api/master/licenses/[id]/route.ts` *(Bảo vệ xóa license active)*
6. `src/app/master/licenses/page.tsx` *(Badge hoạt động & hiển thị)*
7. `src/app/master/licenses/master.module.css` *(Font Plus Jakarta Sans)*
8. `scripts/license-cli.js` *(CLI hiển thị & cập nhật active)*
9. `src/app/layout.tsx` *(Nạp font Google Plus Jakarta Sans & viewport PWA)*
10. `src/app/globals.css` *(Font-family hệ thống)*
11. `src/app/(store)/checkout/page.tsx` & `page.module.css` *(Header bo góc, breadcrumb, đếm ngược, bỏ bảo mật 256-bit)*
12. `src/app/(store)/cart/page.tsx` & `page.module.css` *(Header giỏ hàng đồng bộ, font chữ)*
13. `src/app/(store)/order-success/page.tsx` & `page.module.css` *(Bỏ breadcrumb thừa, font chữ)*
14. `src/app/(store)/product/[slug]/page.tsx` & `page.module.css` *(Header chi tiết sản phẩm căn giữa)*
15. `src/app/(store)/product/[slug]/reviews/page.module.css`
16. `src/app/(store)/payment/page.tsx` & `page.module.css`
17. `src/app/(store)/profile/page.module.css`
18. `src/app/(store)/tracking/page.module.css`
19. `src/app/(store)/demo/page.module.css`
20. `src/app/3d-demo/page.tsx`
21. `src/app/admin/layout.tsx` & `layout.module.css` *(Tích hợp nút Ghim App Admin)*
22. `src/components/admin/OrderPackingSlipModal.tsx` & `.module.css`
23. `src/components/store/CartDrawer.module.css`
24. `src/components/store/CheckoutVoucherModal.module.css`
25. `src/components/store/ProductDetailModal.module.css`
26. `src/components/store/VoucherCollectionBar.module.css`
27. `src/components/store/home/StoreHeader.tsx`
28. `src/components/store/home/TopBestSellersSection.tsx` & `.module.css`
29. `src/components/store/home/FlashSaleSection.module.css`
30. `src/components/store/home/HeroBannerCarousel.module.css`
31. `src/components/store/home/HomeCategoryShowcase.module.css`
32. `src/components/store/home/RecommendedProductScroller.module.css`
33. `src/lib/email.ts`
34. `public/apple-touch-icon.png`

### 📁 Files Tạo Mới (New Untracked Files):
1. `src/app/manifest.ts`
2. `public/manifest.json`
3. `public/sw.js`
4. `public/icon-192.png`
5. `public/icon-512.png`
6. `public/icon-maskable.png`
7. `scripts/generate-pwa-icons.js`
8. `src/hooks/usePWAInstall.ts`
9. `src/components/pwa/AdminPWAInstallButton.tsx`
10. `src/components/pwa/AlreadyInstalledModal.tsx`
11. `src/components/pwa/DesktopInstallModal.tsx`
12. `src/components/pwa/IOSInstallModal.tsx`
13. `src/components/pwa/PWAHeaderButton.tsx`
14. `src/components/pwa/PWAInstallBanner.tsx`
15. `src/components/pwa/ServiceWorkerRegister.tsx`
16. `src/components/pwa/pwa.module.css`

---

## 6. Hướng Dẫn Clone / Copy 100% Sang Project Chính

Bạn có thể áp dụng theo 1 trong 3 cách dưới đây tùy theo môi trường làm việc của bạn:

### 🔹 Cách 1: Sử Dụng Git Patch (`update_changes.patch`) - Nhanh và Chuẩn Xác Nhất
File patch `update_changes.patch` đã được tạo sẵn ở thư mục gốc, chứa 100% các file sửa đổi và file mới:
```bash
# Đứng tại thư mục project chính của bạn và chạy:
git apply update_changes.patch

# Kiểm tra trạng thái các file sau khi apply:
git status
```
*(Nếu muốn kiểm tra trước khi apply: `git apply --check update_changes.patch`)*

---

### 🔹 Cách 2: Sử Dụng File Nén Toàn Bộ Source (`project_source.zip`)
File nén `project_source.zip` (~33MB) đã được đóng gói sẵn toàn bộ mã nguồn sạch (đã loại bỏ `node_modules`, `.git`, `.next`):
1. Copy file `project_source.zip` vào thư mục project chính.
2. Giải nén ghi đè (Overwrite all) trực tiếp vào thư mục gốc của project chính.
3. Chạy `npm install` (nếu có thêm dependency mới, hiện tại các dependency đều dùng chuẩn sẵn có).

---

### 🔹 Cách 3: Tạo Git Commit Trên Nhánh Này & Merge Sang `main`
Nếu project chính của bạn cùng nằm trong Git repo này:
```bash
# 1. Thêm toàn bộ các file thay đổi
git add .

# 2. Tạo commit
git commit -m "feat: chuan hoa license active, font Jakarta Sans, toi uu header va tich hop PWA"

# 3. Chuyển sang nhánh main và merge
git checkout main
git merge deploytest1

# 4. Đẩy lên remote repository
git push origin main
```

---

### 🔹 LƯU Ý QUAN TRỌNG VỀ DATABASE (MongoDB)
Nếu CSDL MongoDB của bạn đang có các bản ghi license cũ mang trạng thái `"activated"`, hãy chạy lệnh sau để đồng bộ sang `"active"`:

**Cách 1: Chạy trực tiếp qua Mongo Shell / MongoDB Compass:**
```javascript
// Database: webstore (hoặc database chứa bảng licenses)
db.licenses.updateMany(
  { status: "activated" },
  { $set: { status: "active", updatedAt: new Date() } }
);
```

**Cách 2: Kiểm tra qua CLI:**
```bash
npm run license:list
```

---

### 🔹 Kiểm Tra & Xác Thực Lại Sau Khi Clone
```bash
# 1. Kiểm tra không có lỗi TypeScript
npx tsc --noEmit

# 2. Kiểm tra build ứng dụng
npm run build
```
*(Toàn bộ mã nguồn đã được kiểm tra nghiêm ngặt `npx tsc --noEmit` đạt 0 lỗi).*

