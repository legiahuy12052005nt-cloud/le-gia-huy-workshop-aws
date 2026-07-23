---
title: "Nhật ký Tuần 7"
date: 2026-06-29
weight: 7
chapter: false
pre: " <b> 1.7. </b> "
---

### Mục tiêu Tuần 7:
* Phát triển các ứng dụng can thiệp (tiện ích trình duyệt và bot chat) nhằm chặn đứng dữ liệu độc hại trước khi người dùng kịp nhấp vào.
* Đồng bộ hóa dữ liệu hai chiều với hệ thống backend đám mây.

### Chi tiết công việc trong tuần:

| Thứ | Mô tả công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| :--- | :--- | :---: | :---: | :--- |
| **Hai** | - Khởi tạo dự án Chrome Extension, cấu hình file manifest để cấp quyền theo dõi luồng điều hướng của trình duyệt. | 29/06/2026 | 29/06/2026 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |
| **Ba** | - Viết mã JavaScript ngầm để đánh chặn truy cập, gọi API kiểm tra và tự động chuyển hướng sang trang cảnh báo (HTML). | 30/06/2026 | 30/06/2026 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |
| **Tư** | - Đăng ký ứng dụng Discord Bot trên cổng developer, thiết lập cấp quyền đọc nội dung tin nhắn máy chủ. | 01/07/2026 | 01/07/2026 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |
| **Năm** | - Lập trình NodeJS dùng Regex để trích xuất URL từ khung chat, tự động gọi API và xóa vĩnh viễn tin nhắn độc hại ngay lập tức. | 02/07/2026 | 02/07/2026 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |
| **Sáu** | - Kiểm thử tích hợp toàn diện trên đa nền tảng, đảm bảo dữ liệu truyền tải trơn tru qua API Gateway không gặp lỗi CORS. | 03/07/2026 | 03/07/2026 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |

### Kết quả đạt được Tuần 7:
* Chế tạo thành công lớp lá chắn chủ động phía client.
* Bot chat tự động thanh lọc tin nhắn lừa đảo theo thời gian thực, trong khi tiện ích web ngăn chặn trang web độc hại tải nội dung.