# Báo cáo bài tập CSS – Buổi 3

## Phạm vi thực hiện
- Bài 1: tạo trang hướng dẫn và vị trí lưu minh chứng hai game CSS. Sinh viên cần tự chơi và chụp ảnh kết quả theo từng level; chưa thể xác nhận hoàn thành nếu chưa có ảnh thật.
- Bài 2: định dạng văn bản UEH, CNTTD, BIT-UEH; logo BIT làm nền lặp lại; thực hành overflow, text-overflow và white-space.
- Bài 3: chọn phương án b – hoàn thành các bài 4, 5, 6, 7.
- Bài 4–7: menu inline-block, landing page, portfolio grid và layout wrapper.
- Bài 8: triển khai cả hai mẫu 8a và 8b theo hình tham khảo trong PDF. Do PDF không cung cấp hai file nguồn css1/css2 và HTML gốc, phần này dựng lại cấu trúc tương đương từ hình minh họa và các thuộc tính được yêu cầu.
- Bài 9: sử dụng Font Awesome cho menu và các thẻ tiện ích.
- Bài 10: tạo trang index liên kết các bài và giữ website SamSam Buổi 2 trong thư mục con.

## Giải thích kiến thức CSS
- `display: inline-block`: các phần tử nằm cùng dòng nhưng vẫn thiết lập được width, height, padding.
- `text-align`: căn nội dung dạng inline bên trong phần tử.
- `overflow: hidden`: cắt phần nội dung vượt khỏi hộp.
- `text-overflow: ellipsis`: hiển thị dấu ba chấm khi kết hợp với `overflow: hidden` và thường là `white-space: nowrap`.
- `white-space: nowrap`: không cho văn bản xuống dòng.
- `background-repeat`: quy định ảnh nền có lặp lại hay không.
- `background-attachment: fixed`: cố định ảnh nền theo viewport khi cuộn trang.
- Flexbox phù hợp bố cục một chiều; Grid phù hợp bố cục hai chiều, ví dụ lưới portfolio.
- `position: relative` tạo mốc định vị; `position: absolute` định vị phần tử con theo mốc gần nhất có position.
- `z-index` điều khiển thứ tự chồng lớp khi các phần tử có ngữ cảnh định vị phù hợp.
- `:hover` áp dụng khi rê chuột; `transition` giúp thay đổi thuộc tính mượt hơn.

## Kiểm thử
1. Mở `index.html` bằng Live Server.
2. Mở lần lượt từng bài từ trang điều hướng.
3. Kiểm tra responsive tại 1366px, 768px và 390px.
4. Kiểm tra liên kết, ảnh, hover và khả năng cuộn.
5. Font Awesome cần internet để tải CDN; ảnh từ placeholder/UEH cũng cần kết nối internet.

## Việc sinh viên cần tự bổ sung trước khi nộp
- Họ tên, lớp, ảnh cá nhân và social link trong `index.html`.
- Ảnh chụp hoàn thành từng level của Flukeout và CSS Speedrun trong `evidence/`.
- Mở thử từng trang trên máy của mình, sửa các nội dung hoặc ảnh nếu giảng viên yêu cầu dùng tài nguyên cụ thể.
- Nếu giảng viên cung cấp file `css1`, `css2` hoặc file HTML gốc của bài 8, thay bản dựng tương đương hiện tại bằng đúng cấu trúc được giao.


## Lựa chọn câu 3: Lab CSS cơ bản
Sinh viên chọn phương án **3a – Hoàn thành Lab CSS cơ bản** thay cho phương án 3b (các bài 4, 5, 6, 7).
Bộ Lab nằm trong thư mục `Lab-CSS-Co-Ban/`, gồm các bài Exercise 4.1–4.13, tài nguyên hình ảnh và file PDF hướng dẫn gốc. Báo cáo Word `BAO_CAO_LAB_CSS.docx` tổng hợp kiến thức, ví dụ mã CSS và hình ảnh kết quả minh họa.
