---
title: "Worklog Tuần 3"
date: 2026-05-04
weight: 3
chapter: false
pre: " <b> 1.3. </b> "
---

### Mục tiêu tuần 3:
* Tìm hiểu giải pháp quản trị cơ sở dữ liệu, cách tối ưu chi phí với máy chủ cấu hình sẵn và cơ chế tự động mở rộng quy mô.
* Thiết lập hệ thống giám sát tài nguyên, phân giải tên miền lai và hoàn thành bài lab tổng hợp về ứng dụng web có tính sẵn sàng cao.

### Các công việc cụ thể trong tuần:

| Thứ | Nội dung công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| :--- | :--- | :---: | :---: | :--- |
| **2** | - Tìm hiểu lý thuyết về hệ quản trị cơ sở dữ liệu đám mây và giải pháp máy chủ thu nhỏ tối ưu chi phí.<br>- Thực hành: Create a database on Amazon Relational Database Service (Amazon RDS) để tạo cơ sở dữ liệu quan hệ và cấu hình bài lab Optimize compute costs with Amazon Lightsail (Amazon Lightsail). | 04/05/2026 | 04/05/2026 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |
| **3** | - Nghiên cứu cơ chế tự động tăng giảm số lượng máy chủ dựa theo lưu lượng truy cập thực tế của người dùng.<br>- Thực hành: Cấu hình phân hệ Automate Application Scaling with Amazon EC2 Autoscaling, thiết lập các điều kiện ngưỡng để hệ thống tự động thêm hoặc giảm bớt máy chủ ảo. | 05/05/2026 | 05/05/2026 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |
| **4** | - Tìm hiểu giải pháp quản lý tập trung và theo dõi trạng thái sức khỏe của toàn bộ hạ tầng dịch vụ.<br>- Thực hành: Cấu hình bài lab Create System Monitor with Amazon Cloudwatch để thu thập log, theo dõi biểu đồ CPU và tạo cảnh báo tự động về Email. | 06/05/2026 | 06/05/2026 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |
| **5** | - Nghiên cứu mô hình phân giải tên miền kết hợp giữa hạ tầng mạng local và mạng đám mây đám mây.<br>- Thực hành: Set up an integrated hybrid DNS system between Local and Amazon VPC environments with Amazon Route53 và thực hiện bài lab Using AWS CLI on Amazon EC2 (Windows/Ubuntu) để điều khiển máy chủ bằng dòng lệnh. | 07/05/2026 | 07/05/2026 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |
| **6** | - Tổng hợp toàn bộ các kiến thức đã học từ đầu kỳ thực tập đến nay để xây dựng mô hình kiến trúc chịu lỗi.<br>- Thực hành: Tham gia và hoàn thành bài lab lớn Highly Available Web Application Workshop, thiết kế hệ thống web chạy ổn định, tự động cân bằng tải và không bị gián đoạn khi có sự cố. | 08/05/2026 | 08/05/2026 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |

### Kết quả đạt được trong tuần 3:

* Về cơ sở dữ liệu và tối ưu: Em đã biết cách tự tạo và kết nối một cụm cơ sở dữ liệu hoạt động độc lập bằng Amazon Relational Database Service (Amazon RDS), đồng thời biết cách dùng Amazon Lightsail để triển khai nhanh các ứng dụng nhỏ nhằm tiết kiệm ngân sách.
* Về tính mở rộng và giám sát: Thành thạo các bước thiết lập Amazon EC2 Autoscaling để hệ thống tự động co giãn máy chủ khi bị tải cao. Sử dụng thành công Amazon Cloudwatch để làm bảng điều khiển theo dõi tài nguyên trực quan.
* Về hệ thống DNS và dòng lệnh: Hiểu nguyên lý cấu hình định tuyến tên miền lai bằng Amazon Route53 giữa môi trường nội bộ và đám mây, biết cách cài đặt và chạy các câu lệnh AWS CLI thuần thục trên cả hai hệ điều hành Windows và Ubuntu.
* Về kiến trúc tổng hợp: Hoàn thành trọn vẹn bài Highly Available Web Application Workshop, giúp em hình dung rõ ràng cách phối hợp các dịch vụ mạng, máy chủ, cơ sở dữ liệu và bảo mật để tạo ra một hệ thống ứng dụng web chạy Production thực tế.