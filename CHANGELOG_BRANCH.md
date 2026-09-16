# TỔNG HỢP TẤT CẢ CÁC THAY ĐỔI TRÊN NHÁNH `deploytest1`
> **Mục đích**: Tài liệu chi tiết danh sách file và tính năng đã thay đổi để phục vụ việc review và merge vào nhánh chính (`main`).

---

## I. TÓM TẮT CÁC TÍNH NĂNG MỚI & CẢI TIẾN CHÍNH

1. **Hiển thị Banner Phụ trên Mobile ([demo/page.tsx](file:///c:/Users/PC/Desktop/New%20folder/shop-landing/webbanhang/src/app/(store)/demo/page.tsx) & [page.module.css](file:///c:/Users/PC/Desktop/New%20folder/shop-landing/webbanhang/src/app/(store)/demo/page.module.css))**:
   - Vị trí: Đặt ngay bên dưới khối "Gợi ý dành cho bạn" (`RecommendedProductScroller`) trên tab Trang chủ mobile.
   - Bố cục: Mỗi ảnh chiếm **1 hàng riêng biệt (100% full width)**, xếp chồng dọc với khoảng cách đệm `10px`.
   - Tỷ lệ khung ảnh: Chuẩn **`16 / 9`** kết hợp **`min-height: 195px`**, hình ảnh to rõ, không bị ép dẹt.
   - Gradient & Typography: Phủ gradient đen mờ đáy `32px`, nhãn tag khuyến mãi nổi bật và tiêu đề sắc nét.
   - Tương tác: Chạm vào banner tự động chuyển hướng theo liên kết cấu hình hoặc danh sách sản phẩm.

2. **Thanh Danh Mục Mobile với nút "Xem thêm ▾" ([demo/page.tsx](file:///c:/Users/PC/Desktop/New%20folder/shop-landing/webbanhang/src/app/(store)/demo/page.tsx))**:
   - Tự động tính toán số lượng tab danh mục vừa vặn với chiều rộng màn hình thiết bị.
   - Các danh mục vượt quá độ rộng tự động gom vào nút dropdown **"Xem thêm ▾"**.
   - Bấm vào mở menu danh sách thả xuống, chọn danh mục sẽ đánh dấu tích (✓) và lọc sản phẩm mượt mà.

3. **Khối Cuộn Ngang "Gợi ý dành cho bạn" ([RecommendedProductScroller.tsx](file:///c:/Users/PC/Desktop/New%20folder/shop-landing/webbanhang/src/components/store/home/RecommendedProductScroller.tsx))**:
   - Tự động chọn lọc và xếp hạng các sản phẩm có % giảm giá (sale) cao nhất.
   - Cho phép cuộn ngang lướt nhanh sản phẩm, kèm nút thêm nhanh vào giỏ hàng (`quickAdd`).

4. **Nút Cuộn Về Đầu Trang Mượt Mà ([ScrollToTopButton.tsx](file:///c:/Users/PC/Desktop/New%20folder/shop-landing/webbanhang/src/components/store/ScrollToTopButton.tsx))**:
   - Tự động hiện mượt mà khi người dùng cuộn màn hình xuống quá `250px`.
   - Nhấn 1 chạm sẽ cuộn êm (`smooth scroll`) về đầu trang.
   - Tọa độ được thiết kế thông minh xếp ngay trên bong bóng chat:
     - Mobile: `bottom: 154px; right: 18px;`
     - Desktop: `bottom: 88px; right: 26px;`
     - Không bị che khuất hay đè lên `ChatFloatingWidget`.

5. **Màn hình Chờ Tải Trang Xe Tải Chuyển Động ([StoreLoading.tsx](file:///c:/Users/PC/Desktop/New%20folder/shop-landing/webbanhang/src/components/store/StoreLoading.tsx))**:
   - Animation SVG xe tải giao hàng sống động (Uiverse Truck Delivery Animation).
   - Chỉ đóng màn hình chờ khi API theme đã tải hoàn tất (`isLoading = false` từ `ThemeContext`), tránh giật layout hay hiện nội dung thô.

6. **Giữ và Tối Ưu Widget Chat Nổi ([ChatFloatingWidget.tsx](file:///c:/Users/PC/Desktop/New%20folder/shop-landing/webbanhang/src/components/store/ChatFloatingWidget.tsx) & [layout.tsx](file:///c:/Users/PC/Desktop/New%20folder/shop-landing/webbanhang/src/app/(store)/layout.tsx))**:
   - Gắn lại `<ChatFloatingWidget />` ở layout store (hỗ trợ socket realtime, AI bot, gửi ảnh, đếm tin nhắn chưa đọc).
   - Nâng tọa độ đáy trên mobile lên `96px` (cách xa thanh menu đáy, bấm thoải mái không chạm nhầm).
   - Xóa bỏ nút chat thừa `shopeeFloatingChatBtn` trong `demo/page.tsx` để tránh hiển thị 2 nút chat trùng lặp.

7. **Sửa Lỗi Nút "Đã Lưu" Thẻ Giảm Giá ([VoucherCollectionBar.tsx](file:///c:/Users/PC/Desktop/New%20folder/shop-landing/webbanhang/src/components/store/VoucherCollectionBar.tsx))**:
   - Lưu trạng thái voucher đã lưu vào `localStorage`.
   - Sau khi lưu: nút đổi trạng thái thành "Đã lưu", làm mờ và vô hiệu hóa click lặp lại, hiển thị toast thông báo chuẩn.

---

## II. DANH SÁCH CHI TIẾT CÁC TẬP TIN THAY ĐỔI

### 1. Files Mới Tạo (Untracked Files Cần `git add`)
| Đường dẫn File | Mô tả |
|---|---|
| `src/components/store/ScrollToTopButton.tsx` | Component nút tròn cuộn mượt mà về đầu trang khi scroll > 250px |
| `src/components/store/ScrollToTopButton.module.css` | CSS căn chỉnh tọa độ, hiệu ứng fade-in/transform và dark mode cho nút cuộn |
| `src/components/store/home/RecommendedProductScroller.tsx` | Component thanh trượt sản phẩm gợi ý sale khủng nhất |
| `src/components/store/home/RecommendedProductScroller.module.css` | CSS thẻ sản phẩm gợi ý, nhãn giảm giá và thanh cuộn ngang |
| `src/components/store/home/HorizontalRecommendedSection.tsx` | Component phụ trợ khối gợi ý ngang |
| `src/components/store/home/HorizontalRecommendedSection.module.css` | CSS khối gợi ý ngang |
| `src/components/store/home/HomeCategoryShowcase.module.css` | CSS khối danh mục showcase |
| `public/uploads/*` (3 file ảnh) | Ảnh logo và banner test đã upload |

---

### 2. Files Chỉnh Sửa (Modified Files)

#### A. Giao diện Store & Demo
- **`src/app/(store)/layout.tsx`**:
  - Gắn component `StoreLoading` khi `isLoading = true`.
  - Gắn `<ScrollToTopButton />`.
  - Giữ lại `<ChatFloatingWidget />`.
- **`src/app/(store)/demo/page.tsx`**:
  - Thêm logic tính toán danh mục mobile tràn và dropdown "Xem thêm ▾".
  - Thêm khối `<RecommendedProductScroller />` dưới voucher.
  - Thêm khối `mobileSubBannersSection` (banner phụ mobile xếp dọc mỗi ảnh 1 hàng).
  - Xóa nút chat thừa `shopeeFloatingChatBtn`.
- **`src/app/(store)/demo/page.module.css`**:
  - CSS dropdown menu "Xem thêm ▾".
  - CSS `mobileSubBannersSection`, `mobileSubBannersList`, `mobileSubBannerCard`, `mobileSubBannerImgWrap` (tỷ lệ 16/9, min-height 195px).
  - Xóa CSS thừa của `shopeeFloatingChatBtn`.
- **`src/app/(store)/layout.module.css`**:
  - Tinh chỉnh padding và responsive container.
- **`src/app/(store)/product/[slug]/page.tsx`**:
  - Tinh chỉnh giao diện chi tiết sản phẩm.
- **`src/app/(store)/tracking/page.module.css`**:
  - Tinh chỉnh trang theo dõi đơn hàng.

#### B. Components Cửa Hàng
- **`src/components/store/ChatFloatingWidget.tsx`**:
  - Cập nhật vị trí mặc định mobile `defaultY` lên 96px, `maxY` 80px.
  - Thêm chống giật hiển thị trước khi tính toán tọa độ (`opacity: position ? 1 : 0`).
- **`src/components/store/StoreLoading.tsx` & `.module.css`**:
  - Tích hợp SVG animation xe tải giao hàng, hiệu ứng khói và bóng đổ.
- **`src/components/store/VoucherCollectionBar.tsx` & `.module.css`**:
  - Sửa lỗi nút đã lưu, lưu trữ vào localStorage, thông báo toast.
- **`src/components/store/BottomNav.tsx` & `.module.css`**:
  - Tinh chỉnh ẩn hiện menu đáy theo cấu hình.
- **`src/components/store/home/StoreHeader.tsx`**:
  - Đồng bộ màu sắc thương hiệu `primaryBg`, `buttonRadius` từ ThemeContext.
- **`src/components/store/home/ShopProfileCard.tsx`**:
  - Đồng bộ 2 nút hành động "Theo Dõi Đơn" và "Chat".
- **`src/components/store/home/HeroBannerCarousel.tsx` & `.module.css`**:
  - Tinh chỉnh hiển thị carousel banner chính và banner phụ desktop.
- **`src/components/store/home/FlashSaleSection.tsx` & `.module.css`**:
  - Tối ưu thanh đếm giờ flash sale và carousel sản phẩm giảm giá sốc.
- **`src/components/store/home/TopBestSellersSection.module.css`**:
  - Tinh chỉnh khối sản phẩm bán chạy.
- **`src/components/store/home/HomeCategoryShowcase.tsx`**:
  - Tinh chỉnh danh sách danh mục hiển thị.

#### C. Backend & Admin Settings
- **`src/app/admin/settings/page.tsx`**:
  - Hỗ trợ quản lý, tải lên, xóa và sắp xếp thứ tự các banner phụ (`subBanners`).
- **`src/contexts/ThemeContext.tsx`**:
  - Bổ sung cấu hình `subBanners`, `defaultSubBanners` và quản lý trạng thái tải theme `isLoading`.
- **`src/app/api/setup/provision/route.ts`**:
  - Cập nhật endpoint setup database và cấu hình ban đầu.
- **`src/app/api/system/db-status/route.ts`**:
  - Cập nhật kiểm tra trạng thái kết nối database.
- **`src/components/common/BannerNotice.tsx` & `.module.css`**:
  - Tinh chỉnh banner thông báo hệ thống.
- **`src/components/common/DatabaseSetupBanner.tsx`**:
  - Tinh chỉnh cảnh báo cấu hình database.
- **`src/lib/license-manager.ts`**:
  - Tinh chỉnh kiểm tra bản quyền.

---

## III. HƯỚNG DẪN CÁC BƯỚC MERGE VÀO NHÁNH CHÍNH (`main`)

### Cách 1: Tạo commit trên nhánh hiện tại rồi merge vào `main` (Khuyên dùng)
```bash
# 1. Kiểm tra trạng thái
git status

# 2. Thêm tất cả file đã sửa và file mới
git add .

# 3. Tạo commit ghi rõ nội dung thay đổi
git commit -m "feat(store): toi uu giao dien mobile, banner phu, nut cuon trang va truck loading animation"

# 4. Chuyển sang nhánh main
git checkout main

# 5. Kéo code mới nhất của main (nếu có làm việc nhóm)
git pull origin main

# 6. Merge nhánh deploytest1 vào main
git merge deploytest1

# 7. (Tùy chọn) Đẩy lên remote repository
git push origin main
```

### Cách 2: Sử dụng Squash Merge nếu muốn gom thành 1 commit duy nhất
```bash
git checkout main
git merge --squash deploytest1
git commit -m "feat: cap nhat toan bo giao dien store mobile va banner phu"
```
