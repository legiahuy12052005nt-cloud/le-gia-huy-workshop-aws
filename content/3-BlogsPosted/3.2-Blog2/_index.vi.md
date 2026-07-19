---
title: "Blog 2: Amazon GuardDuty"
date: 2026-06-24
weight: 2
chapter: false
pre: " <b> 3.2. </b> "
---

# Amazon GuardDuty: Bật Thám tử ngầm AI bảo vệ tài khoản AWS 24/7

Chào mọi người trong AWS Study Group! 

Khi quản lý một hệ thống trên Cloud, có bao giờ mọi người tự hỏi: "Liệu có ai đó đang âm thầm dò mật khẩu (Brute-force) máy chủ EC2 của mình không?" hay "Làm sao biết được có một API Key bị lộ đang gọi lệnh lạ từ một quốc gia khác để chuẩn bị phá hoại?"

Nếu ngồi rà soát hàng triệu dòng log thủ công hằng ngày thì bất khả thi. Để giải bài toán này, AWS cung cấp một trợ lý an ninh chạy bằng AI khá lợi hại: Amazon GuardDuty.

### Amazon GuardDuty là gì?
Hiểu đơn giản, GuardDuty giống như một thám tử ngầm thông minh liên tục tuần tra và giám sát toàn bộ hoạt động bên trong tài khoản AWS của mọi người.

Dịch vụ này sử dụng Machine Learning để phân tích hành vi. Nó tự động nhận diện đâu là hoạt động bình thường của hệ thống, đâu là hành vi bất thường của hacker để phát tín hiệu cảnh báo ngay lập tức.

### Thám tử ngầm này giám sát những gì?
Không cần cài đặt bất kỳ phần mềm (Agent) nào lên máy chủ làm chậm hệ thống, GuardDuty tự động phân tích ngầm dữ liệu từ các nguồn log cốt lõi:

* **AWS CloudTrail:** Phát hiện các cuộc gọi API bất thường (ví dụ: bỗng dưng có lệnh tạo hàng loạt EC2 cấu hình khủng ở một Region mọi người chưa bao giờ dùng — dấu hiệu bị hack tài khoản để đào coin).
* **VPC Flow Logs:** Phát hiện các luồng traffic đáng ngờ (ví dụ: máy chủ EC2 đang tự động kết nối và gửi dữ liệu ra ngoài cho các máy chủ ma độc hại - Command and Control Server).
* **DNS Logs:** Phát hiện các hành vi rà quét tên miền độc hại hoặc dính mã độc tống tiền (Ransomware).

### 3 ưu điểm cốt lõi giúp đơn giản hóa bài toán bảo mật
Thay vì phải tự xây dựng một hệ thống SIEM phức tạp, GuardDuty giải quyết bài toán an ninh nhờ 3 điểm cộng thực chiến:

* **Kích hoạt tức thì:** Chỉ cần vào Console bấm kích hoạt, dịch vụ sẽ tự cấu hình luồng quét log ngầm mà không cần can thiệp vào hạ tầng mạng hay cài đặt phức tạp.
* **Hiệu năng bằng 0 (Zero Overhead):** Vì GuardDuty thu thập log trực tiếp từ tầng hạ tầng độc lập của AWS nên nó hoàn toàn không tốn một phần trăm CPU hay RAM nào của ứng dụng đang chạy.
* **Cảnh báo thông minh theo cấp độ:** Hệ thống tự động phân loại mối đe dọa theo 3 mức (Thấp - Trung bình - Cao), giúp mọi người biết chính xác đâu là vấn đề nguy cấp cần ưu tiên xử lý ngay (ví dụ: Tài khoản Root đăng nhập từ IP lạ).

### Tổng kết
Chi phí của GuardDuty được tính dựa trên dung lượng log thực tế mà nó phân tích, có sẵn 30 ngày dùng thử miễn phí cho tài khoản mới. Đây là một mảnh ghép rất đáng cân nhắc nếu mọi người muốn nâng cấp hệ thống của mình lên mức Vận hành An toàn và Bền vững.

---

### Nguồn tham khảo 
* https://aws.amazon.com/vi/blogs/security/visualizing-amazon-guardduty-findings/

![Sơ đồ minh họa](/images/blog2.png)