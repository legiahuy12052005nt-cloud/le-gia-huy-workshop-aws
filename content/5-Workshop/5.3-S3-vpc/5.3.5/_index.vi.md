---
title: "Demo thực nghiệm và kiểm thử bảo mật"
date: 2026-07-05
weight: 5
chapter: false
pre: " <b> 5.3.5. </b> "
---

#### Nạp mã nguồn vào tiện ích mở rộng chrome extension

Sau khi hoàn thiện toàn bộ cấu trúc mã nguồn ở tầng client layer, chúng em tiến hành kích hoạt chế độ nhà phát triển (developer mode) trên trình duyệt để nạp phân hệ và kiểm thử giao diện.

1. Mở trình duyệt chrome và truy cập vào đường dẫn quản lý tiện ích mở rộng.
2. Bật công tắc developer mode ở góc trên bên phải, nhấn chọn nút load unpacked và tìm đến thư mục chứa mã nguồn của nhóm. Tiện ích gác cổng sẽ hiển thị giao diện bảng điều khiển trực quan như sau:

![giao diện chrome extension bước 1](/images/5-Workshop/Images/21.jpg)

---

#### Khởi tạo môi trường kiểm thử tiêu chuẩn quốc tế amtso

Để chứng minh năng lực thực chiến và độ chính xác của giải pháp chủ động gác cổng, hệ sinh thái phishshield đã được đưa vào kiểm thử nghiêm ngặt dựa trên khung tham chiếu tiêu chuẩn quốc tế của tổ chức amtso.

1. Chúng em truy cập vào trang chủ của tổ chức kiểm thử phần mềm độc hại quốc tế amtso tại địa chỉ trang web https://www.amtso.org/.
2. Giao diện trang tính năng kiểm tra an ninh hệ thống amtso security features check hiện ra trực quan như trong ảnh:

![giao diện trang chủ amtso bước 2](/images/5-Workshop/Images/22.jpg)

---

#### Kịch bản mô phỏng tấn công phishing

1. Tại giao diện tính năng của hệ thống kiểm thử, chúng em nhấp chuột vào mục tìm kiếm và gõ từ khóa phishing.
2. Thao tác truy vấn này sẽ thực hiện bóc tách tính năng amtso security features check để điều hướng phiên duyệt web trực tiếp tới các đường dẫn chứa kịch bản mô phỏng tấn công phishing chuẩn nhằm đánh giá phản xạ phòng thủ:

![kịch bản mô phỏng phishing bước 3](/images/5-Workshop/Images/23.jpg)

---

#### Chặn đứng điều hướng độc hại tại client edge và bẻ lái giao diện

Ngay khi luồng điều hướng mô phỏng mối đe dọa từ hệ thống amtso được khởi tạo, giải pháp bảo mật của chúng em lập tức kích hoạt cơ chế phòng thủ chủ động:

* Module xử lý chạy ngầm background.js đã can thiệp thành công tại tầng client edge, thực hiện bóc tách và trích xuất chính xác địa chỉ url đích thông qua cơ chế phân tích chuỗi bất đồng bộ.
* Giao diện tiện ích chrome extension phishshield endpoint guardian manifest v3 thực hiện bẻ lái luồng truy cập thành công sang trang cảnh báo an ninh nội bộ cục bộ warning.html đi kèm thông điệp access denied để bảo vệ cấu trúc thông tin định danh của người dùng.

![trang cảnh báo cách ly an toàn bước 4](/images/5-Workshop/Images/24.jpg)

#### Thực nghiệm áp dụng vào kịch bản thực tế

Để đánh giá toàn diện năng lực bảo vệ của hệ sinh thái trong môi trường thực tế, chúng em tiến hành mô phỏng một kịch bản tấn công phi kỹ thuật (social engineering) điển hình nhắm vào người dùng mạng xã hội.

* **Kịch bản thao túng tâm lý trên mạng xã hội:** Bài viết giả lập trên nền tảng facebook sử dụng kỹ nghệ thao túng tâm lý đánh vào lòng tham của người dùng với kịch bản tri ân khách hàng ngân hàng vcb nhằm dụ dỗ nạn nhân tương tác và nhấp vào đường dẫn liên kết độc hại.

![bài viết tri ân giả lập trên facebook](/images/5-Workshop/Images/26.jpg)

* **Bẫy thu thập thông tin định danh:** Sau khi người dùng sập bẫy và nhấn vào liên kết, trình duyệt lập tức điều hướng đến một giao diện giả mạo cổng xác thực trực tuyến của ngân hàng. Tại đây, mã nguồn độc hại đã tải toàn bộ nội dung bẫy, sẵn sàng thu thập thông tin tài khoản và mật khẩu của nạn nhân khi họ thao tác nhập liệu.

![giao diện giả mạo cổng xác thực ngân hàng](/images/5-Workshop/Images/27.jpg)

* **Kích hoạt cơ chế phòng thủ chủ động:** Khoảng 5 giây sau khi mở trình duyệt độc hại, hệ thống lập tức nổ cảnh báo trang web nguy hiểm có dấu hiệu lừa đảo trực tiếp trên màn hình. Kết quả này khẳng định mạnh mẽ năng lực phòng thủ chủ động của hệ thống khi bật tiện ích mở rộng chrome extension, giúp cô lập hoàn toàn các rủi ro an ninh mạng trước khi gói tin độc hại kịp thực thi hoặc đánh cắp dữ liệu trên trình duyệt của người dùng.

![tiện ích mở rộng nổ cảnh báo cô lập rủi ro](/images/5-Workshop/Images/28.jpg)