---
title: "Bản đề xuất dự án"
date: 2026-07-05
weight: 2
chapter: false
pre: " <b> 2. </b> "
---

# PhishShield Ecosystem  
## Giải pháp AWS Serverless hợp nhất cho phòng thủ và đánh chặn lừa đảo chủ động tại Client Edge  

### 1. Tóm tắt điều hành  
**PhishShield Ecosystem** là một hệ sinh thái an ninh mạng đa tầng được thiết kế nhằm chủ động phát hiện, đánh chặn và cô lập các mối đe dọa từ kỹ nghệ thao túng tâm lý (Social Engineering) và tấn công lừa đảo chiếm đoạt thông tin (Credential Harvesting). Hệ thống thực thi kiến trúc Zero-Trust bằng cách kết hợp sức mạnh kiểm soát tại ranh giới người dùng (Client-Edge bao gồm Chrome Extension Manifest V3 và Discord Ingress Bot) với hạ tầng xử lý dữ liệu bất đồng bộ chạy trên nền tảng **AWS Serverless**. Dự án tối ưu hóa khả năng điều tra kỹ thuật số (Forensics), lưu trữ tập trung dữ liệu đe dọa (Threat Intel Data Lake) và đưa ra cảnh báo real-time với mức chi phí vận hành tiệm cận 0 USD.

### 2. Tuyên bố vấn đề  
* **Vấn đề hiện tại:** Các hình thức lừa đảo qua liên kết độc hại phân phối trên mạng xã hội (Facebook, Discord) ngày càng tinh vi, dễ dàng vượt qua các bộ lọc tĩnh truyền thống. Quá trình phát hiện và xử lý của các doanh nghiệp thường mang tính bị động (Reactive) – tức là chỉ xử lý sau khi sự cố lộ lọt thông tin (Data Breach) đã xảy ra. Đồng thời, việc thu thập mẫu độc hại phục vụ phân tích pháp chứng gặp khó khăn do dữ liệu bị phân tán.  
* **Giải pháp:** PhishShield thiết lập lá chắn chủ động (Proactive Interception) tại tầng Chrome Extension bằng cách bắt giữ sự kiện điều hướng mạng mạng (`webNavigation`) để chặn đứng trang độc hại trước khi trình duyệt kịp nạp mã nguồn. Song song đó, Discord Bot tuần tra kênh chat để phát hiện sớm các token bị lộ hoặc link bẫy. Toàn bộ siêu dữ liệu (Metadata Artifact) được đẩy bất đồng bộ về API Gateway, đi qua hàng đợi Amazon SQS để giảm tải hệ thống, sau đó được xử lý bởi AWS Lambda để lưu trữ vào Amazon S3 (Data Lake) và lập chỉ mục trong Amazon DynamoDB phục vụ tra cứu thần tốc.  
* **Lợi ích và hoàn vốn đầu tư (ROI):** Hệ thống loại bỏ hoàn toàn rủi ro mất tài khoản người dùng ngay tại ranh giới trình duyệt. Khối dữ liệu thu thập được tại S3 Data Lake đóng vai trò là nguồn tài nguyên vô giá (Threat Intel Artifact) để các mô hình AI/ML phân tích hành vi trong tương lai. Nhờ tận dụng triệt để kiến trúc Serverless, chi phí duy trì hệ thống gần như bằng 0 trong giai đoạn thử nghiệm (thuộc phạm vi AWS Free Tier), mang lại hiệu quả ROI vượt trội so với việc đầu tư các phần mềm SIEM/EDR thương mại đắt đỏ.

### 3. Kiến trúc giải pháp

Hệ thống áp dụng mô hình phân tách trách nhiệm linh hoạt và toàn diện giữa tầng biên client edge (đánh chặn, cách ly và thu thập dữ liệu cấu trúc chủ động) và tầng xử lý trung tâm cloud backend (định tuyến tốc độ cao, xử lý phân tán đa vùng sẵn sàng, lưu trữ bền vững và phân tích mô hình trí tuệ nhân tạo chuyên sâu).

![Sơ đồ kiến trúc PhishShield Ecosystem](/images/2-Proposal/diagram.jpg)

Ảnh Diagram : https://drive.google.com/file/d/1osh2sEgYEpO4q6eBzNNVTcGM7DniHgWv/view?usp=drive_link
* **Các dịch vụ hạ tầng thuộc nền tảng đám mây sử dụng:**
  * **aws waf:** Tường lửa ứng dụng web đóng vai trò lọc kịch bản tấn công nguy hiểm, bảo vệ toàn vẹn các điểm kết nối biên trước luồng dữ liệu độc hại.
  * **amazon api gateway:** Điểm tiếp nhận trung tâm cổng kết nối, thu thập siêu dữ liệu url và log an ninh từ client edgeendpoint chuyển tiếp qua giao thức bảo mật https.
  * **aws lambda:** Triển khai kiến trúc serverless linh hoạt với hàm điều phối định tuyến phân tích nhanh (lambda url evaluation router) và hàm xử lý hậu trường bất đồng bộ.
  * **amazon dynamodb:** Cơ sở dữ liệu nosql cấu hình lớp lưu trữ bộ đệm tốc độ cao (high-speed cache), phản hồi trực tiếp kết quả định danh danh sách đen để đáp ứng mục tiêu kpi độ trễ cực thấp.
  * **application load balancer:** Bộ cân bằng tải ứng dụng thông minh chịu trách nhiệm điều phối dòng dữ liệu kết nối đồng đều đến các cụm máy chủ xử lý lớp trong.
  * **amazon ec2:** Cụm máy chủ ảo hóa xử lý logic nghiệp vụ api phân tán chuyên sâu, được cấu hình tự động mở rộng và triển khai đa vùng sẵn sàng (multi-az) bên trong các phân vùng mạng public subnet bảo mật.
  * **cơ sở dữ liệu liên kết (db):** Phân hệ lưu trữ dữ liệu có cấu trúc quan hệ, được cô lập an toàn trong các vùng mạng private subnet riêng biệt để phòng chống các nguy cơ khai thác thông tin trực diện.
  * **amazon s3:** Vùng tài nguyên data lake lưu trữ cấu trúc tệp dữ liệu nhật ký định dạng json phục vụ mục đích giám sát lâu dài, đồng thời kết hợp làm kho chứa tài nguyên nội dung phân phối tĩnh.
  * **amazon bedrock:** Nền tảng tích hợp trí tuệ nhân tạo thế hệ mới, gọi các mô hình nền tảng tiên tiến để thực thi tác vụ phân tích sâu bất đồng bộ (asynchronous deep analysis) kịch bản lừa đảo nâng cao.
  * **amazon cloudfront:** Mạng lưới phân phối nội dung (content distribution) toàn cầu giúp tối ưu hóa bộ nhớ đệm và tăng tốc truyền tải dữ liệu đến thiết bị đầu cuối.
  * **phân hệ an ninh và quản trị hệ thống chéo (cross-cutting security & governance):** Tích hợp đồng bộ các giải pháp quản lý khóa mã hóa vật lý `aws kms`, phân cấp đặc quyền tối thiểu `aws iam`, quản trị chuỗi mật mã bí mật `aws secrets manager`, tối ưu hóa hạn mức tài chính `aws budgets`, giám sát tài nguyên thời gian thực `amazon cloudwatch` và tự động hóa triển khai hạ tầng bằng mã lệnh `aws cloudformation`.

* **Thiết kế chi tiết các cấu phần hệ thống:**
  * **browser extension (manifest v3):** Đóng vai trò lớp phòng thủ chủ động trực tiếp trên trình duyệt lõi chromium của người dùng, ứng dụng tiến trình service worker chạy ngầm `background.js` để tuần tra lưu lượng kết nối thời gian thực và thực thi lệnh bẻ lái sang giao diện overlay cách ly an toàn `warning.html` với thông điệp access denied ngay khi phát hiện bất thường.
  * **discord ingress bot:** Phân hệ giám sát chủ động kênh truyền thông cộng đồng, lắng nghe luồng tin nhắn và tương tác nhóm, tự động bóc tách các liên kết lừa đảo nguy hiểm hoặc ngăn chặn kịp thời các rủi ro rò rỉ mã token danh tính chưa mã hóa, thực hiện lệnh xóa bỏ mã độc trong micro-giây và phát alert thông tin cảnh báo an ninh thời gian thực.

### 4. Triển khai kỹ thuật  
* **Các giai đoạn triển khai:** 1. *Nghiên cứu và thiết kế ma trận:* Phân tích các kỹ thuật bypass của mã độc lừa đảo, thiết kế luồng di chuyển dữ liệu bất đồng bộ qua mô hình Serverless.  
  2. *Cấu hình tài nguyên Cloud:* Khởi tạo cấu trúc bảng DynamoDB, cấu hình S3 Bucket Object, thiết lập hàng đợi SQS định tuyến và phân cấp IAM Roles bảo mật.  
  3. *Phát triển Core Logic:* Viết mã nguồn cho các hàm AWS Lambda, thiết lập API Gateway tích hợp Proxy và lập trình module Client Edge (Extension & Discord Bot).  
  4. *Kiểm thử thực nghiệm & Đánh giá:* Giả lập DNS Spoofing qua tệp `hosts`, dựng server mồi bẫy bằng Python HTTP Server để thực hiện kịch bản test "Trước - Sau" và tối ưu hóa hệ thống.

* **Yêu cầu kỹ thuật:** * Môi trường Node.js (v24+) phục vụ vận hành Discord Bot; JavaScript chuẩn Manifest V3 cho cấu trúc Extension.  
  * Toàn bộ mã nguồn hàm xử lý trên Cloud được viết bằng Python/Node.js trên AWS Lambda, đảm bảo thời gian thực thi (Execution Time) dưới 3 giây.  

### 5. Lộ trình & Mốc triển khai  
* **Tuần 1 - 3:** Nghiên cứu tài liệu bảo mật AWS, thiết lập và khởi tạo hạ tầng Cloud lưu trữ cơ bản (DynamoDB, S3, SQS).  
* **Tuần 4 - 6:** Cấu hình phân quyền IAM, viết mã nguồn hàm xử lý trung tâm AWS Lambda và triển khai API Gateway Endpoint công khai.  
* **Tuần 7 - 9:** Lập trình phân hệ Client Side bao gồm Chrome Extension (Manifest V3) và Discord Bot gác cổng.  
* **Tuần 10 - 12:** Tích hợp toàn diện hệ thống (End-to-End), chạy kịch bản thực nghiệm đánh chặn thực tế, thu thập số liệu báo cáo và tối ưu hóa mã nguồn.

### 6. Ước tính ngân sách  
Dự án được tối ưu hóa kiến trúc để nằm trọn trong hạn mức **AWS Free Tier**, đảm bảo chi phí phát triển cục bộ bằng 0 USD.

* **Chi phí ước tính khi mở rộng quy mô (Sản xuất):** * *Amazon API Gateway:* 0,01 USD / tháng (mô phỏng ~3.000 requests phân tích log).  
  * *AWS Lambda:* 0,00 USD (nằm trong hạn mức 1 triệu request miễn phí hàng tháng).  
  * *Amazon SQS:* 0,00 USD (nằm trong gói 1 triệu thông điệp miễn phí).  
  * *Amazon S3 & DynamoDB:* ~0,10 USD / tháng cho dung lượng lưu trữ mẫu log thô dưới 5GB.  
* **Tổng chi phí hạ tầng Cloud:** Tiệm cận ~0,11 USD / tháng (Cực kỳ tối ưu cho các dự án an ninh mạng nội bộ).

### 7. Đánh giá rủi ro  
* **Rủi ro 1 (API Gateway bị spam/DDoS):** Kẻ tấn công có thể spam log giả để làm tăng chi phí Cloud.  
  * *Giảm thiểu:* Cấu hình Throttling Rate và Quota Limit trực tiếp trên API Gateway Stage.  
* **Rủi ro 2 (Token hoặc thông tin IAM bị lộ):** Lộ thông tin cấu hình file `.env` của Bot lên GitHub.  
  * *Giảm thiểu:* Áp dụng triệt để file `.gitignore`, hardcode tạm thời trong môi trường lab cô lập và sử dụng AWS Secrets Manager khi triển khai thực tế.  

### 8. Kết quả kỳ vọng  
* **Về mặt kỹ thuật:** Xây dựng thành công một lá chắn an ninh mạng Monorepo hợp nhất, bẻ lái luồng truy cập độc hại thành công 100% tại Client Edge sang trang cảnh báo an toàn.  
* **Về mặt nghiên cứu:** Tạo lập kho lưu trữ tri thức mối đe dọa (Threat Intel Data Lake) chuẩn cấu trúc JSON trên S3, sẵn sàng cung cấp nguồn dữ liệu sạch để huấn luyện các mô hình AI phát hiện mã độc tự động trong tương lai.