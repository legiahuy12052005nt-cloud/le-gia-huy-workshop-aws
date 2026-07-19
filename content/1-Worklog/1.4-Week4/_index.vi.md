---
title: "Worklog Tuần 4"
date: 2026-05-11
weight: 4
chapter: false
pre: " <b> 1.4. </b> "
---


### Mục tiêu tuần 4:

* Nghiên cứu sâu và thực hành cấu hình các nhóm giải pháp giám sát hệ thống, tự động hóa quản trị và quản lý tài nguyên đám mây theo mô hình phân cấp an toàn.
* Tìm hiểu quy trình công nghệ dịch chuyển và di cư toàn diện hệ thống máy chủ ảo và cơ sở dữ liệu lên nền tảng điện toán đám mây.
* Tiếp cận tư duy khởi tạo, quản lý tài nguyên tự động bằng mã nguồn thông qua các công cụ khai báo hạ tầng dạng mã.

---

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| 2 | - Tìm hiểu cơ chế tổ chức và quản lý tài nguyên quy mô lớn bằng phân hệ tag và resource groups <br> - **Thực hành:** Thiết lập chính sách kiểm soát quyền hạn phân cấp cho dịch vụ ec2 dựa trên điều kiện tag thông qua dịch vụ quản lý định danh iam | 11/08/2025 | 11/08/2025 | <https://cloudjourney.awsstudygroup.com/> |
| 3 | - Nghiên cứu giải pháp tự động hóa quản trị cấu hình hệ thống và thực thi tác vụ tập trung bằng aws system manager <br> - **Thực hành:** Triển khai kết nối quản trị, tương tác dòng lệnh bảo mật từ xa thông qua cấu phần session manager (thay thế SSH truyền thống) | 12/08/2025 | 12/08/2025 | <https://cloudjourney.awsstudygroup.com/> |
| 4 | - Tìm hiểu cơ chế thu thập số liệu và giám sát hiệu năng tài nguyên thời gian thực sử dụng amazon cloudwatch phối hợp trực quan hóa bảng điều khiển bằng công cụ grafana <br> - **Thực hành:** Lập trình viết hàm xử lý serverless trên aws lambda để triển khai tác vụ tự động tắt máy chủ theo lịch trình và liên kết webhook bắn thông báo cảnh báo bảo mật về kênh slack | 13/08/2025 | 13/08/2025 | <https://cloudjourney.awsstudygroup.com/> |
| 5 | - Nghiên cứu lý thuyết và quy trình di cư hệ thống (migration matrices): <br>&emsp; + Dịch chuyển toàn bộ hệ thống máy chủ ảo hóa từ on-premises lên đám mây thông qua công cụ aws vm import/export <br>&emsp; + Giải pháp chuyển đổi sơ đồ cấu trúc dữ liệu bằng schema conversion tool (sct) và đồng bộ, di cư cơ sở dữ liệu bằng aws database migration service (dms) | 14/08/2025 | 15/08/2025 | <https://cloudjourney.awsstudygroup.com/> |
| 6 | - Tiếp cận tư duy kiến trúc hạ tầng dạng mã (infrastructure as code) để tự động hóa vòng đời tài nguyên <br> - **Thực hành:** Xây dựng, biên dịch và triển khai các tệp tin cấu hình template của dịch vụ aws cloudformation để khởi tạo hạ tầng tự động | 15/08/2025 | 15/08/2025 | <https://cloudjourney.awsstudygroup.com/> |

---

### Kết quả đạt được tuần 4:

* Làm quen và ứng dụng thành thạo cơ chế gắn thẻ tag phục vụ công tác phân loại, nhóm tài nguyên thông qua bộ công cụ resource groups, giúp tối ưu hóa quy trình quản trị hạ tầng quy mô lớn.
* Thiết lập thành công các chính sách cấu hình iam policy dựa trên điều kiện thuộc tính gắn thẻ tag, kiểm soát chặt chẽ và phân cấp đặc quyền truy cập vào các máy chủ ec2 theo đúng nguyên tắc bảo mật tối thiểu.
* Loại bỏ hoàn toàn phương thức kết nối lộ lọt cổng port ssh truyền thống bằng việc cấu hình thành công aws system manager kết hợp session manager, giúp thiết lập kênh kết nối mã hóa an toàn tuyệt đối từ xa vào hệ điều hành máy chủ ec2.
* Triển khai hoàn chỉnh hệ thống giám sát hiệu năng kiểm soát hạ tầng đa tầng:
  * Thu thập số liệu chỉ số tài nguyên hệ thống thông qua các bộ lọc chỉ số của amazon cloudwatch và tích hợp hiển thị trực quan hóa lên các dashboard nâng cao của grafana.
  * Tối ưu hóa chi phí vận hành bằng cách viết mã lệnh thực thi hướng sự kiện trên aws lambda, tự động quét và tắt các máy chủ không sử dụng, đồng thời đồng bộ trạng thái thời gian thực về kênh truyền thông slack của đội ngũ kỹ thuật.
* Nắm vững tư duy chiến lược và quy trình công nghệ chuyển dịch hệ thống:
  * Hiểu phương thức chuyển đổi và đóng gói ảnh đĩa ảo từ hạ tầng cục bộ lên ec2 ami bằng aws vm import/export.
  * Thành thạo mô hình phối hợp giữa sct để bóc tách, tái cấu trúc lược đồ dữ liệu dị thể và cấu hình dịch vụ dms để bơm, di cư luồng dữ liệu thực tế liên tục giữa các hệ quản trị cơ sở dữ liệu đích mà không gây gián đoạn dịch vụ.
* Đọc hiểu cấu trúc văn bản khai báo hạ tầng, viết thành công các tệp mẫu khai báo của dịch vụ aws cloudformation để thực thi triển khai, cập nhật và hủy bỏ toàn bộ hệ thống tài nguyên đám mây một cách tự động, chuẩn hóa và nhất quán.