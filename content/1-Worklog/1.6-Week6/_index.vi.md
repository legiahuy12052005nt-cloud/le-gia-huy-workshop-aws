---
title: "Worklog Tuần 6"
date: 2026-05-25
weight: 6
chapter: false
pre: " <b> 1.6. </b> "
---

### Mục tiêu tuần 6:

* Nghiên cứu chiến lược chuyển dịch cấu trúc ứng dụng từ mô hình khối monolith sang kiến trúc vi dịch vụ microservices kết hợp tái cấu trúc luồng dữ liệu.
* Triển khai xây dựng phân hệ ứng dụng bất đồng bộ serverless, tích hợp cơ chế xác thực người dùng tập trung và cấu hình bảo mật ssl lớp biên.
* Ứng dụng các dịch vụ hàng đợi, thông báo sự kiện để điều phối luồng xử lý và tự động hóa chu trình đóng gói, triển khai mã nguồn ứng dụng.

---

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| 2 | - Nghiên cứu phương pháp chuyển đổi ứng dụng từ kiến trúc monolithic sang kiến trúc vi dịch vụ (application migrate monolith to microservices) <br> - Thực hiện tái cấu trúc cấu trúc dữ liệu và quy trình làm việc (data and workflow restructuring) phục vụ phân rã dịch vụ | 25/05/2026 | 25/05/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 3 | - Tìm hiểu quy trình xây dựng và xác thực cho ứng dụng đơn trang (create and authenticate single page application) <br> - **Thực hành:** Tích hợp phân hệ quản lý định danh người dùng sử dụng amazon cognito và cấu hình mã hóa ssl cho ứng dụng serverless (setting up ssl for your serverless app) | 26/05/2026 | 26/05/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 4 | - Nghiên cứu mô hình tương tác backend serverless giữa hàm xử lý aws lambda với kho lưu trữ dữ liệu amazon s3 và cơ sở dữ liệu amazon dynamodb <br> - **Thực hành:** Xây dựng giao diện frontend hoàn chỉnh để thực hiện gọi truy vấn dữ liệu thông qua cổng kết nối api gateway | 27/05/2026 | 27/05/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 5 | - Tìm hiểu cơ chế truyền thông điệp và xử lý sự kiện trong kiến trúc vi dịch vụ (microservices messaging and eventing) <br> - **Thực hành:** Cấu hình luồng xử lý đơn hàng tự động sử dụng kết hợp hàng đợi tin nhắn amazon sqs, dịch vụ thông báo sự kiện amazon sns và bộ điều phối tiến trình aws step functions | 28/05/2026 | 28/05/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 6 | - Nghiên cứu quy trình tự động hóa phát hành và triển khai ứng dụng đám mây (auto-release apps) <br> - **Thực hành:** Ứng dụng bộ công cụ quản lý mô hình serverless aws sam để đóng gói hạ tầng và thực hiện trải nghiệm, tích hợp các mô hình dịch vụ trí tuệ nhân tạo (ai services on aws) | 29/05/2026 | 29/05/2026 | <https://cloudjourney.awsstudygroup.com/> |

---

### Kết quả đạt được tuần 6:

* Nắm vững tư duy kiến trúc phân rã hệ thống, phân tích thành công phương pháp luận dịch chuyển mã nguồn khối cồng kềnh monolith sang các cấu phần nhỏ gọn trong mô hình microservices mà không gây đứt gãy luồng xử lý nghiệp vụ chính.
* Khởi tạo và xây dựng hoàn chỉnh ứng dụng đơn trang single page application, cấu hình tích hợp thành công bộ giải pháp quản lý vòng đời người dùng và xác thực tập trung bảo mật cao bằng amazon cognito.
* Làm chủ kỹ thuật cấu hình chứng chỉ bảo mật mã hóa đường truyền ssl cho toàn bộ hạ tầng phân hệ ứng dụng serverless, bảo vệ luồng dữ liệu tương tác của người dùng lớp biên một cách toàn vẹn.
* Triển khai xây dựng hệ thống backend serverless hiệu năng cao, lập trình các hàm tác vụ trên aws lambda tương tác mượt mà trong việc trích xuất tệp tài nguyên từ amazon s3 và cập nhật trạng thái dữ liệu vào các bảng lưu trữ amazon dynamodb.
* Thiết lập hoàn chỉnh cổng kết nối api gateway làm đầu mối tiếp nhận dữ liệu, liên kết thông suốt luồng gọi lệnh từ giao diện frontend lớp ngoài về hệ thống logic xử lý lớp trong.
* Xây dựng thành công hệ thống truyền tin liên dịch vụ bất đồng bộ dựa trên sự kiện, ứng dụng amazon sqs để gom luồng dữ liệu giao dịch tránh nghẽn mạch kết hợp amazon sns để phát tán các thông điệp trạng thái hệ thống theo thời gian thực.
* Thiết kế và vận hành thành công bộ điều phối luồng công việc phức tạp aws step functions, tự động hóa chuỗi xử lý trạng thái đơn hàng đa tầng một cách trực quan, chính xác và có khả năng phục hồi lỗi cao.
* Tự động hóa hoàn toàn chu trình đóng gói và phát hành ứng dụng thông qua việc cấu hình bộ công cụ dòng lệnh ứng dụng aws sam, tối ưu hóa tốc độ triển khai tài nguyên hạ tầng serverless lên môi trường cloud production.
* Trải nghiệm ứng dụng thực tế và nắm bắt phương thức tích hợp các nhóm dịch vụ trí tuệ nhân tạo ai services trên hạ tầng aws vào các bài toán phân tích, nâng cao năng lực thông minh cho các cấu phần thuộc hệ sinh thái.