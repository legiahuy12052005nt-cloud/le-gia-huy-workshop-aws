---
title: "Nhật ký Tuần 6"
date: 2026-06-22
weight: 6
chapter: false
pre: " <b> 1.6. </b> "
---

### Mục tiêu Tuần 6:
* Xây dựng luồng truy vấn tốc độ cực cao nhằm đối chiếu URL với danh sách đen độc hại.
* Tạo cổng giao tiếp API bảo mật để tiếp nhận dữ liệu từ các ứng dụng đầu cuối.

### Chi tiết công việc trong tuần:

| Thứ | Mô tả công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| :--- | :--- | :---: | :---: | :--- |
| **Hai** | - Thiết kế lược đồ NoSQL trên DynamoDB chuyên lưu trữ danh sách đen (blacklist) với cơ chế tự động xóa bản ghi cũ (TTL). | 22/06/2026 | 22/06/2026 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |
| **Ba** | - Lập trình hàm AWS Lambda chịu trách nhiệm phân tách URL gửi đến và tra cứu trạng thái ngay lập tức trên cơ sở dữ liệu. | 23/06/2026 | 23/06/2026 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |
| **Tư** | - Gắn chính sách IAM phân quyền tối thiểu, cho phép Lambda đọc dữ liệu từ DynamoDB một cách an toàn. | 24/06/2026 | 24/06/2026 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |
| **Năm** | - Triển khai Amazon API Gateway làm cổng tiếp nhận yêu cầu REST từ bên ngoài và chuyển tiếp về hàm Lambda xử lý. | 25/06/2026 | 25/06/2026 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |
| **Sáu** | - Kiểm thử luồng API bằng Postman, xử lý lỗi cấu hình CORS và cấu hình đẩy log hệ thống về CloudWatch. | 26/06/2026 | 26/06/2026 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |

### Kết quả đạt được Tuần 6:
* Đạt tốc độ truy vấn đối chiếu link chỉ trong vài mili-giây.
* Thiết lập thành công backend serverless mạnh mẽ, sẵn sàng kết nối với các ứng dụng phía người dùng.