# AI Usage Log

## 1. Công cụ AI
ChatGPT.

## 2. Mục đích sử dụng
- Hỗ trợ lập bảng phân tích website thương mại điện tử.
- Gợi ý vấn đề trải nghiệm người dùng và phương án cải tiến.
- Đề xuất bố cục thẻ sản phẩm.
- Hỗ trợ tạo và giải thích HTML5/CSS3.

## 3. Prompt đã sử dụng
### Prompt phân tích website
Bạn là chuyên gia phân tích nghiệp vụ và thiết kế trải nghiệm người dùng cho website thương mại điện tử. Tôi đang khảo sát Shopee Việt Nam tại https://shopee.vn/. Hãy lập bảng phân tích trang chủ, danh mục sản phẩm, chi tiết sản phẩm, tìm kiếm và giỏ hàng. Với mỗi khu vực, nêu mục đích, thành phần giao diện, điểm thuận tiện, vấn đề có thể phát sinh và đề xuất cải tiến. Không khẳng định tính năng chưa được kiểm chứng; phân biệt nhận xét quan sát và đề xuất.

### Prompt đề xuất giao diện
Tôi đang cải tiến thẻ sản phẩm cho website bán hàng thời trang hướng đến khách hàng Việt Nam. Hãy đề xuất bố cục, thành phần HTML, cách tổ chức CSS, hiển thị trên máy tính/điện thoại và các điểm cần kiểm tra về khả năng sử dụng. Trước tiên chỉ giải thích phương án, chưa tạo mã nguồn.

### Prompt tạo mã nguồn
Dựa trên phương án đã thống nhất, hãy tạo một trang giao diện thương mại điện tử bằng HTML5 và CSS3. Có tiêu đề, tối thiểu 4 sản phẩm, mỗi sản phẩm có hình ảnh minh họa, tên, giá và nút thao tác; responsive; HTML rõ ràng; CSS tách file; không dùng backend hoặc cơ sở dữ liệu.

## 4. Kết quả AI đề xuất
AI đề xuất cấu trúc thẻ sản phẩm gồm hình ảnh, nhãn sản phẩm, tên, giá bán, giá gốc, tỷ lệ giảm giá, thông tin bổ sung và nút thao tác. AI đề xuất CSS Grid để chia cột và media query để điều chỉnh bố cục trên điện thoại.

## 5. Kiểm tra và điều chỉnh
Người thực hiện phải kiểm tra trực tiếp Shopee và đối chiếu từng nhận xét trước khi đưa vào báo cáo. Với bản giao diện, cần mở index.html trên Chrome, thử thu nhỏ cửa sổ, kiểm tra chữ, khoảng cách và hình ảnh. Ghi rõ ít nhất một thay đổi do bản thân thực hiện sau khi chạy thử; không ghi một thay đổi chưa thực hiện.

## 6. Phần tôi hiểu và có thể giải thích
- `header`, `nav`, `main`, `section`, `article`, `footer`: chia cấu trúc nội dung theo ngữ nghĩa.
- `class`: gán nhóm phần tử để CSS định dạng.
- `display: grid`: chia danh sách thành các cột.
- `@media`: áp dụng quy tắc CSS theo kích thước màn hình.
- `object-fit` (nếu bổ sung ảnh thật): điều chỉnh cách ảnh lấp đầy khung.
- HTML/CSS hiện chỉ tạo giao diện tĩnh; nút thêm vào giỏ hàng chưa xử lý dữ liệu vì bài tập chưa yêu cầu JavaScript/backend.


## Buổi 2 – Hỗ trợ phát triển trang chi tiết sản phẩm

### Mục đích
Tiếp tục phát triển website SamSam từ Buổi 1 bằng HTML5 và CSS3; tạo trang chi tiết riêng cho từng sản phẩm và liên kết từ danh sách sản phẩm.

### Prompt tiêu biểu
“Dựa trên mã HTML/CSS hiện có của website SamSam, hãy đề xuất cấu trúc trang chi tiết sản phẩm bằng HTML5 có ngữ nghĩa. Trang cần có breadcrumb, ảnh, tên, giá, mô tả, lựa chọn kích cỡ minh họa, nút thao tác và liên kết quay lại danh sách. Dùng CSS thuần, responsive cơ bản, không thêm JavaScript/backend. Giải thích các phần tử và selector.”

### Kết quả hỗ trợ
AI hỗ trợ phác thảo bố cục trang chi tiết, nhóm các thông tin sản phẩm và đề xuất CSS cho Grid/Flexbox, Box Model, hover/focus.

### Kiểm tra và điều chỉnh
- Giữ nguyên thương hiệu, màu sắc, font và dữ liệu 4 sản phẩm từ bài Buổi 1.
- Tạo một file HTML riêng cho từng sản phẩm để khi nhấn “Xem chi tiết” mở đúng nội dung.
- Kiểm tra lại đường dẫn ảnh, tên file và đường dẫn CSS tương đối.
- Ghi rõ nút giỏ hàng và lựa chọn kích cỡ chỉ là giao diện minh họa, chưa có xử lý nghiệp vụ.
- Cần tự chạy thử trên trình duyệt và xác nhận các thông tin sản phẩm trước khi nộp.
