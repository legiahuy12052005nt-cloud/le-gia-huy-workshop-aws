---
title: "Giải pháp bảo mật và phân quyền cơ bản"
date: 2026-07-05
weight: 2
chapter: false
pre: " <b> 5.2.2 </b> "
---

Yếu tố an toàn thông tin của chính hệ thống phòng thủ được chúng em đặt lên hàng đầu thông qua các nguyên tắc thiết kế sau:

* **Hạn chế tối đa việc công khai tài nguyên (public resource):** Trong toàn bộ kiến trúc hệ thống, chỉ có duy nhất cổng tiếp nhận amazon api gateway được mở công khai ra ngoài internet để nhận dữ liệu từ các agent client edge gửi về. Tất cả các thành phần còn lại như các hàm xử lý aws lambda, cơ sở dữ liệu amazon dynamodb, hàng đợi amazon sqs và kho lưu trữ amazon s3 đều được đóng kín hoàn toàn trong mạng nội bộ, không thể bị truy cập trực tiếp từ bên ngoài.
* **Tuyệt đối không sử dụng hard-code access key:** Chúng em tuân thủ nghiêm ngặt quy định không lưu trữ cố định các chuỗi mã bí mật như access key hay secret key bên trong mã nguồn ứng dụng, tệp cấu hình của chrome extension hay discord bot để phòng ngừa rủi ro bị lộ mã nguồn.
* **Phân quyền dựa trên iam role:** Tất cả các quyền hạn tương tác giữa các dịch vụ bên trong hệ thống cloud đều được cấp phát thông qua cơ chế gán các iam role trực tiếp cho các hàm aws lambda. Các quyền này được xác thực tự động và có thời hạn ngắn.
* **Áp dụng nguyên tắc đặc quyền tối thiểu (principle of least privilege):** Các iam role được chúng em cấu hình chia nhỏ quyền tối đa cho từng hàm xử lý cụ thể. Ví dụ: hàm lambda làm nhiệm vụ nhận log ở vòng ngoài chỉ có duy nhất quyền ghi tin nhắn vào hàng đợi amazon sqs chứ không có quyền đọc hay xóa; ngược lại, hàm lambda phân tích sâu ở vòng trong mới được cấp quyền đọc từ hàng đợi và ghi vào amazon s3. Điều này đảm bảo nếu một thành phần bị tấn công thì toàn bộ hệ thống vẫn không bị ảnh hưởng dây chuyền.