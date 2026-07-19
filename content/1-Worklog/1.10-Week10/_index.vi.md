---
title: "Worklog Tuần 10"
date: 2026-06-22
weight: 10
chapter: false
pre: " <b> 1.10. </b> "
---

### Mục tiêu tuần 10:

* Xây dựng cụm máy chủ xử lý tác vụ nền để thực hiện phân tích chuyên sâu các liên kết chưa từng xuất hiện trong cơ sở dữ liệu.
* Tích hợp nền tảng trí tuệ nhân tạo đám mây để đọc hiểu nội dung trang web, nhận diện các thủ đoạn lừa đảo tinh vi và các mối đe dọa zero-day.
* Thiết lập luồng lưu trữ kết quả phân tích và nhật ký hệ thống vào hồ dữ liệu tập trung phục vụ cho mục đích báo cáo và huấn luyện mô hình sau này.

---

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| 2 | - Triển khai cụm máy chủ tính toán worker nodes sử dụng amazon ec2 kết hợp nhóm tự động mở rộng auto scaling group <br> - Lập cấu hình bộ cân bằng tải application load balancer để phân phối đồng đều các tác vụ phân tích nền từ hệ thống | 22/06/2026 | 22/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 3 | - Nghiên cứu và thiết lập phân hệ trí tuệ nhân tạo tạo sinh thông qua dịch vụ amazon bedrock <br> - Xây dựng các mẫu câu lệnh prompt engineering tối ưu để chỉ đạo mô hình ngôn ngữ lớn (llm) phân tích dấu hiệu lừa đảo từ mã nguồn và văn bản trang web | 23/06/2026 | 23/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 4 | - Viết mã nguồn kịch bản cào dữ liệu (web scraping) trên máy chủ amazon ec2 để tự động truy cập, chụp ảnh và trích xuất nội dung từ các url khả nghi <br> - Tích hợp bộ sdk để gửi dữ liệu thô vừa thu thập được cho amazon bedrock đánh giá mức độ rủi ro | 24/06/2026 | 24/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 5 | - Cấu hình luồng lưu trữ vĩnh viễn: Đẩy toàn bộ payload kết quả phân tích và json log thô vào hồ dữ liệu data lake trên amazon s3 <br> - Lập trình cơ chế cập nhật ngược: Tự động ghi kết quả phát hiện mã độc mới vào bảng danh sách đen trên amazon dynamodb | 25/06/2026 | 25/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 6 | - Tiến hành kiểm thử độ chịu tải (load testing) và kiểm tra tính toàn vẹn của luồng xử lý bất đồng bộ <br> - Theo dõi các thông số giám sát hệ thống, tối ưu hóa bộ nhớ đệm và tinh chỉnh thời gian chờ (timeout) để không làm treo tiến trình | 26/06/2026 | 26/06/2026 | <https://cloudjourney.awsstudygroup.com/> |

---

### Kết quả đạt được tuần 10:

* Triển khai thành công hạ tầng tính toán linh hoạt với amazon ec2 và application load balancer, bảo đảm hệ thống có khả năng tự động co giãn tài nguyên xử lý mượt mà khi lưu lượng các liên kết khả nghi tăng đột biến.
* Khai thác hiệu quả sức mạnh của nền tảng ai amazon bedrock; mô hình trí tuệ nhân tạo đã có khả năng đọc hiểu cấu trúc trang web, nhận diện chính xác các chiêu trò giả mạo giao diện ngân hàng hoặc biểu mẫu đăng nhập đánh cắp thông tin mà không cần dựa vào danh sách đen tĩnh.
* Hoàn thiện kịch bản trích xuất nội dung web scraping an toàn trên môi trường máy chủ cô lập, loại bỏ rủi ro lây nhiễm mã độc ngược từ các trang web độc hại về hệ thống máy chủ lõi.
* Thiết lập thành công vòng lặp dữ liệu khép kín: hệ thống đã tự động đẩy các bằng chứng phân tích vào kho lưu trữ lạnh amazon s3 để làm tài nguyên đối soát, đồng thời cập nhật ngay lập tức các url độc hại mới vào amazon dynamodb để bảo vệ hàng loạt người dùng khác trong thời gian thực.
* Đo lường và xác nhận luồng xử lý bất đồng bộ hoạt động hoàn hảo; các tác vụ phân tích sâu chạy ngầm ở backend (mất từ 3-5 giây) hoàn toàn không gây ảnh hưởng đến trải nghiệm truy cập web tốc độ cao của người dùng ở lớp biên.