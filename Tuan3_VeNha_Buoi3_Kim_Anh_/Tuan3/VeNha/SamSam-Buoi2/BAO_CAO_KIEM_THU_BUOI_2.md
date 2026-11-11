# Báo cáo kiểm thử – Buổi 2

| STT | Nội dung kiểm tra | Cách kiểm tra | Kết quả cần xác nhận |
|---|---|---|---|
| 1 | Trang chủ mở được | Mở `index.html` | Hiển thị trang danh sách và 4 sản phẩm |
| 2 | CSS được áp dụng | Quan sát font, màu, bố cục | Giao diện giữ phong cách SamSam |
| 3 | Mở chi tiết sản phẩm | Nhấn “Xem chi tiết sản phẩm” ở từng thẻ | Mở đúng `product-1.html` … `product-4.html` |
| 4 | Quay lại danh sách | Nhấn breadcrumb hoặc liên kết quay lại | Trở về `index.html#products` |
| 5 | Hình ảnh | Kiểm tra từng trang chi tiết | Ảnh tải được, không méo |
| 6 | Responsive 1366px | DevTools | Hai cột nội dung chi tiết, không tràn ngang |
| 7 | Responsive 768px | DevTools | Bố cục thích ứng, không chồng lấn |
| 8 | Responsive 390px | DevTools | Nội dung xếp một cột, nút dễ bấm |
| 9 | Hover/focus | Rê chuột và dùng phím Tab | Có phản hồi trực quan và viền focus |

> Đây là checklist để sinh viên chạy và ghi nhận kết quả thực tế. Không đánh dấu “Đạt” trước khi tự kiểm tra trên trình duyệt.

## Thay đổi độc lập cần tự thực hiện
Sau khi chạy thử, hãy tự chọn một thay đổi nhỏ, ví dụ đổi `gap` của `.detail-layout`, đổi màu `.detail-primary:hover`, hoặc thay đổi số cột của `.detail-extra-grid`. Ghi lại giá trị cũ, giá trị mới và kết quả quan sát để đáp ứng yêu cầu tự điều chỉnh của đề bài.
