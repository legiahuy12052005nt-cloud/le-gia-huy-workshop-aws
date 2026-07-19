---
title: "Worklog Tuần 5"
date: 2026-05-18
weight: 5
chapter: false
pre: " <b> 1.5. </b> "
---

### Mục tiêu tuần 5:

* Nghiên cứu và triển khai hệ thống quản trị định danh tập trung, phân cấp ranh giới quyền hạn an toàn và đánh giá tuân thủ tiêu chuẩn an ninh mạng trên đám mây.
* Thiết lập các lớp bảo vệ toàn diện cho ứng dụng tại tầng biên và quản lý vòng đời khóa mã hóa dữ liệu.
* Xây dựng kiến trúc kết nối mạng phẳng quy mô lớn và lập cấu hình chiến lược sao lưu khôi phục dữ liệu tự động nhằm tối ưu hóa độ tin cậy hệ thống.

---

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| 2 | - Nghiên cứu giải pháp quản lý truy cập tập trung đa tài khoản ứng dụng cơ chế single sign-on thông qua amazon sso cho toàn bộ cấu trúc tổ chức aws organizations <br> - **Thực hành:** Thiết lập và cấu hình ranh giới quyền hạn tối đa iam permission boundary để kiểm soát chặt chẽ giới hạn phân quyền cho người dùng | 18/05/2026 | 11/05/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 3 | - Tìm hiểu cơ chế thắt chặt an ninh bằng cách giới hạn quyền chuyển giao vai trò sử dụng các điều kiện cấu hình policy (limiting role transfer by condition) <br> - **Thực hành:** Kích hoạt và thiết lập cấu hình trung tâm giám sát an ninh aws security hub để tự động quét, đối chiếu hệ thống với các khung tiêu chuẩn kiểm thử benchmark quốc tế | 19/05/2026 | 19/05/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 4 | - Nghiên cứu cơ chế bảo vệ ứng dụng và các cổng kết nối dữ liệu api chống lại các lỗ hổng bảo mật ứng dụng web bằng tường lửa ứng dụng web aws waf <br> - **Thực hành:** Khởi tạo dịch vụ quản lý khóa mật mã tập trung aws kms để thực thi tác vụ sinh khóa, mã hóa và bảo vệ tài nguyên dữ liệu bền vững | 20/05/2026 | 20/05/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 5 | - Thiết lập kế hoạch bảo vệ an toàn dữ liệu, tự động hóa quy trình sao lưu và khôi phục tài nguyên đa dịch vụ trên hệ thống bằng aws backup <br> - **Thực hành:** Cấu hình liên kết định tuyến cục bộ giữa các phân vùng mạng ảo độc lập vpcs thông qua cơ chế vpc peering | 21/05/2026 | 22/05/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 6 | - Nghiên cứu giải pháp thiết kế kiến trúc mạng doanh nghiệp lớn, loại bỏ cấu trúc liên kết chồng chéo phức tạp bằng mô hình quản lý tập trung liên vùng <br> - **Thực hành:** Triển khai khởi tạo và định tuyến luồng dữ liệu truyền thông qua bộ định tuyến đám mây trung tâm aws transit gateway | 22/05/2026 | 23/05/2026 | <https://cloudjourney.awsstudygroup.com/> |

---

### Kết quả đạt được tuần 5:

* Triển khai cấu hình thành công phân hệ quản lý định danh tập trung amazon sso cho tổ chức, giúp đơn giản hóa quy trình đăng nhập một lần vào hệ thống đa tài khoản đám mây mà vẫn bảo đảm tính an toàn bảo mật cao.
* Làm chủ kỹ thuật thiết lập chính sách iam permission boundary, xây dựng hàng rào ranh giới an toàn ngăn chặn tuyệt đối các hành vi tự leo thang đặc quyền của người dùng cấu hình lớp dưới.
* Ứng dụng thành thạo các khóa điều kiện condition trong mã lệnh cấu hình chính sách để kiểm soát và giới hạn nghiêm ngặt luồng chuyển giao quyền hạn vai trò, phòng chống các lỗ hổng lạm dụng đặc quyền chuyển giao role transfer trái phép.
* Thiết lập vận hành hoàn chỉnh trung tâm điều phối an ninh aws security hub, trích xuất thành công các báo cáo phân tích lỗ hổng cấu hình tự động và chuẩn hóa hạ tầng theo bộ tiêu chuẩn an toàn thông tin đám mây.
* Xây dựng và áp dụng thành công các quy tắc tường lửa ứng dụng web aws waf bao gồm thiết lập danh sách trắng, danh sách đen, chặn đứng các chuỗi tấn công khai thác ứng dụng web và bảo vệ toàn vẹn các điểm cuối dịch vụ api backend.
* Khởi tạo hệ thống quản trị mã hóa aws kms, cấu hình cơ chế tự động xoay vòng khóa bảo mật và tích hợp mã hóa thành công các tài nguyên lưu trữ dữ liệu lõi của hệ sinh thái.
* Thiết kế hoàn chỉnh kế hoạch sao lưu dự phòng tự động tập trung thông qua giải pháp aws backup, bảo đảm dữ liệu toàn hệ thống được đóng gói định kỳ và sẵn sàng ứng cứu khôi phục thảm họa với độ sẵn sàng cao.
* Cấu hình thông suốt đường truyền kết nối bảo mật tốc độ cao, độ trễ thấp giữa các phân vùng mạng ảo lập vpcs biệt lập bằng công nghệ vpc peering phục vụ truyền thông dữ liệu nội bộ an toàn.
* Thiết kế và vận hành thành công trung tâm điều phối mạng phẳng aws transit gateway, tích hợp gộp toàn bộ các kết nối liên vùng và liên mạng ảo về một đầu mối xử lý duy nhất, giúp tối ưu hóa sơ đồ cấu trúc mạng ứng dụng đám mây quy mô lớn, rành mạch và dễ dàng mở rộng hạ tầng.