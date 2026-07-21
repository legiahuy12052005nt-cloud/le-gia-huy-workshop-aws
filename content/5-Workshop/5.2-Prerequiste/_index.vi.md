---
title: "Kiến trúc giải pháp"
date: 2026-07-05
weight: 2
chapter: false
pre: " <b> 5.2. </b> "
---

Hệ thống áp dụng mô hình phân tách trách nhiệm linh hoạt và toàn diện giữa tầng biên client edge (đánh chặn, cách ly và thu thập dữ liệu cấu trúc chủ động) và tầng xử lý trung tâm cloud backend (định tuyến tốc độ cao, xử lý phân tán đa vùng sẵn sàng, lưu trữ bền vững và phân tích mô hình trí tuệ nhân tạo chuyên sâu).

![Sơ đồ kiến trúc PhishShield Ecosystem](/images/2-Proposal/diagram.jpg)

Ảnh Diagram : https://drive.google.com/file/d/1osh2sEgYEpO4q6eBzNNVTcGM7DniHgWv/view?usp=drive_link
#### Các dịch vụ hạ tầng thuộc nền tảng đám mây sử dụng

* aws waf: Tường lửa ứng dụng web đóng vai trò lọc kịch bản tấn công nguy hiểm, bảo vệ toàn vẹn các điểm kết nối biên trước luồng dữ liệu độc hại.
* amazon api gateway: Điểm tiếp nhận trung tâm cổng kết nối, thu thập siêu dữ liệu url và log an ninh từ client edge endpoint chuyển tiếp qua giao thức bảo mật https.
* aws lambda: Triển khai kiến trúc serverless linh hoạt với hàm điều phối định tuyến phân tích nhanh (lambda url evaluation router) và hàm xử lý hậu trường bất đồng bộ.
* amazon dynamodb: Cơ sở dữ liệu nosql cấu hình lớp lưu trữ bộ đệm tốc độ cao (high-speed cache), phản hồi trực tiếp kết quả định danh danh sách đen để đáp ứng mục tiêu kpi độ trễ cực thấp.
* application load balancer: Bộ cân bằng tải ứng dụng thông minh chịu trách nhiệm điều phối dòng dữ liệu kết nối đồng đều đến các cụm máy chủ xử lý lớp trong.
* amazon ec2: Cụm máy chủ ảo hóa xử lý logic nghiệp vụ api phân tán chuyên sâu, được cấu hình tự động mở rộng và triển khai đa vùng sẵn sàng (multi-az) bên trong các phân vùng mạng public subnet bảo mật.
* cơ sở dữ liệu liên kết (db): Phân hệ lưu trữ dữ liệu có cấu trúc quan hệ, được cô lập an toàn trong các vùng mạng private subnet riêng biệt để phòng chống các nguy cơ khai thác thông tin trực diện.
* amazon s3: Vùng tài nguyên data lake lưu trữ cấu trúc tệp dữ liệu nhật ký định dạng json phục vụ mục đích giám sát lâu dài, đồng thời kết hợp làm kho chứa tài nguyên nội dung phân phối tĩnh.
* amazon bedrock: Nền tảng tích hợp trí tuệ nhân tạo thế hệ mới, gọi các mô hình nền tảng tiên tiến để thực thi tác vụ phân tích sâu bất đồng bộ (asynchronous deep analysis) kịch bản lừa đảo nâng cao.
* amazon cloudfront: Mạng lưới phân phối nội dung (content distribution) toàn cầu giúp tối ưu hóa bộ nhớ đệm và tăng tốc truyền tải dữ liệu đến thiết bị đầu cuối.
* phân hệ an ninh và quản trị hệ thống chéo (cross-cutting security & governance): Tích hợp đồng bộ các giải pháp quản lý khóa mã hóa vật lý aws kms, phân cấp đặc quyền tối thiểu aws iam, quản trị chuỗi mật mã bí mật aws secrets manager, tối ưu hóa hạn mức tài chính aws budgets, giám sát tài nguyên thời gian thực amazon cloudwatch và tự động hóa triển khai hạ tầng bằng mã lệnh aws cloudformation.

---

#### Thiết kế chi tiết các cấu phần hệ thống

* browser extension (manifest v3): Đóng vai trò lớp phòng thủ chủ động trực tiếp trên trình duyệt lõi chromium của người dùng, ứng dụng tiến trình service worker chạy ngầm background.js để tuần tra lưu lượng kết nối thời gian thực và thực thi lệnh bẻ lái sang giao diện overlay cách ly an toàn warning.html với thông điệp access denied ngay khi phát hiện bất thường.
* discord ingress bot: Phân hệ giám sát chủ động kênh truyền thông cộng đồng, lắng nghe luồng tin nhắn và tương tác nhóm, tự động bóc tách các liên kết lừa đảo nguy hiểm hoặc ngăn chặn kịp thời các rủi ro rò rỉ mã token danh tính chưa mã hóa, thực hiện lệnh xóa bỏ mã độc trong micro-giây và phát alert thông tin cảnh báo an ninh thời gian thực.