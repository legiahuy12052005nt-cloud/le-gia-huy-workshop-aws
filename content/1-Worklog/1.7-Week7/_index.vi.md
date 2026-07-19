---
title: "Worklog Tuần 7"
date: 2026-06-01
weight: 7
chapter: false
pre: " <b> 1.7. </b> "
---

### Mục tiêu tuần 7:

* Khảo sát yêu cầu thực tế, xác định bài toán nghiệp vụ và đề xuất giải pháp tổng thể cho dự án hệ sinh thái bảo mật.
* Phân tích luồng dữ liệu an ninh, thực hiện phác thảo bản vẽ thiết kế kiến trúc hạ tầng và mô hình hóa luồng truyền dữ liệu tuần tự giữa các cấu phần.
* Thiết lập ranh giới phân vùng mạng bảo mật và lựa chọn các dịch vụ đám mây tối ưu cho bài toán kiểm tra, ngăn chặn liên kết độc hại độc hại.

---

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| 2 | - Khảo sát toàn diện bối cảnh thực tế về các hình thức tấn công lừa đảo qua mạng xã hội <br> - Xác định yêu cầu nghiệp vụ và đề xuất mô hình giải pháp tổng thể cho dự án phishshield ecosystem | 01/06/2026 | 01/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 3 | - Phân rã luồng dịch chuyển dữ liệu (data flow mapping) từ các điểm biên client edge lên trung tâm cloud backend <br> - Thiết kế sơ đồ tuần tự (sequence diagram) cho hai cấu phần bảo vệ là browser extension và discord bot | 02/06/2026 | 02/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 4 | - Sử dụng các công cụ chuyên dụng để vẽ sơ đồ kiến trúc tổng thể giải pháp (overall architecture diagram) <br> - Lập cấu hình sơ đồ phân vùng mạng ảo vpc lõi, phân chia cấu trúc phân lớp mạng public subnet và private subnet đa vùng sẵn sàng multi-az | 03/06/2026 | 03/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 5 | - Thiết kế chi tiết phân hệ xử lý thời gian thực tốc độ cao (real-time response group) bám sát bản vẽ <br> - Lập sơ đồ cấu trúc tích hợp hệ thống bảo vệ ứng dụng biên bằng aws waf, cổng tiếp nhận amazon api gateway, bộ định tuyến aws lambda và lớp đệm tốc độ cao trên dynamodb | 04/06/2026 | 04/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 6 | - Thiết kế phân hệ xử lý hậu trường phân tích sâu bất đồng bộ (asynchronous deep analysis) và mạng phân phối nội dung <br> - Sắp xếp sơ đồ điều phối tải qua application load balancer đến cụm máy chủ ảo amazon ec2, liên kết kho s3 data lake và gọi mô hình trí tuệ nhân tạo trên amazon bedrock <br> - Kiểm tra tính đồng bộ của toàn bộ hệ thống ký hiệu kỹ thuật trên bản vẽ kiến trúc | 05/06/2026 | 08/06/2026 | <https://cloudjourney.awsstudygroup.com/> |

---

### Kết quả đạt được tuần 7:

* Định hình thành công bài toán nghiên cứu thực tế, đề xuất giải pháp phân tách trách nhiệm linh hoạt giữa tầng biên client edge chịu trách nhiệm thu thập, đánh chặn và tầng xử lý cloud backend chịu trách nhiệm lưu trữ, phân tích chuyên sâu.
* Hoàn thiện bản vẽ thiết kế sơ đồ kiến trúc hệ thống tổng thể đạt chuẩn kỹ thuật; mô hình hóa trực quan không gian mạng vpc bảo mật cô lập hoàn toàn các dịch vụ cơ sở dữ liệu lõi trong vùng private subnet riêng biệt.
* Thiết lập thành công giải pháp phản hồi thời gian thực với độ trễ tối thiểu thông qua việc tích hợp chuỗi dịch vụ tuần tự từ bộ lọc ứng dụng web aws waf, cổng kết nối kết nối an toàn amazon api gateway đến bộ nhớ đệm cache tốc độ cao trên dynamodb.
* Xây dựng giải pháp phân tích sâu bất đồng bộ toàn diện, ứng dụng kiến trúc phân phối tải thông minh qua application load balancer đến cụm máy chủ xử lý trung tâm amazon ec2 cấu hình tự động mở rộng, kết hợp ứng dụng sức mạnh của nền tảng ai amazon bedrock để nhận diện các kịch bản lừa đảo tinh vi.
* Biên soạn hoàn chỉnh tài liệu mô tả luồng dữ liệu và sơ đồ tuần tự tương tác, tạo nền tảng lý thuyết và kiến trúc hạ tầng vững chắc để chuẩn bị bước vào giai đoạn cấu hình thực tế và triển khai mã nguồn chi tiết cho các cấu phần trong tuần tiếp theo.