---
title: "Giới thiệu"
date: 2026-07-05
weight: 1
chapter: false
pre: " <b> 5.1 </b> "
---

#### Giới thiệu về hệ sinh thái phishshield

+ Hệ sinh thái phishshield là một giải pháp an ninh mạng đa tầng do chúng em phát triển nhằm chủ động phát hiện, ngăn chặn và cách ly các liên kết lừa đảo (phishing) cũng như mã độc lấy cắp tài khoản ngay từ phía trình duyệt và thiết bị của người dùng (client edge).
+ Hệ thống bẻ gãy chuỗi tấn công mạng bằng cách kết hợp giữa bộ lọc chặn nhanh theo thời gian thực và phân hệ phân tích sâu bất đồng bộ ứng dụng trí tuệ nhân tạo tạo sinh, giúp bảo vệ người dùng một cách toàn diện.

#### Tổng quan về bài Workshop

Trong bài thực hành này, chúng em sẽ từng bước hiện thực hóa và triển khai toàn bộ hệ thống này lên môi trường cloud thông qua các cấu phần chính[cite: 1]:
+ **Phía client edge:** Cấu hình cài đặt tiện ích mở rộng chrome extension để bẻ lái các link độc trên trình duyệt, kết hợp một con bot discord để tự động quét dọn các liên kết bẫy trên kênh chat mạng xã hội].
+ **Phía cloud hạ tầng:** Sử dụng công cụ đóng gói aws sam để khởi tạo tự động mô hình thuần serverless gồm cổng kết nối api gateway có gắn tường lửa aws waf, hàng đợi tin nhắn amazon sqs làm bộ đệm chống nghẽn mạch, các hàm aws lambda để xử lý logic, cơ sở dữ liệu amazon dynamodb để tra cứu nhanh danh sách đen, và kho lưu trữ amazon s3 làm threat intel data lake có kết hợp bộ phân tích ngữ cảnh thông minh của amazon bedrock guardrails.