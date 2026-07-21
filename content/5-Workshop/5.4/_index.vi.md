---
title: "Hướng phát triển và tài liệu tham khảo"
date: 2026-07-09
weight: 4
chapter: false
pre: " <b> 5.4. </b> "
---

#### Hướng phát triển trong tương lai

Mặc dù hệ thống đã đáp ứng cơ bản các yêu cầu đặt ra trong bài lab, em nhận thấy đồ án vẫn còn một số điểm có thể nâng cấp và mở rộng tiếp trong thời gian tới:

1. **Tự động hóa triển khai hạ tầng (IaC):**
   * Trong bài lab này, một số dịch vụ vẫn phải cấu hình thủ công trên AWS Console. Hướng tới em sẽ viết lại toàn bộ bằng **AWS SAM** hoặc **Terraform** để chỉ cần chạy 1 câu lệnh là tự khởi tạo lại toàn bộ hạ tầng (WAF, API Gateway, Lambda, DynamoDB).

2. **Cải thiện khả năng lọc link lừa đảo:**
   * Tích hợp thêm các bộ dữ liệu Threat Intel công khai để cập nhật danh sách link độc theo thời gian thực.
   * Cấu hình lại phần prompt và quy tắc cho **Amazon Bedrock Guardrails** để quét kỹ hơn ngữ cảnh tin nhắn, tránh trường hợp bắt nhầm các link an toàn.

3. **Bổ sung kênh cảnh báo sự cố:**
   * Kết nối log từ SQS/CloudWatch sang **Telegram Bot** hoặc **Discord Webhook** của nhóm quản trị để khi có link độc gửi lên hệ thống sẽ phát cảnh báo tức thì.

4. **Thử nghiệm trên các nền tảng khác:**
   * Mở rộng thêm extension hoặc bot cho **Microsoft Teams** và **Slack** thay vì chỉ dừng lại ở Discord và trình duyệt Web.

---
#### Toàn bộ mã nguồn Code đã Demo 

 Link : https://drive.google.com/drive/folders/1vt9pVlMj7ENpgvMAqSrnh33uKejuwQBf?usp=sharing

#### Tài liệu tham khảo

* **Tài liệu kĩ thuật chính thức từ Amazon Web Services:**
  * [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) - Hướng dẫn cấu hình Web Application Firewall, Rule Group và Web ACL trên AWS.
  * [Amazon API Gateway Developer Guide](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html) - Hướng dẫn thiết lập REST API và tích hợp với AWS Lambda.
  * [AWS Lambda Developer Guide](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html) - Cấu hình hàm Serverless xử lý logic backend.
  * [Amazon Bedrock Guardrails User Guide](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html) - Thiết lập rào cản an toàn và bộ lọc nội dung cho mô hình AI.
  * [Amazon DynamoDB Developer Guide](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html) - Hướng dẫn lưu trữ dữ liệu NoSQL chuẩn AWS.
* **Chuẩn bảo mật & Khung tham chiếu:**
  * [OWASP Top 10 for Large Language Model Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/) - Danh mục các rủi ro an ninh mạng hàng đầu trên các ứng dụng tích hợp AI/LLM.
* **Giao diện & Công cụ dựng trang:**
  * [Hugo Learn Theme GitHub Repository](https://github.com/matcornic/hugo-theme-learn) - Mã nguồn mở và tài liệu hướng dẫn sử dụng giao diện Hugo Learn.