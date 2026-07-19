---
title: "Mục tiêu cụ thể của đề tài"
date: 2026-07-05
weight: 3
chapter: false
pre: " <b> 5.1.2 </b> "
---

#### Các kết quả đầu ra mong muốn (Output)

* Phía client edge: Hoàn thiện một tiện ích mở rộng chrome extension (theo chuẩn manifest v3) có tính năng tự động chuyển hướng các link độc sang trang cảnh báo an toàn; một con bot discord tự động quét, thu hồi tin nhắn chứa link bẫy hoặc token bị lộ và bắn alert cảnh báo cho admin.
* Hạ tầng đám mây: Xây dựng cổng tiếp nhận api gateway có gắn tường lửa aws waf để lọc traffic, kết hợp hàng đợi amazon sqs làm bộ đệm chống nghẽn mạch cho các hàm xử lý aws lambda.
* Kho lưu trữ và quản trị: Thiết lập kho lưu trữ tệp tin log dạng json tập trung trên amazon s3 và hệ thống cơ sở dữ liệu amazon dynamodb để lưu danh sách đen (blacklist indicators) cũng như bộ đếm số lần chặn (blockcount) theo thời gian thực.

#### Tiêu chí đánh giá thành công

* Hệ thống hoạt động chính xác, nhận diện và bẻ lái thành công các link lừa đảo thử nghiệm sang trang cô lập an toàn trong môi trường lab.
* Tốc độ xử lý và độ trễ phản hồi (latency) từ hệ thống cloud về đến trình duyệt của người dùng phải mượt mà, thời gian phản hồi dưới 500ms để không ảnh hưởng đến trải nghiệm lướt web bình thường.
* Hệ thống không bị treo hoặc sập khi giả lập kịch bản bão log nhờ vào cơ chế hàng đợi điều phối thông minh.
* Chi phí duy trì hạ tầng tối ưu ở mức thấp nhất (tận dụng gói aws free tier để chi phí tiệm cận 0 usd trong giai đoạn thử nghiệm).