---
title: "Tích hợp hệ thống và cấu hình cổng API"
date: 2026-07-05
weight: 3
chapter: false
pre: " <b> 5.3.3. </b> "
---

#### Cấu hình amazon sqs trigger (kết nối hệ thống hướng sự kiện)

Để hoàn thiện kiến trúc hướng sự kiện (event-driven) của hệ sinh thái, chúng em tiến hành cấu hình hàng đợi amazon sqs làm nguồn kích hoạt (trigger) trực tiếp cho hàm xử lý lambda worker vòng trong. Việc này giúp hàm worker tự động thức dậy xử lý log mỗi khi có tin nhắn mới đẩy vào hàng đợi.

1. Tại giao diện quản lý cấu hình của hàm PhishShield-LambdaWorker, tìm và nhấn chọn vào nút + add trigger.
2. Tại màn hình cấu hình nguồn kích hoạt (trigger configuration), tiến hành lựa chọn thông số:
   * Chọn dịch vụ: click vào ô tìm kiếm và chọn hàng đợi sqs từ danh sách hệ thống.
   * sqs queue: click vào ô này để hệ thống tự động liệt kê, sau đó chọn chính xác tên hàng đợi PhishShield-DeepAnalysisQueue.
   * các thông số điều phối hiệu năng bao gồm batch size (10) và batch window (0 seconds) được chúng em giữ nguyên theo cấu hình mặc định của hệ thống nhằm tối ưu hóa tài nguyên trong hạn mức gói aws free tier.
3. Nhấn chọn nút add ở góc dưới để hoàn tất việc thiết lập mạch liên kết dữ liệu bất đồng bộ.


---

#### Tạo cổng kết nối amazon api gateway (api entry gate)

Cổng kết nối api gateway đóng vai trò làm điểm tiếp nhận duy nhất mở công khai ra internet để hứng toàn bộ các yêu cầu kiểm tra liên kết độc hại từ tiện ích chrome extension và bot discord gửi về.

1. Truy cập vào giao diện quản lý của dịch vụ amazon api gateway. Tại màn hình lựa chọn các loại hình kiến trúc api, tìm đến phân hệ mục rest api và nhấn chọn vào nút build màu cam.
2. Tại màn hình thiết lập thông số cấu hình cho api mới, tiến hành điền các thông tin tiêu chuẩn cho đồ án bao gồm:
   * protocol: chọn mục new api.
   * api name (tên hiển thị api): nhập tên định danh là PhishShield-API.
   * endpoint type: lựa chọn cấu trúc regional để tối ưu hóa băng thông và giảm thiểu độ trễ phản hồi trong khu vực đông nam á.
3. Nhấn chọn nút create api màu cam ở góc dưới để hệ thống hoàn tất việc khởi tạo khung cổng kết nối vòng ngoài.

TẠO METHOD VÀ KẾT NỐI VÀO LAMBDA ROUTER
1.	Sau khi tạo xong API, tại giao diện quản lý tài nguyên (Resources), nhấn vào nút Create method.
2.	Cấu hình chi tiết cho Method như sau:
o	Method type: Chọn POST (vì Client sẽ gửi dữ liệu URL lên dưới dạng JSON body request).
o	Integration type: Chọn Lambda function.
o	Lambda proxy integration: BẬT tính năng này lên. ( Đây là yếu tố bắt buộc để Lambda Router đọc được dữ liệu JSON từ Client gửi lên ).
o	Lambda function: Chọn vùng us-east-1 và gõ tìm chọn đúng hàm PhishShield-LambdaRouter

#### Tạo phương thức (method) và kết nối vào lambda router

Sau khi khung cổng api gateway được khởi tạo, chúng em tiến hành cấu hình phương thức tiếp nhận dữ liệu để định tuyến các yêu cầu kiểm tra liên kết trực tiếp về hàm xử lý lambda router.

1. Tại giao diện quản lý tài nguyên (resources) của cổng phishshield-api vừa tạo, nhấn vào nút create method.
2. Tiến hành cấu hình chi tiết cho phương thức mới như sau:
   * method type: lựa chọn phương thức post (vì các ứng dụng agent client edge sẽ gửi dữ liệu chuỗi url lên hệ thống dưới dạng cấu trúc json body request).
   * integration type: lựa chọn mục lambda function.
   * lambda proxy integration: bật tính năng này lên. Đây là yếu tố bắt buộc mang tính cốt lõi để hàm lambda router có thể đọc và bóc tách toàn bộ cấu trúc dữ liệu json thô do trình duyệt của người dùng hoặc bot gửi lên.
   * lambda function: lựa chọn phân vùng khu vực us-east-1 và nhập tên tìm chọn chính xác hàm xử lý PhishShield-LambdaRouter.
3. Nhấn chọn nút create method hoàn tất.

#### Deploy api và lấy invoke url chính thức

1. Vẫn ở giao diện menu và click vào cái nút deploy api.
2. Một cửa sổ pop-up nhỏ sẽ hiện ra yêu cầu chọn môi trường (stage):
   * stage: nhấp vào hộp thả xuống và chọn *new stage*.
   * stage name: gõ chữ prod (đại diện cho môi trường production thực tế).

---

#### Deploy api và lấy invoke url chính thức

1. Vẫn ở giao diện menu và click vào cái nút deploy api.
2. Một cửa sổ pop-up nhỏ sẽ hiện ra yêu cầu chọn môi trường (stage):
   * stage: nhấp vào hộp thả xuống và chọn *new stage*.
   * stage name: gõ chữ prod (đại diện cho môi trường production thực tế).

---

#### Thử nghiệm và kiểm tra luồng kết quả tại client layer (git bash)

Mở git bash ra gõ lệnh bắn phá hệ thống ngay lập tức bằng đoạn mã này:

```bash
curl -X POST [https://e7202kmo0i.execute-api.us-east-1.amazonaws.com/prod](https://e7202kmo0i.execute-api.us-east-1.amazonaws.com/prod) \
  -H "Content-Type: application/json" \
  -d '{"url": "[http://signin-paypal-secure-update.com](http://signin-paypal-secure-update.com)"}'