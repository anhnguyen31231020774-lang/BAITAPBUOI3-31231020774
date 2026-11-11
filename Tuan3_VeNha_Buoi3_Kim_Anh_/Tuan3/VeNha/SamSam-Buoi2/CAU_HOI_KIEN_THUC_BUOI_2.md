# Câu hỏi kiến thức – Buổi 2

Các câu trả lời dưới đây bám theo mã nguồn SamSam đã được bổ sung. Sinh viên nên mở file tương ứng để chỉ trực tiếp khi trình bày.

## Câu 1. Trong khu vực giao diện, em đã sử dụng những phần tử HTML5 nào? Vì sao chọn chúng?

Em sử dụng `header` để chứa phần đầu trang và thanh điều hướng; `nav` để nhóm các liên kết điều hướng; `main` để chứa nội dung chính; `section` để chia nội dung thành các khu vực; `article` để biểu diễn từng thẻ sản phẩm độc lập; `footer` để chứa phần chân trang. Trong trang chi tiết, em dùng thêm `h1`, `h2`, `h3` để phân cấp tiêu đề, `p` cho đoạn mô tả, `img` cho ảnh sản phẩm, `a` cho điều hướng và `label`/`input` cho lựa chọn kích cỡ minh họa. Các phần tử này giúp HTML có ý nghĩa rõ ràng, dễ đọc và thuận tiện hơn khi bảo trì.

## Câu 2. Giải thích sự khác nhau giữa margin và padding. Cho ví dụ từ thẻ sản phẩm.

`padding` là khoảng trống bên trong phần tử, nằm giữa nội dung và đường viền. `margin` là khoảng trống bên ngoài đường viền, dùng để tách phần tử khỏi các phần tử xung quanh. Trong CSS của dự án, có thể quan sát `padding` ở `.product-info` hoặc các nút; `margin` được dùng để tạo khoảng cách giữa tiêu đề, giá và các khu vực nội dung. Nếu tăng padding, phần nội dung có thêm khoảng thở bên trong; nếu tăng margin, khoảng cách với thành phần bên ngoài tăng lên.

## Câu 3. Trong bài, Flexbox được sử dụng ở đâu? Giải thích justify-content và align-items.

Flexbox được dùng ở `.navbar` và `.footer-inner` trong `styles.css`. `display: flex` được đặt trên phần tử cha để sắp xếp các phần tử con theo trục chính. `justify-content: space-between` phân bố các phần tử dọc theo trục chính, đẩy chúng về hai phía và tạo khoảng trống ở giữa. `align-items: center` căn các phần tử theo trục còn lại, giúp logo, menu và liên kết giỏ hàng nằm thẳng hàng theo chiều dọc.

## Câu 4. CSS Grid khác Flexbox như thế nào? Vì sao dùng Grid cho danh sách sản phẩm?

Flexbox phù hợp để sắp xếp các phần tử theo một chiều chính (một hàng hoặc một cột). CSS Grid phù hợp để tổ chức bố cục hai chiều theo cả hàng và cột. Danh sách sản phẩm có nhiều thẻ cần nằm thành các cột cân đối nên dự án dùng `display: grid` với `grid-template-columns: repeat(4, 1fr)` cho `.product-grid`; ở màn hình nhỏ, media query thay đổi số cột.

## Câu 5. Nếu xóa `display: grid` khỏi danh sách sản phẩm, giao diện có thể thay đổi như thế nào?

Các thẻ sản phẩm sẽ không còn được bố trí theo lưới bốn cột do Grid không còn hoạt động. Chúng có thể trở về cách hiển thị mặc định của các phần tử khối, thường xếp nối tiếp theo chiều dọc và làm danh sách dài hơn. Khoảng cách và số cột được khai báo bằng `grid-template-columns` cũng không còn tác dụng.

## Câu 6. Vì sao cần sử dụng thuộc tính alt cho hình ảnh sản phẩm?

`alt` cung cấp nội dung thay thế để trình đọc màn hình mô tả hình ảnh cho người dùng khiếm thị; đồng thời văn bản này có thể hiển thị khi ảnh không tải được. Trong dự án, ảnh sản phẩm có `alt` mô tả nội dung ảnh thay vì để trống.

## Câu 7. Nêu một đề xuất của AI đã kiểm tra hoặc điều chỉnh trước khi đưa vào bài.

Một đề xuất là tạo trang chi tiết sản phẩm có breadcrumb, ảnh, tên, giá, mô tả, lựa chọn kích cỡ và liên kết quay lại danh sách. Khi áp dụng, em điều chỉnh theo dự án hiện có: giữ nguyên thương hiệu SamSam, bốn sản phẩm, hình ảnh và mức giá minh họa từ Buổi 1; tạo bốn file chi tiết riêng để mỗi sản phẩm mở đúng nội dung tương ứng. Em cũng giữ nút thêm vào giỏ ở trạng thái giao diện minh họa, không mô tả đó là chức năng đã hoạt động vì bài tập Buổi 2 chỉ yêu cầu HTML/CSS.
