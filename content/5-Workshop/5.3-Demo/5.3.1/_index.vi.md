---
title: "Chuẩn bị môi trường"
date: 2026-07-05
weight: 1
chapter: false
pre: " <b> 5.3.1. </b> "
---

#### Tạo bảng amazon dynamodb

Đây là nơi lưu trữ danh sách các liên kết an toàn (whitelist) và liên kết độc hại (blacklist) để hệ thống của chúng em thực hiện tác vụ tra cứu trạng thái dữ liệu với tốc độ cao.

1. Truy cập vào giao diện quản lý của dịch vụ amazon dynamodb. Sau khi màn hình trang chủ điều khiển hiện ra, nhìn sang thanh menu bên trái hoặc khu vực chính giữa màn hình, tìm và nhấn chọn vào nút create table.
2. Tiến hành điền chính xác các thông tin thông số cấu hình tiêu chuẩn cho đồ án như sau:
   * table name: nhập tên gọi phishshield-threatintelcache
   * partition key: gõ chữ url và lựa chọn kiểu cấu trúc dữ liệu đi kèm là string

![tạo bảng bước 1](/images/5-Workshop/Images/1.jpg)

![cấu hình partition key bước 2](/images/5-Workshop/Images/2.jpg)

#### Tạo kho lưu trữ amazon s3 bucket

Thành phần này đóng vai trò làm threat intel data lake để lưu trữ tập trung toàn bộ các tệp tin nhật ký log chứa bằng chứng độc hại định dạng json gửi về từ hệ thống.

1. Truy cập vào giao diện quản lý của dịch vụ amazon s3. Tại màn hình trang chủ điều khiển, tìm và nhấn chọn vào nút create bucket màu cam.
2. Tiến hành điền đầy đủ và chính xác các thông tin thông số cấu hình tiêu chuẩn cho đồ án như sau:
   * bucket name: nhập tên gọi duy nhất là phishshield-phishing-evidence-storage
   * aws region: lựa chọn phân vùng us east (n. virginia) us-east-1 để đảm bảo tính đồng bộ hạ tầng dữ liệu với bảng cơ sở dữ liệu đã tạo trước đó.
   * object ownership: tích chọn mục acls disabled (recommended) để quản lý quyền truy cập tệp tin một cách an toàn thông qua các chính sách đám mây.
   * block public access settings for this bucket: hãy đảm bảo dấu tích chọn tại ô block all public access đã được giữ nguyên. Theo đúng nguyên tắc đặc quyền tối thiểu (principle of least privilege) của đồ án, chúng em đóng kín hoàn toàn tài nguyên này với internet, mã nguồn chạy trong hàm lambda sau này sẽ dùng iam role nội bộ để ghi tệp tin chứ không mở công khai ra ngoài.

![tạo bucket s3 bước 3](/images/5-Workshop/Images/3.jpg)

---

#### Tạo hàng đợi tin nhắn amazon sqs queue

Thành phần này đóng vai trò làm bộ đệm điều phối ở giữa lớp tiếp nhận dữ liệu vòng ngoài và lớp phân tích sâu bất đồng bộ vòng trong nhằm chống nghẽn mạch hệ thống khi dính hiện tượng bão log dữ liệu.

1. Truy cập vào giao diện quản lý của dịch vụ amazon sqs. Tại màn hình trang chủ điều khiển, tìm và nhấn chọn vào nút create queue màu cam nằm ở góc phía bên phải màn hình.
2. Cấu hình chi tiết các thông số kỹ thuật cho hàng đợi như sau:
   * type: lựa chọn loại standard để hệ thống đạt được băng thông throughput tối đa và tốc độ phân phối dữ liệu cực nhanh.
   * name: gõ tên hàng đợi là PhishShield-DeepAnalysisQueue
3. Tại phân hệ configuration: Giữ nguyên toàn bộ các thông số cấu hình thời gian mặc định do hệ thống cung cấp (bao gồm visibility timeout là 30 seconds, message retention period là 4 days,...). Nhấn nút hoàn thành để khởi tạo.

![tạo queue sqs bước 4](/images/5-Workshop/Images/4.jpg)

#### Tạo iam role cho lambda router

Thành phần này cấp quyền cho hàm xử lý lambda router có thể ghi nhật ký hoạt động và tương tác một cách an toàn với các dịch vụ đám mây nội bộ theo đúng cấu trúc phân quyền an ninh.

1. Truy cập vào giao diện quản lý của dịch vụ iam. Tại thanh menu bên trái, nhấn chọn vào mục roles, sau đó nhấn chọn tiếp nút create role.
2. Tại phân đoạn bước 1 (select trusted entity):
   * trusted entity type: tích chọn vào ô mục aws service
   * service or use case: tìm kiếm và chọn mục lambda từ danh sách hiển thị dữ liệu
   * nhấn chọn vào nút next để chuyển sang bước tiếp theo

![chọn trusted entity bước 1](/images/5-Workshop/Images/5.jpg)

3. Tại phân đoạn bước 2 (add permissions):
   * tại ô tìm kiếm cấu hình policy, gõ chính xác chuỗi từ khóa awslambdabasicexecutionrole và tích chọn vào ô vuông bên cạnh (đây là nhóm quyền hạn nền tảng để các hàm lambda có thể thực hiện ghi dữ liệu nhật ký log hệ thống ra dịch vụ cloudwatch)
   * tạm thời chúng em chỉ tích chọn một quyền cơ bản này trước để thiết lập khung sinh tồn ban đầu, sau đó nhấn chọn vào nút next

![thêm quyền thực thi bước 2](/images/5-Workshop/Images/6.jpg)

4. Tại phân đoạn bước 3 (name, review, and create):
   * role name: nhập chính xác tên định danh là PhishShield-LambdaRouter-Role
   * cuộn trang xuống khu vực góc dưới cùng màn hình và nhấn chọn nút create role để hệ thống hoàn tất cấu trúc tạo lập quyền hạn

![đặt tên và hoàn thành bước 3](/images/5-Workshop/Images/7.jpg)

#### Thêm quyền truy cập amazon dynamodb và amazon sqs vào router role

1. Trong danh sách roles, click chuột vào PhishShield-LambdaRouter-Role.
2. Tại tab permissions, nhấn vào nút add permissions và chọn create inline policy từ danh sách hiển thị.
3. Ở giao diện tạo policy, nhìn sang góc phải trên cùng của trình soạn thảo và chuyển từ tab visual sang tab json rồi tiến hành dán đoạn code cấu hình sau:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "DynamoDBCacheAccess",
            "Effect": "Allow",
            "Action": [
                "dynamodb:GetItem"
            ],
            "Resource": "arn:aws:dynamodb:us-east-1:766443150358:table/PhishShield-ThreatIntelCache"
        },
        {
            "Sid": "SQSQueueAccess",
            "Effect": "Allow",
            "Action": [
                "sqs:SendMessage"
            ],
            "Resource": "arn:aws:sqs:us-east-1:766443150358:PhishShield-DeepAnalysisQueue"
        }
    ]
}

