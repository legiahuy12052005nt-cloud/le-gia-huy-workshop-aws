---
title: "Workshop"
date: 2026-07-09
weight: 5
chapter: false
pre: " <b> 5 </b> "
---

# Xây dựng hệ sinh thái bảo mật đa tầng Serverless với PhishShield Ecosystem

#### Tổng quan

Trong thực tế hiện nay, các cuộc tấn công lừa đảo trực tuyến (phishing) và phát tán mã độc chiếm đoạt tài khoản (infostealer) đang diễn ra rất phức tạp trên môi trường Internet. **PhishShield Ecosystem** là một hệ sinh thái an ninh mạng đa tầng giúp chủ động phát hiện, ngăn chặn và cách ly các liên kết bẫy, các trang web lừa đảo ngay từ phía thiết bị và trình duyệt của người dùng (client edge), không để người dùng có cơ hội tương tác với mã độc.

Trong bài thực hành này, chúng ta sẽ học cách xây dựng, cấu hình và triển khai một hệ thống bảo mật hoàn toàn dựa trên nền tảng kiến trúc thuần Serverless của AWS. Hệ thống ứng dụng tư duy cloud native hiện đại giúp tự động co giãn (scalability) theo lượng tải thực tế, đảm bảo không bị treo hoặc sập khi giả lập kịch bản bão dữ liệu log nhờ vào cơ chế hàng đợi điều phối thông minh.

Chúng ta sẽ thiết lập và tích hợp các phân hệ cốt lõi để bảo vệ an toàn cho người dùng mạng xã hội và cung cấp công cụ tập trung cho SecOps quản trị:
* **Client Edge** - Hoàn thiện tiện ích mở rộng Chrome Extension (chuẩn Manifest v3) để tự động chuyển hướng link độc sang trang cảnh báo an toàn, kết hợp Bot tự động quét và thu hồi tin nhắn chứa link bẫy hoặc token bị lộ trên kênh chat Discord.
* **Serverless Cloud Infrastructure** - Cấu hình cổng tiếp nhận API Gateway được bảo vệ bởi AWS WAF, kết hợp hàng đợi Amazon SQS làm bộ đệm điều phối dữ liệu bất đồng bộ chống nghẽn mạch cho các hàm xử lý logic cốt lõi AWS Lambda.
* **Storage & AI Deep Analysis** - Thiết lập cơ sở dữ liệu Amazon DynamoDB để tra cứu nhanh danh sách đen (blacklist indicators) theo thời gian thực, thiết lập kho lưu trữ tệp tin log JSON tập trung trên Amazon S3 (Threat Intel Data Lake), và tích hợp Amazon Bedrock Guardrails nhằm ứng dụng AI quét sâu ngữ cảnh độc hại.

#### Nội dung

1. [5.1. Ý tưởng và mục tiêu dự án](5.1-y-tuong-va-muc-tieu/)
2. [5.2. Kiến trúc và thiết kế kỹ thuật](5.2-kien-truc-va-thiet-ke/)
3. [5.3. Triển khai và hướng dẫn lab step-by-step](5.3-trien-khai-va-lab/)
