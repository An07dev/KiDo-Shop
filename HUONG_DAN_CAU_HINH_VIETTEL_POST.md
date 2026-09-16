# 📦 HƯỚNG DẪN CẤU HÌNH TÍCH HỢP VIETTEL POST (VTP)

Tài liệu này hướng dẫn chi tiết cách cấu hình kết nối tính cước và giao hàng tự động giữa website và hệ thống **Viettel Post (VTP)** qua API chính thức.

---

## 📌 1. Cơ Chế Hoạt Động & Bảo Mật

* Website kết nối với Viettel Post thông qua **API v2** (`partner.viettelpost.vn/v2`).
* Viettel Post sử dụng cơ chế xác thực **Token Secret**.
* **Bảo mật tuyệt đối**: Website **không yêu cầu** và **không lưu trữ mật khẩu** tài khoản Viettel Post của bạn. Mọi thao tác tính cước, đẩy đơn và tra cứu vận đơn đều thực hiện qua mã Token được Viettel Post cấp riêng.

---

## 🔑 2. Các Bước Lấy Token Secret Trên Viettel Post

1. **Bước 1**: Truy cập trang chủ Viettel Post: [https://viettelpost.vn](https://viettelpost.vn).
2. **Bước 2**: Đăng nhập vào tài khoản Viettel Post của bạn (bằng Số điện thoại hoặc Email).
3. **Bước 3**: Bấm vào ảnh đại diện / tên tài khoản ở góc trên bên phải màn hình ➔ Chọn mục **Cài đặt tài khoản**.
4. **Bước 4**: Tại menu bên trái, tìm và chọn mục **Quản lý token** (hoặc *Cấu hình API*).
5. **Bước 5**: Nhấn nút **Tạo mới token** hoặc bấm **Sao chép (Copy)** chuỗi mã Token Secret được hiển thị.

*(Mã Token là một chuỗi ký tự dài dùng để xác thực hệ thống).*

---

## ⚙️ 3. Điền Cấu Hình Vào Trang Quản Trị Website (Admin)

1. **Bước 1**: Mở trang Quản trị Admin website ➔ Chọn menu **Vận chuyển & Đơn vị giao hàng** (đường dẫn: `/admin/shipping`).
2. **Bước 2**: Tìm đến khung **Viettel Post (VTP)**:
   * **Bật công tắc**: Gạt sang `Bật` để cho phép khách hàng chọn Viettel Post khi thanh toán.
   * **Số điện thoại / Tài khoản (Username)**: Nhập số điện thoại tài khoản Viettel Post của bạn (ví dụ: `0364978796`).
   * **Mật khẩu Viettel Post**: Nhập mật khẩu tài khoản Viettel Post (để hệ thống tự động xác thực và cấp Token JWT chính thức qua `LoginVTP`).
   * **Token Secret Viettel Post**: Dán chuỗi mã Token vừa sao chép từ Viettel Post vào ô này.
   * **Môi trường**: Chọn `Production (Chính thức)`.
3. **Bước 3**: Nhấn nút **"Test API VTP"** (hoặc nút *Test kết nối VIETTELPOST* trong bảng chỉnh sửa):
   * Hệ thống sẽ tự động xác thực qua API `LoginVTP`, nhận Token JWT chính thức, kiểm tra danh sách kho hàng (`listInventory`) và tính thử cước bưu tá thực tế từ máy chủ Viettel Post.
   * Khi thông báo màu xanh hiển thị `✓ Kết nối Viettel Post (VTP) thành công!` tức là cấu hình đã sẵn sàng.
4. **Bước 4**: Nhấn nút **"Lưu Cấu Hình Vào Database"** để hoàn tất cài đặt.

---

## 🚚 4. Cấu Hình Kho Hàng & Tính Cước Khách Hàng

### A. Địa chỉ kho gửi hàng của Shop
Tại mục **"Cấu hình địa chỉ lấy hàng (Kho gửi)"** ở đầu trang `/admin/shipping`:
* Chọn đúng **Tỉnh / Thành phố**, **Quận / Huyện**, **Phường / Xã** nơi đặt kho hàng của bạn.
* Viettel Post sẽ dựa vào địa chỉ này để tính cước phí chính xác tới địa chỉ nhận hàng của khách.

### B. Bảng giá & Dịch vụ ngoài trang Khách hàng (Checkout)
Khi khách hàng chọn địa chỉ nhận hàng tại trang Thanh toán / Giỏ hàng, hệ thống tự động truy vấn cước bưu tá trực tiếp:
* **Gói Tiết kiệm (VBS)**: Cước tối ưu, thời gian giao 2 - 4 ngày.
* **Gói Nhanh (VCN)**: Giao tiêu chuẩn, thời gian 1 - 2 ngày.
* **Gói Hỏa tốc (VHT)**: Giao nhanh trong 24h.

---

## ❓ 5. Câu Hỏi Thường Gặp & Xử Lý Sự Cố

### Q1: Khi nào cần cập nhật lại Token?
* Khi Viettel Post hết hạn token hoặc bạn bấm nút làm mới Token trên trang `viettelpost.vn`. Khi đó, bạn chỉ cần vào lại `viettelpost.vn` sao chép Token mới và dán lại vào Admin website rồi bấm Lưu.

### Q2: Vì sao không cần nhập Mật khẩu?
* Viettel Post quy định tài khoản cá nhân / chủ shop sử dụng Token Secret để tích hợp an toàn mà không cần chia sẻ mật khẩu tài khoản cho bất kỳ ai.

### Q3: Muốn tắt tạm thời Viettel Post thì làm thế nào?
* Bạn chỉ cần gạt công tắc bật/tắt của Viettel Post sang màu xám tại trang `/admin/shipping` và bấm Lưu. Khách hàng sẽ chỉ thấy các hãng vận chuyển khác (GHN, GHTK, Ship tiêu chuẩn).
