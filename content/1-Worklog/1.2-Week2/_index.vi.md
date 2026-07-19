---
title: "Worklog Tuần 2"
date: 2026-04-27
weight: 2
chapter: false
pre: " <b> 1.2. </b> "
---

### Mục tiêu tuần 2:
* Tìm hiểu sâu hơn về hạ tầng mạng ảo, cách cấu hình máy chủ, phân quyền ứng dụng và lưu trữ dữ liệu tĩnh trên AWS.
* Thực hành xây dựng một hệ thống mạng cơ bản và chạy thử nghiệm website tĩnh.

### Các công việc cụ thể trong tuần:

| Thứ | Nội dung công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| :--- | :--- | :---: | :---: | :--- |
| **2** | - Học lý thuyết về hệ thống mạng và dải IP đám mây.<br>- Thực hành: Thiết kế và triển khai hạ tầng mạng ảo Deploy network infrastructure with Amazon Virtual Private Cloud (Amazon VPC). Tạo vpc, subnet công khai và bảng định tuyến. | 27/04/2026 | 27/04/2026 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |
| **3** | - Tìm hiểu cách khởi tạo và quản lý các tài nguyên máy chủ ảo.<br>- Thực hành: Làm quen và triển khai ứng dụng trên máy chủ ảo Getting Started and Deploying Applications on Amazon Compute Cloud (Amazon EC2). | 28/04/2026 | 28/04/2026 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |
| **4** | - Nghiên cứu cơ chế bảo mật giữa các ứng dụng và dịch vụ đám mây.<br>- Thực hành: Cấp quyền cho ứng dụng truy cập các dịch vụ của AWS thông qua IAM Role (AWS IAM) để đảm bảo an toàn cho mã nguồn. | 29/04/2026 | 29/04/2026 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |
| **5** | - Tìm hiểu về các công cụ lập trình lập trình từ xa trên nền tảng web.<br>- Thực hành: Sử dụng môi trường phát triển Cloud IDE ngay trên trình duyệt với AWS Cloud9 để viết và chạy các đoạn mã script thử nghiệm hệ thống. | 30/04/2026 | 30/04/2026 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |
| **6** | - Tìm hiểu về các loại hình lưu trữ đối tượng và hosting tệp tĩnh.<br>- Thực hành: Lưu trữ và cấu hình chạy trang web tĩnh Hosting static website with Amazon S3. Tải các file giao diện html, css lên bucket và kích hoạt tính năng chạy web công khai. | 01/05/2026 | 01/05/2026 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |

### Kết quả đạt được trong tuần 2:

* Về mạng: Em đã tự tay thiết lập được một môi trường mạng hoàn chỉnh với Amazon Virtual Private Cloud (Amazon VPC), biết cách chia dải IP và cấu hình cho phép Internet Gateway đi ra ngoài mạng internet.
* Về máy chủ: Hiểu được cách hoạt động của máy chủ ảo Amazon Compute Cloud (Amazon EC2), cài đặt thành công ứng dụng mẫu và quản lý các cổng kết nối bằng Security Group.
* Về bảo mật ứng dụng: Áp dụng được IAM Role (AWS IAM) gắn vào máy chủ EC2 để ứng dụng tự gọi các API khác của hệ thống mà không cần phải lưu file cấu hình tài khoản (Access Key/Secret Key) bên trong mã nguồn.
* Về công cụ code: Sử dụng thành thạo môi trường AWS Cloud9 để thao tác lệnh và chỉnh sửa code trực tiếp trên web mà không cần cài phần mềm nặng về máy tính.
* Về lưu trữ tĩnh: Hiểu được dịch vụ Amazon S3 và hoàn thành bài lab đưa một trang web tĩnh lên mạng internet với chi phí rất tối ưu và tốc độ tải trang nhanh.