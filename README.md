# Sàn Giáo Dục Thương Mại Điện Tử (FE AI Demo)

## Mô tả
Đây là dự án Front-end mô phỏng sàn giáo dục thương mại điện tử tích hợp AI, cho phép người dùng tìm kiếm, khám phá, yêu thích, xem chi tiết và nhận gợi ý thông minh các khoá học/sản phẩm giáo dục.

## Chức năng chính
- Hiển thị danh sách sản phẩm (mock data)
- Tìm kiếm, lọc giá sản phẩm
- Gợi ý thông minh (AI) dựa trên hành vi đã xem, đã thích
- Modal chi tiết sản phẩm (ảnh lớn, mô tả, đánh giá...)
- Đánh dấu yêu thích, trang riêng sản phẩm yêu thích
- Lịch sử xem sản phẩm
- Loading skeleton khi gọi API gợi ý
- Xử lý lỗi khi API fail (thông báo toast)
- Responsive, UI hiện đại, hiệu ứng mượt mà

## Công nghệ sử dụng
- React (create-react-app)
- useState, useEffect (quản lý state)
- Mock API (Promise, setTimeout)
- CSS thuần, responsive, hiệu ứng

## Hướng dẫn cài đặt & chạy
1. **Clone project:**
   ```bash
   git clone <link-repo>
   cd edu-commerce-ai
   ```
2. **Cài đặt dependencies:**
   ```bash
   npm install
   ```
3. **Chạy ứng dụng:**
   ```bash
   npm start
   ```
4. **Truy cập:**
   Mở trình duyệt tại [http://localhost:3000](http://localhost:3000)

## Điểm nổi bật
- Giao diện hiện đại, tối ưu UX/UI, responsive
- Gợi ý AI nâng cao dựa trên hành vi
- Toast thông báo, skeleton loading, modal đẹp
- Dễ dàng mở rộng thêm chức năng (giỏ hàng, đăng nhập...)

## Thư mục chính
- `src/components/` - Các component UI
- `src/pages/` - Các trang chính (Home, Favorites, History)
- `src/api/` - Mock API sản phẩm, gợi ý

---
**Tác giả:** Lương Đức Phú
