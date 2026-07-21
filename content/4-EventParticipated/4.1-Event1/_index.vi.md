---
title: "Workshop: Kiến trúc AWS, Văn hóa DevOps & Định hướng Phát triển Sự nghiệp"
date: 2026-06-13
weight: 1
chapter: false
pre: " <b> 4.1. </b> "
---


# Bài thu hoạch: Kiến trúc AWS, Văn hóa DevOps & Hành trình sự nghiệp 

### Mục Đích Của Sự Kiện

- Học hỏi kinh nghiệm "thực chiến" từ các anh đi trước về môi trường làm việc tại các công ty, tập đoàn đa quốc gia.
- Hiểu đúng và đủ về công việc thực sự của một kỹ sư DevOps, thoát khỏi những lý thuyết sách vở.
- Tiếp cận cách thiết kế một hệ thống thực tế trên AWS (URL Shortener) và vạch ra lộ trình phát triển từ sinh viên thực tập đến chuyên gia (AWS Partner).

### Danh Sách Diễn Giả

Buổi Meet quy tụ các anh có rất nhiều kinh nghiệm trong ngành:
- **Anh Đạt Phạm** (Data Analytics Engineer) & **Anh Cường Nguyễn** (Process Engineer).
- **Anh Hoàng Trọng** - DevOps Engineer @ Endava Vietnam.
- **Anh Đinh Trung Kiên** & **Anh Nguyễn Minh Thọ**.
- **Anh Danh Hoàng Hiếu Nghị** - AI Engineer, AWS Community Builder.

### Nội Dung Nổi Bật

#### 1. Chuyện nghề, chuyện công ty (Anh Đạt & Anh Cường)
- Góc nhìn chân thực về môi trường làm việc quốc tế: Từ quy trình phối hợp giữa các phòng ban đến cách sinh viên mới ra trường đối mặt và vượt qua áp lực công việc.
- Bài toán kết hợp giữa xử lý dữ liệu (Data Analytics) và tối ưu quy trình (Process Engineering) để giải quyết các vấn đề vận hành ở quy mô lớn.

#### 2. Kỹ sư DevOps thực sự làm gì? (Anh Hoàng Trọng)
- **Vỡ mộng lý thuyết:** DevOps không chỉ là việc ngồi viết script cấu hình CI/CD. Đó là trung tâm gỡ rối xử lý muôn vàn "nỗi đau" của dự án như lỗi môi trường, server sập, hay phàn nàn của khách hàng về tốc độ hệ thống.
- **Công việc thực tế hàng ngày:** Trực hệ thống (On-call), xử lý sự cố (Incident handling), hỗ trợ các team khác và đặc biệt là bài toán kiểm soát chi phí (Cost investigation) – điều mà lúc làm đồ án ở trường sinh viên ít khi để ý tới.

#### 3. Xây dựng dịch vụ URL Shortener trên AWS (Anh Kiên & Anh Thọ)
- **Thiết kế kiến trúc (System Design):** Mổ xẻ bài toán rút gọn link kinh điển (giống Bitly) và cách đưa nó lên đám mây AWS.
- **Khả năng mở rộng (Scalability):** Cách hệ thống chịu tải khi lượng truy cập tăng vọt, lựa chọn database phù hợp để việc truy xuất link chỉ mất vài mili-giây mà không bị nghẽn (bottleneck).

#### 4. Hành trình từ sinh viên đến AWS Partner (Anh Hiếu Nghị)
- Lộ trình 8 bước rất rõ ràng cho người mới: (1) Bắt đầu từ sự tò mò -> (2) Tìm hiểu Cloud -> (3) Tham gia cộng đồng -> (4) Thực hành Labs -> (5) Làm dự án -> (6) Xây Portfolio -> (7) AWS Partner -> (8) Trở lại đóng góp cho cộng đồng (Share Back).

### Những Gì Học Được

#### Về Kiến thức Kỹ thuật
- Hiểu được sự khác biệt giữa code chạy trên máy tính cá nhân (local) và code chạy trên hệ thống Production.
- Biết cách các dịch vụ của AWS liên kết với nhau trong một kiến trúc Scalable, hiểu được tầm quan trọng của việc giám sát hệ thống và tự động hóa.

#### Về Tư duy Nghề nghiệp
- Sự nghiệp không chỉ có mỗi việc "code giỏi", mà kỹ năng giao tiếp, làm việc nhóm, và trách nhiệm với hệ thống (Ownership) quan trọng không kém.
- Nhận ra bản thân đang ở giai đoạn "School Projects" trong lộ trình 8 bước và cần phải gấp rút hoàn thiện "Portfolio" để chuẩn bị cho hành trình sắp tới.

### Ứng Dụng Vào Công Việc & Thực Tập

- **Áp dụng DevOps vào đồ án:** Thay vì deploy thủ công như trước, em sẽ bắt đầu tập viết các đường ống CI/CD đơn giản trên GitHub Actions cho các project thực tập hiện tại.
- **Tối ưu kiến trúc:** Ứng dụng tư duy thiết kế từ bài toán "URL Shortener" để xem xét lại cách lưu trữ và truy xuất dữ liệu trong đồ án cá nhân sao cho tối ưu thời gian phản hồi nhất.
- **Xây dựng Portfolio:** Gom nhặt lại các bài lab, các project nhỏ lẻ trong quá trình thực tập, viết file README.md thật cẩn thận để làm một Portfolio chỉn chu đi xin việc, đúng với tinh thần các anh đã định hướng.

### Trải nghiệm trong sự kiện

Tham gia buổi Meet vào ngày **13/06/2026** thực sự là một cột mốc đáng nhớ trong quá trình thực tập của em. 

#### Những bài học "giải ngố"
- Trước đây, em thường nghĩ DevOps là một vị trí khá khô khan và chỉ toàn code cấu hình. Nhưng nghe anh Trọng chia sẻ về những ca trực on-call cứu server hay những lần đi gỡ lỗi hệ thống mới thấy vị trí này ngầu và quan trọng đến mức nào. 

#### Định hướng rõ ràng hơn
- Những chia sẻ thực tế từ anh Đạt, anh Cường và lộ trình của anh Hiếu Nghị giúp một sinh viên thực tập như em bớt đi sự chênh vênh. Em không còn hoang mang kiểu "học Cloud thì bắt đầu từ đâu" nữa, mà đã biết mình cần đi từng bước: thực hành thật nhiều (Hands-on Labs), làm dự án, và chia sẻ lại.

> Buổi Meet không chỉ mang lại khối lượng kiến thức đồ sộ về AWS hay DevOps, mà trên hết là truyền cho em động lực và một thái độ làm nghề nghiêm túc. Tinh thần "Share Back" mà các anh nhắc tới chắc chắn sẽ là kim chỉ nam cho em trong tương lai.

#### Các hình ảnh tại event

![Hình 1](/images/Event/1.jpg)
![Hình 2](/images/Event/2.jpg)
![Hình 3](/images/Event/3.jpg)
![Hình 4](/images/Event/4.jpg)
![Hình 5](/images/Event/5.jpg)