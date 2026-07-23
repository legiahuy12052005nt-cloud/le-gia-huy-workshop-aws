---
title: "Nhật ký Tuần 8"
date: 2026-07-06
weight: 8
chapter: false
pre: " <b> 1.8. </b> "
---

### Mục tiêu Tuần 8:
* Xây dựng cỗ máy kiểm tra bất đồng bộ sử dụng AI sinh tạo để bóc trần các thủ đoạn lừa đảo chưa từng xuất hiện (zero-day).
* Thiết lập luồng cập nhật bộ nhớ đệm và lưu trữ dữ liệu phân tích dài hạn.

### Chi tiết công việc trong tuần:

| Thứ | Mô tả công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| :--- | :--- | :---: | :---: | :--- |
| **Hai** | - Triển khai cụm máy chủ EC2 tự động co giãn kết hợp Load Balancer để gánh vác tác vụ quét web nặng ở nền. | 06/07/2026 | 06/07/2026 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |
| **Ba** | - Tối ưu hóa câu lệnh (prompt engineering) giao tiếp với AI Amazon Bedrock nhằm phân tích mã nguồn web tìm dấu hiệu lừa đảo. | 07/07/2026 | 07/07/2026 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |
| **Tư** | - Viết kịch bản tự động cào dữ liệu (web scraping) chạy trong môi trường cách ly an toàn trên máy chủ ảo. | 08/07/2026 | 08/07/2026 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |
| **Năm** | - Tự động hóa quy trình: Đẩy kết quả đánh giá của AI vào kho lạnh S3 và cập nhật ngược mã độc mới vào danh sách đen DynamoDB. | 09/07/2026 | 09/07/2026 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |
| **Sáu** | - Kiểm thử chịu tải toàn hệ thống, tinh chỉnh thời gian chờ (timeout) nhằm đảm bảo quá trình phân tích nền không làm chậm duyệt web. | 10/07/2026 | 10/07/2026 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |

### Kết quả đạt được Tuần 8:
* Tích hợp bộ não AI mạnh mẽ vào lõi bảo mật.
* Hệ thống có khả năng "đọc hiểu" giao diện giả mạo tinh vi mà không cần phụ thuộc danh sách tĩnh, tự động nhân rộng lớp bảo vệ ra toàn mạng lưới.