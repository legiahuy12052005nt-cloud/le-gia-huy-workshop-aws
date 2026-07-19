---
title: "Worklog Tuần 8"
date: 2026-06-08
weight: 8
chapter: false
pre: " <b> 1.8. </b> "
---

### Mục tiêu tuần 8:

* Khởi tạo nền tảng hạ tầng mạng đám mây cô lập và thiết lập các quy tắc bảo mật truy cập cơ sở.
* Xây dựng phân hệ cơ sở dữ liệu tốc độ cao phục vụ tính năng lưu trữ và tra cứu danh sách đen (blacklist) thời gian thực.
* Phát triển, cấu hình các hàm xử lý phi máy chủ và triển khai cổng giao tiếp api tiếp nhận dữ liệu từ các ứng dụng lớp biên.

---

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| 2 | - Triển khai khởi tạo môi trường mạng ảo amazon vpc cốt lõi cho hệ thống <br> - Cấu hình phân mảnh mạng thành các vùng public subnet và private subnet, thiết lập internet gateway và nat gateway để định tuyến luồng mạng an toàn | 08/06/2026 | 08/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 3 | - Thiết kế cấu trúc dữ liệu (schema) dạng key-value tối ưu cho truy vấn tốc độ cao <br> - Khởi tạo bảng dữ liệu trên amazon dynamodb để lưu trữ kho danh sách đen các liên kết độc hại, thiết lập cơ chế tự động hủy bản ghi hết hạn | 09/06/2026 | 09/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 4 | - Lập trình hàm xử lý phi máy chủ bằng aws lambda thực hiện logic trích xuất liên kết từ payload và đối chiếu với cơ sở dữ liệu <br> - Thiết lập chính sách quyền hạn iam role cấp phép cho hàm lambda đọc dữ liệu an toàn từ amazon dynamodb | 10/06/2026 | 10/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 5 | - Triển khai cổng giao tiếp lớp biên sử dụng amazon api gateway làm điểm cuối (endpoint) tiếp nhận các request dạng rest api <br> - Tích hợp bộ định tuyến của api gateway để kích hoạt hàm xử lý aws lambda tương ứng ở backend | 11/06/2026 | 11/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 6 | - Kiểm thử toàn vẹn luồng dữ liệu thời gian thực sử dụng các công cụ giả lập request như postman <br> - Đo lường độ trễ (latency), bổ sung các khối lệnh xử lý ngoại lệ (try-catch) và cấu hình đẩy log giám sát hệ thống lên amazon cloudwatch | 12/06/2026 | 12/06/2026 | <https://cloudjourney.awsstudygroup.com/> |

---

### Kết quả đạt được tuần 8:

* Xây dựng thành công móng hạ tầng mạng đám mây vững chắc với amazon vpc, phân tách rõ ràng luồng truy cập công cộng và vùng an toàn riêng tư, bảo đảm các dịch vụ lưu trữ cốt lõi không bị phơi nhiễm trực tiếp ra internet.
* Khởi tạo thành công không gian lưu trữ nosql trên nền tảng amazon dynamodb, cấu hình tối ưu khóa phân vùng (partition key) giúp tốc độ tra cứu trạng thái liên kết đạt mức chỉ vài mili-giây, đáp ứng hoàn hảo yêu cầu xử lý thời gian thực.
* Hoàn thiện mã nguồn logic cho cụm xử lý kiểm tra liên kết tức thời; biên dịch và triển khai hàm aws lambda hoạt động ổn định, trơn tru tương tác với kho dữ liệu thông qua các đặc quyền iam role được giới hạn nghiêm ngặt.
* Định tuyến thành công luồng gọi lệnh từ môi trường bên ngoài thông qua mạng lưới amazon api gateway, tạo ra các url endpoint bảo mật để sẵn sàng cho việc đấu nối với extension trên trình duyệt và bot trên mạng xã hội.
* Đánh giá và xác nhận luồng xử lý thời gian thực hoạt động đúng với thiết kế ban đầu; hệ thống ghi nhận và phân loại lỗi tốt, đồng thời toàn bộ lịch sử truy vấn đều được quản lý tập trung và giám sát chặt chẽ thông qua giao diện của amazon cloudwatch.