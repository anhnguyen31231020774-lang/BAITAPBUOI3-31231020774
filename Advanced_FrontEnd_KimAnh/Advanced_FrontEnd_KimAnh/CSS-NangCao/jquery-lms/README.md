# jQuery LMS Helper

Tiện ích chạy trực tiếp trên trang LMS của lớp học. Công cụ đọc cấu trúc DOM hiện có, in tên bài tập thứ 5, đồng thời thống kê các chủ đề, bài tập và deadline.

## Cách sử dụng

1. Đăng nhập LMS và mở trang môn học có danh sách chủ đề/bài tập.
2. Mở Developer Tools bằng `F12` → tab **Console**.
3. Nếu LMS đã nạp jQuery, dán nội dung file `lms-helper.js` vào Console. Nếu chưa có jQuery, xem hướng dẫn thêm jQuery ở cuối file.
4. Chạy lệnh và xem bảng kết quả trong Console. Có thể dùng `window.lmsAssignmentReport` để lấy dữ liệu.

## Lưu ý về cấu trúc LMS

Bài giảng cung cấp selector `.modtype_assign` và `.instancename`. Moodle/LMS có thể thay đổi HTML theo giao diện hoặc phiên bản. Deadline thường nằm trong phần activity info; mã đã thử nhiều selector phổ biến. Nếu LMS của lớp dùng selector khác, cần kiểm tra bằng Inspect Element và bổ sung selector tương ứng. Không thể xác định deadline nếu trang không hiển thị ngày hạn nộp.
