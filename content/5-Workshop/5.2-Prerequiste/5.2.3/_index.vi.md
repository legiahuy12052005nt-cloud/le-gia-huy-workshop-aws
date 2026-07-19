---
title: "Khả năng mở rộng và vận hành hệ thống"
date: 2026-07-05
weight: 4
chapter: false
pre: " <b> 5.2.3 </b> "
---

* **Khả năng tự động co giãn và chịu lỗi (scalability):** Hệ thống vận hành hoàn toàn tự động theo kiến trúc hướng sự kiện (event-driven). Khi lượng log từ người dùng tăng cao, amazon api gateway và aws lambda sẽ tự động tăng số lượng phiên xử lý song song để đáp ứng mà không cần sự can thiệp thủ công của con người. Bên cạnh đó, nhờ có hàng đợi amazon sqs làm bộ đệm cô lập, các phân hệ phân tích sâu phía sau sẽ không bị quá tải khi dính bão log dữ liệu, giúp hệ thống có khả năng chịu tải và phục hồi rất cao.
* **Giám sát hoạt động và cảnh báo (logging và monitoring):** Toàn bộ nhật ký vận hành, lịch sử chạy mã nguồn và các trạng thái lỗi của các hàm aws lambda đều được tự động thu thập tập trung về dịch vụ amazon cloudwatch logs. Chúng em tiến hành cấu hình các biểu đồ theo dõi hệ thống (cloudwatch metrics) để giám sát các chỉ số như số lượng request, tỷ lệ lỗi xử lý. Đồng thời, nhóm cũng thiết lập các bộ cảnh báo tự động (cloudwatch alarms) để hệ thống tự động phát tín hiệu, bắn tin nhắn thông báo về kênh quản trị của nhóm ngay lập tức khi phát hiện có lỗi hệ thống liên tục hoặc có dấu hiệu tấn công bất thường xảy ra.