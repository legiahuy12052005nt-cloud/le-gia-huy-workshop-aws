---
title: "Bối cảnh và bài toán thực tế"
date: 2026-07-05
weight: 2
chapter: false
pre: " <b> 5.1.1 </b> "
---

#### Bối cảnh thực tế

Trong thực tế hiện nay, các cuộc tấn công lừa đảo trực tuyến (phishing) và phát tán mã độc chiếm đoạt tài khoản (infostealer) đang diễn ra rất phức tạp trên môi trường internet. Do đó, chúng em đã lựa chọn đề tài xây dựng hệ thống phishshield ecosystem. Đây là một hệ sinh thái an ninh mạng đa tầng giúp chủ động phát hiện, ngăn chặn và cách ly các liên kết bẫy, các trang web lừa đảo ngay từ phía thiết bị và trình duyệt của người dùng (client edge), không để người dùng có cơ hội tương tác với mã độc.

#### Khách hàng và đối tượng sử dụng

* Đối tượng đầu tiên là những người dùng mạng xã hội hằng ngày (như facebook, discord), những người dễ bị sập bẫy các đường link lừa đảo trúng thưởng, giả mạo ngân hàng hoặc cài cắm mã độc lấy cắp token.
* Đối tượng tiếp theo là các anh chị quản trị viên an ninh mạng (secops) trong các tổ chức, doanh nghiệp cần một công cụ tập trung để bảo vệ an toàn cho nhân viên trong mạng nội bộ, đồng thời thu thập các mẫu link bẩn để xử lý sự cố.

#### Các vấn đề cần giải quyết

* **Giải quyết tính bị động của các giải pháp bảo mật cũ:** Thường thì khi xảy ra sự cố mất tài khoản hoặc lộ thông tin rồi thì mới đi xử lý. Hệ thống của chúng em hướng đến việc chặn đứng ngay khi người dùng vừa bấm vào link trên trình duyệt thông qua một tiện ích mở rộng (chrome extension) và một con bot tự động quét trên kênh chat discord.
* **Giải quyết bài toán quá tải hệ thống khi có bão dữ liệu:** Khi lượng người dùng gửi báo cáo log link bẩn về quá nhiều cùng một lúc, hệ thống backend rất dễ bị nghẽn. Dự án sẽ giải quyết bằng cách dùng hàng đợi tin nhắn làm bộ đệm để điều phối dữ liệu bất đồng bộ.
* **Tập trung hóa dữ liệu điều tra:** Gom toàn bộ dữ liệu mẫu độc hại thu thập được về một kho lưu trữ tập trung (threat intel data lake) để phục vụ cho việc phân tích chuyên sâu sau này.