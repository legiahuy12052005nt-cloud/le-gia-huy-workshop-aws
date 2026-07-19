---
title: "Các điều kiện tiên quyết"
date: 2026-07-05
weight: 3
chapter: false
pre: " <b> 5.3 </b> "
---

Để chuẩn bị cho quá trình hiện thực hóa kiến trúc hệ sinh thái phishshield từ bản vẽ lên môi trường chạy thực tế, chúng em đã thiết lập và cấu hình đầy đủ các điều kiện tiên quyết về mặt hạ tầng tài khoản, phân vùng triển khai, công cụ hỗ trợ và phân cấp quyền hạn như sau:

* Về tài khoản aws: Chúng em sử dụng tài khoản aws cá nhân đã kích hoạt thành công gói free tier phục vụ cho mục đích học tập và làm lab. Việc sử dụng tài khoản này giúp chúng em dễ dàng kiểm soát chi phí, tận dụng các hạn mức miễn phí của các dịch vụ không máy chủ để triển khai đồ án với chi phí tối ưu nhất.
* Về phân vùng (region) triển khai: Toàn bộ các dịch vụ trong hệ thống được chúng em thống nhất thiết lập cố định tại một khu vực là ap-southeast-1 (Singapore). Việc lựa chọn region này dựa trên hai yếu tố thực tế: khoảng cách địa lý gần Việt Nam giúp tối ưu hóa thời gian phản hồi (latency) cho các yêu cầu kiểm tra link từ chrome extension và discord bot gửi về, đồng thời đây cũng là trung tâm dữ liệu lớn hỗ trợ đầy đủ và sớm nhất các tính năng serverless nâng cao mà nhóm cần sử dụng.
* Về các công cụ quản trị và đóng gói hạ tầng:
    * aws cli: Được cài đặt trực tiếp trên máy tính cá nhân của các thành viên để thực hiện các thao tác quản trị hệ thống, kiểm tra trạng thái tài nguyên từ xa bằng giao diện dòng lệnh terminal mà không cần truy cập web console.
    * aws sam (serverless application model): Thay vì phải lên giao diện web bấm tay tạo từng dịch vụ rất mất thời gian và dễ sai sót, chúng em áp dụng giải pháp quản lý hạ tầng bằng mã (infrastructure as code) thông qua công cụ aws sam. Công cụ này giúp chúng em định nghĩa toàn bộ kiến trúc gồm api gateway, các hàm lambda, hàng đợi sqs và cơ sở dữ liệu dynamodb vào một tệp tin cấu hình cấu trúc chung dạng yaml. Khi cần chạy lab hoặc cập nhật hệ thống, nhóm chỉ cần thực hiện lệnh triển khai từ terminal để hệ thống tự động biên dịch và đẩy tài nguyên lên đám mây một cách đồng bộ.
* Về các quyền iam cần thiết để thực hiện lab: Do hệ thống được đóng gói và khởi tạo tự động thông qua dòng lệnh của aws sam từ máy tính cá nhân, tài khoản iam user cấu hình trong aws cli của chúng em bắt buộc phải được cấp phát các nhóm quyền hạn thực thi cốt lõi bao gồm:
    * Quyền tạo dựng cấu trúc an ninh: bao gồm các hành động iam:CreateRole, iam:DeleteRole, iam:PutRolePolicy và iam:AttachRolePolicy để công cụ aws sam có thể tự động sinh ra các iam role nội bộ có thời hạn dành riêng cho các hàm lambda xử lý dữ liệu.
    * Quyền điều phối dịch vụ serverless: tài khoản cần được phân các quyền quản trị đầy đủ trên các phân hệ tài nguyên trong đồ án bao gồm apigateway:*, lambda:*, sqs:*, dynamodb:*, s3:* và cloudwatch:* để đảm bảo không bị chặn hoặc báo lỗi thiếu quyền khi khởi tạo cổng kết nối, cơ sở dữ liệu, hàng đợi và các bộ lưu trữ nhật ký log.
    * Quyền gọi mô hình trí tuệ nhân tạo: bổ sung thêm quyền bedrock:InvokeModel và bedrock:GetGuardrail để hàm lambda thực hiện phân tích sâu có thể tương tác trực tiếp với các bộ lọc an toàn của amazon bedrock guardrails vòng trong.