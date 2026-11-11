# E-commerce UI Improvement – SamSam

## 1. Giới thiệu
Dự án minh họa cải tiến giao diện danh sách sản phẩm cho một cửa hàng thời trang trực tuyến mang tên SamSam. Mục tiêu là giúp khách hàng nhận biết tên sản phẩm, giá bán, giá gốc, mức giảm giá và nút thao tác nhanh hơn.

## 2. Website tham khảo
- Tên website: Shopee Việt Nam
- URL: https://shopee.vn/
- Khu vực đã khảo sát: Trang chủ, danh mục sản phẩm, chi tiết sản phẩm, tìm kiếm và giỏ hàng.
- Lưu ý: Các nhận xét khảo sát trong báo cáo cần được người thực hiện mở website kiểm tra lại tại thời điểm nộp vì giao diện và chức năng nền tảng có thể thay đổi.

## 3. Chức năng trong bản giao diện
- Hiển thị khu vực giới thiệu bộ sưu tập.
- Hiển thị tối thiểu 4 thẻ sản phẩm mẫu.
- Hiển thị tên, giá bán, giá gốc, tỷ lệ giảm giá và thông tin màu.
- Có nút thao tác “Thêm vào giỏ hàng” ở mức giao diện minh họa.
- Có bố cục responsive cho máy tính bảng và điện thoại.

## 4. Công nghệ
- HTML5
- CSS3

## 5. Cách chạy
Mở file `index.html` bằng Chrome hoặc trình duyệt hiện đại. Không cần cài backend, cơ sở dữ liệu hay chạy máy chủ.

## 6. Cải tiến đã thực hiện
Thẻ sản phẩm được tổ chức theo thứ tự: hình ảnh – nhãn sản phẩm – tên – giá bán – giá gốc/giảm giá – thông tin bổ sung – nút thao tác. CSS Grid và media query giúp số cột thay đổi theo chiều rộng màn hình.

## 7. Hỗ trợ từ AI
AI hỗ trợ xây dựng dàn ý phân tích, gợi ý bố cục và giải thích mã HTML/CSS. Người thực hiện cần tự mở trang, kiểm tra trên các kích thước màn hình, thay nội dung/hình ảnh nếu cần và ghi lại thay đổi thực tế trước khi nộp.


## Buổi 2 – HTML5 và CSS3

### Nội dung đã thực hiện
- Kế thừa website SamSam từ Buổi 1, giữ lại trang danh sách sản phẩm và phong cách giao diện hiện có.
- Bổ sung bốn trang chi tiết riêng: `product-1.html` đến `product-4.html`.
- Mỗi thẻ sản phẩm có liên kết **Xem chi tiết sản phẩm**; liên kết mở đúng trang tương ứng.
- Dùng các phần tử HTML5 có ngữ nghĩa: `header`, `nav`, `main`, `section`, `article`, `footer`.
- Bổ sung CSS cho bố cục chi tiết, Box Model, Flexbox/Grid, trạng thái `:hover` và `:focus-visible`, cùng media query cho màn hình nhỏ.

### Cách chạy
Mở `index.html` bằng trình duyệt hoặc dùng Live Server trong VS Code. Chọn **Xem chi tiết sản phẩm** ở một thẻ để mở trang riêng; dùng liên kết quay lại để trở về danh sách. Giữ nguyên các file HTML và `styles.css` trong cùng thư mục.

### Phạm vi và giới hạn
Đây là website tĩnh HTML/CSS. Tùy chọn kích cỡ chỉ là giao diện; nút thêm vào giỏ hàng chưa xử lý dữ liệu. Ảnh lấy từ URL ảnh mẫu đang có trong bài Buổi 1; giá, màu, size và mô tả là nội dung minh họa, cần xác nhận nếu dùng cho bán hàng thật.

### Kiểm tra giao diện đề xuất
Dùng Chrome DevTools (`F12` → `Ctrl + Shift + M`) kiểm tra độ rộng 1366px, 768px và 390px. Kiểm tra ảnh, liên kết đến đúng trang chi tiết, khả năng quay lại danh sách, bố cục không tràn ngang và trạng thái focus bằng phím Tab.
