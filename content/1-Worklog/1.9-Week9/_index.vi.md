---
title: "Nhật ký Tuần 9"
date: 2026-07-13
weight: 9
chapter: false
pre: " <b> 1.9. </b> "
---

### Mục tiêu Tuần 9:
* Tạo lớp giáp bảo vệ cổng API và quản lý bí mật ứng dụng (token, mật khẩu) an toàn.
* Tự động hoá quy trình đẩy code và kiểm tra chéo quyền hạn truy cập của toàn hệ thống.

### Chi tiết công việc trong tuần:

| Thứ | Mô tả công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| :--- | :--- | :---: | :---: | :--- |
| **Hai** | - Triển khai tường lửa AWS WAF bảo vệ API Gateway, thiết lập quy tắc giới hạn truy cập (rate limit) chống DDoS và spam. | 13/07/2026 | 13/07/2026 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |
| **Ba** | - Chuyển toàn bộ Bot Token và khóa API nhạy cảm vào AWS Secrets Manager, loại bỏ hoàn toàn mã cứng trong source code. | 14/07/2026 | 14/07/2026 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |
| **Tư** | - Xây dựng đường ống CI/CD bằng GitHub Actions kết hợp AWS SAM để tự động kiểm thử và tung bản cập nhật lên serverless. | 15/07/2026 | 15/07/2026 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |
| **Năm** | - Rà soát toàn diện danh sách IAM Role, tước bỏ các quyền dư thừa của Lambda và EC2 nhằm đảm bảo tiêu chuẩn quyền hạn tối thiểu. | 16/07/2026 | 16/07/2026 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |
| **Sáu** | - Kiểm toán an ninh lại toàn bộ kiến trúc, đồng thời phân tích CloudWatch để hạ cấp tài nguyên rảnh rỗi nhằm tối ưu hóa chi phí. | 17/07/2026 | 17/07/2026 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |

### Kết quả đạt được Tuần 9:
* Bọc thép toàn diện cho hệ thống ngoài biên và triệt tiêu nguy cơ lộ lọt mật khẩu.
* Rút ngắn thời gian triển khai code mới xuống chỉ còn vài phút thông qua quy trình CI/CD chuyên nghiệp.