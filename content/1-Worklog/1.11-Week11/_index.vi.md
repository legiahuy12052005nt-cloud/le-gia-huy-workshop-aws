---
title: "Worklog Tuần 11"
date: 2026-06-29
weight: 11
chapter: false
pre: " <b> 1.11. </b> "
---

### Mục tiêu tuần 11:

* Triển khai các lớp áo giáp bảo mật để bảo vệ cổng giao tiếp api và che giấu an toàn các thông tin nhạy cảm của hệ thống.
* Rà soát và thắt chặt toàn bộ hệ thống phân quyền truy cập giữa các dịch vụ đám mây theo nguyên tắc đặc quyền tối thiểu (least privilege).
* Thiết lập đường ống tự động hóa ci/cd để rút ngắn thời gian đóng gói và phát hành các bản cập nhật mã nguồn mới.

---

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| 2 | - Triển khai bộ lọc tường lửa ứng dụng web aws waf để bảo vệ amazon api gateway khỏi các cuộc tấn công ddos và spam request <br> - Thiết lập các quy tắc (rules) giới hạn tốc độ (rate limiting) đối với các ip có dấu hiệu gửi truy vấn bất thường | 29/06/2026 | 29/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 3 | - Tích hợp dịch vụ quản lý vòng đời mật khẩu aws secrets manager <br> - Di chuyển toàn bộ các thông tin nhạy cảm như token của discord bot, khóa api và cấu hình kết nối khỏi mã nguồn để lưu trữ bảo mật | 30/06/2026 | 30/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 4 | - Xây dựng đường ống tự động hóa ci/cd sử dụng github actions kết hợp với aws sam <br> - Viết kịch bản tự động kiểm thử, đóng gói và triển khai phiên bản mới của hàm aws lambda mỗi khi có thay đổi trên nhánh chính | 01/07/2026 | 01/07/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 5 | - Rà soát toàn diện danh sách chính sách bảo mật iam role trên toàn bộ hệ thống <br> - Gỡ bỏ các quyền truy cập dư thừa của cụm amazon ec2 và hàm aws lambda, bảo đảm chỉ cấp quyền đọc/ghi chính xác vào các tài nguyên được chỉ định | 02/07/2026 | 02/07/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 6 | - Thực hiện kiểm tra an ninh toàn diện (security audit) trên toàn bộ kiến trúc hạ tầng đã xây dựng <br> - Tối ưu hóa chi phí vận hành bằng cách điều chỉnh thông số dung lượng dự phòng và thu thập số liệu băng thông trên amazon cloudwatch | 03/07/2026 | 03/07/2026 | <https://cloudjourney.awsstudygroup.com/> |

---

### Kết quả đạt được tuần 11:

* Xây dựng thành công lá chắn thép aws waf ở lớp biên, bảo vệ toàn vẹn cổng amazon api gateway khỏi các kịch bản tấn công từ chối dịch vụ (ddos) và ngăn chặn hiệu quả các luồng truy cập rác làm cạn kiệt tài nguyên.
* Xóa bỏ hoàn toàn rủi ro lộ lọt thông tin nhạy cảm (hardcode credentials) bằng cách mã hóa và quản lý tập trung toàn bộ token, khóa cấu hình thông qua dịch vụ aws secrets manager.
* Tự động hóa hoàn toàn vòng đời phát triển phần mềm; thiết lập thành công đường ống ci/cd cho phép mã nguồn mới từ môi trường cục bộ được tự động kiểm thử và triển khai thẳng lên môi trường đám mây chỉ trong vài phút.
* Củng cố môi trường bảo mật nội bộ đạt tiêu chuẩn cao nhất; toàn bộ các dịch vụ chỉ có thể giao tiếp chéo với nhau qua các iam role được thiết kế tinh gọn, bám sát nguyên tắc đặc quyền tối thiểu.
* Hoàn thành khâu tối ưu hóa tài nguyên đám mây, loại bỏ các nút thắt cổ chai về hiệu năng và xây dựng báo cáo chi phí vận hành chi tiết, chuẩn bị sẵn sàng cho khâu đóng gói tài liệu nghiệm thu cuối cùng.