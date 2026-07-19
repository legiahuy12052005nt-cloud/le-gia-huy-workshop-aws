---
title: "Lý do lựa chọn các dịch vụ hạ tầng"
date: 2026-07-05
weight: 2
chapter: false
pre: " <b> 5.2.2. </b> "
---

Để xây dựng hệ thống, chúng em ưu tiên lựa chọn các dịch vụ được quản lý hoàn toàn (managed service) theo mô hình kiến trúc thuần không máy chủ (serverless). Các lý do cụ thể bao gồm:

* amazon api gateway: Dịch vụ này đóng vai trò làm cổng tiếp nhận các yêu cầu https từ tiện ích mở rộng và discord bot gửi về. Chúng em chọn dịch vụ này vì tính đơn giản trong khâu cấu hình, khả năng tự động mở rộng quy mô (scale) khi có lượng truy cập lớn mà không cần cài đặt cấu hình các máy chủ điều phối web truyền thống. Chi phí của dịch vụ cũng rất tối ưu khi chỉ tính tiền dựa trên số lượng yêu cầu thực tế được xử lý.
* aws lambda: Đây là thành phần xử lý logic lõi của hệ thống. Chúng em sử dụng dịch vụ này để chạy mã nguồn kiểm tra link và xử lý log theo cơ chế hướng sự kiện (event-driven). Sử dụng dịch vụ này giúp chúng em loại bỏ hoàn toàn việc quản trị hệ điều hành máy chủ, mã nguồn chỉ khởi chạy và tính tiền trên từng mili-giây thực thi, giúp tận dụng tối đa hạn mức miễn phí.
* amazon sqs: Hàng đợi tin nhắn này đóng vai trò làm bộ đệm ở giữa lớp tiếp nhận dữ liệu và lớp phân tích sâu bất đồng bộ. Chúng em đưa dịch vụ này vào kiến trúc để giải quyết bài toán chống nghẽn mạch hệ thống khi có hiện tượng bão log, đảm bảo các yêu cầu được xếp hàng và xử lý tuần tự mà không bị rơi rụng dữ liệu.
* amazon dynamodb: Cơ sở dữ liệu nosql này được chọn nhờ vào tốc độ đọc ghi cực kỳ nhanh với độ trễ chỉ vài mili-giây. Dịch vụ này rất phù hợp cho tác vụ tra cứu nhanh trạng thái của các liên kết xem có nằm trong danh sách đen (blacklist indicators) hay không để phản hồi ngay lập tức cho người dùng.
* amazon s3: Kho lưu trữ đối tượng này được chúng em sử dụng để làm phân hệ lưu trữ dữ liệu thô (threat intel data lake). Dịch vụ này có chi phí lưu trữ tệp tin cực kỳ rẻ, dung lượng mở rộng gần như vô hạn, rất lý tưởng để lưu lại các tệp tin log định dạng json phục vụ cho công tác điều tra kỹ thuật số sau này.
* amazon bedrock guardrails: Thay vì phải tự viết các bộ lọc thủ công rất phức tạp và dễ sai sót, chúng em chọn dịch vụ này để ứng dụng các mô hình trí tuệ nhân tạo có sẵn. Dịch vụ giúp quét sâu và nhận diện ngữ cảnh độc hại một cách chính xác mà không tốn công phát triển từ đầu.