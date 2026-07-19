---
title: "Blog 3: AWS MCP Server"
date: 2026-06-25
weight: 3
chapter: false
pre: " <b> 3.3. </b> "
---

# AWS MCP Server: Kỷ nguyên mới khi AI Agent tự động hóa và quản trị hệ thống Cloud

Chào mọi người trong AWS Study Group.

Trong vài tháng trở lại đây, thế giới công nghệ đang chứng kiến sự bùng nổ mạnh mẽ của khái niệm AI Agent (Cơ chế AI tự vận hành và thực thi tác vụ) thay vì chỉ dừng lại ở các chatbot hỏi - đáp thông thường. Một trong những rào cản lớn nhất của AI Agent từ trước đến nay là làm sao kết nối mô hình trí tuệ nhân tạo với hệ thống hạ tầng thực tế một cách an toàn.

Để giải quyết bài toán cốt lõi này, vào tháng 5/2026, AWS đã chính thức cho ra mắt bản AWS MCP Server (Model Context Protocol). Đây được xem là một trong những công nghệ mới và đáng chú ý nhất hiện nay dành cho các kỹ sư Cloud và DevSecOps.

### Model Context Protocol (MCP) là gì?
Để hiểu về dịch vụ mới của AWS, trước hết chúng ta cần biết MCP là gì. Model Context Protocol (MCP) là một giao thức mã nguồn mở tiêu chuẩn, đóng vai trò như một "đường ống dẫn dòng ngữ cảnh" giữa các mô hình ngôn ngữ lớn (LLM) và các nguồn dữ liệu hoặc công cụ bên ngoài (như môi trường phát triển ứng dụng, máy chủ tệp tin).

Trước khi có MCP, mỗi khi muốn AI đọc dữ liệu hạ tầng, chúng ta phải tự viết các đoạn script kết nối tùy biến rất thủ công và rời rạc. MCP ra đời để chuẩn hóa toàn bộ luồng giao tiếp này.

### AWS MCP Server giải quyết bài toán gì?
AWS MCP Server là một máy chủ Model Context Protocol từ xa được quản lý hoàn phần bởi AWS. Dịch vụ này nằm trong bộ công cụ Agent Toolkit for AWS, mang lại khả năng kết nối bảo mật, có xác thực rõ ràng cho các AI Agent và các trợ lý lập trình (coding assistants) truy cập thẳng vào các dịch vụ của AWS.

Thay vì mọi người phải copy-paste các thông số hạ tầng hay cấp quyền một cách lỏng lẻo cho các AI bên thứ ba, AWS MCP Server đóng vai trò như một người gác cổng an ninh tin cậy.

### Những điểm cốt lõi của công nghệ mới này

* **Giao tiếp an toàn và có kiểm soát:** AWS MCP Server tích hợp chặt chẽ với cơ chế quản lý định danh của AWS, đảm bảo rằng AI Agent chỉ được phép xem hoặc thao tác trên những tài nguyên hạ tầng cụ thể mà mọi người cho phép, loại bỏ hoàn toàn rủi ro rò rỉ mã bảo mật.
* **Tối ưu hóa năng suất lập trình:** Khi tích hợp với các môi trường phát triển hiện đại, AI Agent có thể tự động hiểu được ngữ cảnh kiến trúc hiện tại của hệ thống AWS mà doanh nghiệp đang chạy, từ đó đưa ra các đề xuất sửa lỗi hoặc tối ưu hóa mã nguồn chính xác hơn rất nhiều.
* **Nằm trong hệ sinh thái Agent chuyên sâu:** Là một phần của Agent Toolkit for AWS, dịch vụ này mở ra tiềm năng lớn để xây dựng các kỹ năng (skills) và plugin tự động hóa, giúp các AI Agent phối hợp với nhau xử lý các tác vụ quản trị hệ thống phức tạp thay con người trong tương lai.

### Tổng kết
Sự xuất hiện của AWS MCP Server cho thấy AWS đang chuẩn bị rất kỹ lưỡng cho một tương lai nơi các kỹ sư hệ thống sẽ làm việc song hành cùng các AI Agent để vận hành các kiến trúc Cloud lớn. Đây chắc chắn là một công nghệ rất đáng để mọi người trải nghiệm và nghiên cứu ngay từ thời điểm này.

---

### Nguồn tham khảo
* https://aws.amazon.com/vi/blogs/machine-learning/extend-large-language-models-powered-by-amazon-sagemaker-ai-using-model-context-protocol/
![Sơ đồ minh họa](/images/blog3.png)