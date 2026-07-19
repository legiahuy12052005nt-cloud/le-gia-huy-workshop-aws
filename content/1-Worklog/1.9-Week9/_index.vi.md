---
title: "Worklog Tuần 9"
date: 2026-06-15
weight: 9
chapter: false
pre: " <b> 1.9. </b> "
---

### Mục tiêu tuần 9:

* Xây dựng và phát triển các thành phần ứng dụng lớp biên (client edge) bao gồm tiện ích mở rộng trên trình duyệt và bot giám sát trên nền tảng mạng xã hội.
* Thiết lập kết nối an toàn từ các ứng dụng client đến hệ thống xử lý thời gian thực thông qua cổng giao tiếp api đã triển khai ở tuần trước.
* Hoàn thiện giao diện cảnh báo người dùng và logic xử lý đánh chặn, thu hồi tin nhắn chứa liên kết độc hại.

---

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| 2 | - Khởi tạo cấu trúc dự án chrome extension, thiết lập tệp cấu hình manifest.json cấp quyền truy cập tab và đánh chặn luồng điều hướng <br> - Thiết kế giao diện trang cảnh báo warning.html bằng html và css | 15/06/2026 | 15/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 3 | - Lập trình mã nguồn javascript cho phần background script để lắng nghe sự kiện truy cập url của người dùng <br> - Viết hàm gọi api đẩy dữ liệu liên kết về amazon api gateway và xử lý logic chuyển hướng sang trang cảnh báo nếu nhận kết quả rủi ro | 16/06/2026 | 16/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 4 | - Đăng ký và khởi tạo ứng dụng discord bot trên cổng nhà phát triển, thiết lập các đặc quyền oauth2 và scopes cần thiết (như đọc và quản lý tin nhắn) <br> - Khởi tạo môi trường lập trình nodejs và cài đặt các thư viện kết nối | 17/06/2026 | 17/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 5 | - Lập trình logic cho discord bot sử dụng biểu thức chính quy (regex) để bóc tách url từ các đoạn tin nhắn trong kênh chat <br> - Tích hợp gọi api kiểm tra url và thực thi lệnh xóa tin nhắn ngay lập tức nếu phát hiện mã độc rò rỉ dữ liệu | 18/06/2026 | 18/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 6 | - Thực hiện kiểm thử tích hợp toàn trình (end-to-end testing) trên cả hai môi trường trình duyệt và ứng dụng nhắn tin <br> - Xử lý triệt để các lỗi liên quan đến chính sách nguồn chéo cors, tối ưu hóa độ trễ phản hồi api và đóng gói mã nguồn | 19/06/2026 | 19/06/2026 | <https://cloudjourney.awsstudygroup.com/> |

---

### Kết quả đạt được tuần 9:

* Phát triển thành công phần lõi của chrome extension với khả năng can thiệp trực tiếp vào luồng duyệt web, nhận diện và chặn đứng các truy cập mờ ám trước khi trang web kịp tải về nội dung thực tế.
* Xây dựng giao diện trang warning.html trực quan, giải thích rõ ràng lý do hệ thống tiến hành đánh chặn và cung cấp mã định danh tham chiếu cho người dùng cuối.
* Đưa vào vận hành thành công discord bot trên máy chủ thử nghiệm; bot có khả năng tự động quét hàng loạt tin nhắn theo thời gian thực và bóc tách url độ chính xác cao bằng công cụ regex.
* Tích hợp đồng bộ hai luồng ứng dụng biên với trung tâm phân tích amazon api gateway; giải quyết hoàn toàn các rào cản bảo mật về cors để bảo đảm luồng dữ liệu truyền tải hai chiều được thông suốt.
* Xác nhận và hoàn thành kịch bản tự động hóa phòng thủ đa nền tảng: tiện ích mở rộng bẻ lái thành công luồng truy cập trình duyệt độc hại, đồng thời bot mạng xã hội kích hoạt đặc quyền quản trị để thu hồi và xóa vĩnh viễn các tin nhắn chứa liên kết lừa đảo chỉ trong vài mili-giây.