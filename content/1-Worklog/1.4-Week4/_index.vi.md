---
title: "Nhật ký Tuần 4"
date: 2026-06-08
weight: 4
chapter: false
pre: " <b> 1.4. </b> "
---

### Mục tiêu Tuần 4:
* Chuyển đổi cấu trúc ứng dụng nguyên khối thành kiến trúc serverless hướng sự kiện.
* Tự động hóa quá trình đóng gói và triển khai các thành phần không máy chủ.

### Chi tiết công việc trong tuần:

| Thứ | Mô tả công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| :--- | :--- | :---: | :---: | :--- |
| **Hai** | - Nghiên cứu kỹ thuật bóc tách kiến trúc nguyên khối (monolith) thành các mô-đun microservices độc lập. | 08/06/2026 | 08/06/2026 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |
| **Ba** | - Tích hợp Amazon Cognito nhằm quản lý xác thực người dùng an toàn cho các ứng dụng web trang đơn (SPA). | 09/06/2026 | 09/06/2026 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |
| **Tư** | - Lập trình backend serverless với AWS Lambda, sử dụng DynamoDB để lưu trữ trạng thái và S3 để chứa tệp tĩnh. | 10/06/2026 | 10/06/2026 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |
| **Năm** | - Thiết lập luồng giao tiếp bất đồng bộ qua hàng đợi SQS, thông báo SNS và điều phối luồng bằng AWS Step Functions. | 11/06/2026 | 11/06/2026 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |
| **Sáu** | - Ứng dụng framework AWS SAM để đóng gói mã nguồn và tự động hóa việc triển khai hạ tầng serverless. | 12/06/2026 | 12/06/2026 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |

### Kết quả đạt được Tuần 4:
* Nắm vững tư duy chuyển đổi sang hệ thống serverless linh hoạt.
* Triển khai thành công luồng xử lý bất đồng bộ, giảm tải cho hệ thống và tối ưu quy trình phát hành bằng AWS SAM.