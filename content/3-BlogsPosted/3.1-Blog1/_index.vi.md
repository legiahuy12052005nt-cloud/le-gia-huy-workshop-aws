---
title: "Blog 1: Amazon Bedrock Guardrails"
date: 2026-06-05
weight: 1
chapter: false
pre: " <b> 3.1. </b> "
---

# Amazon Bedrock Guardrails: "Tường lửa" chống Prompt Injection và Rò rỉ dữ liệu PII cho ứng dụng LLM

Chào anh em AWS Study Group! 

Tích hợp LLM làm Chatbot hay AI Agent đang cực kỳ bùng nổ. Thế nhưng, có một tử huyệt mà rất nhiều đội ngũ phát triển đang bỏ qua: Security cho GenAI. Làm sao ngăn người dùng "thao túng tâm lý" AI, ép AI phá vỡ quy tắc hệ thống (Prompt Injection), hoặc vô tình làm rò rỉ dữ liệu định danh nhạy cảm (PII)?

Nếu anh em đang tự ngồi viết Regex hay code bộ lọc thủ công thì dừng lại ngay nhé. AWS đã có một giải pháp chuẩn Enterprise cân đẹp bài toán này: Amazon Bedrock Guardrails.

### Bedrock Guardrails là gì?
Hiểu đơn giản, Guardrails hoạt động như một tường lửa hai chiều độc lập nằm chắn giữa ứng dụng của bạn và Foundation Model (như Claude 3.5, Amazon Nova):

* **Kiểm soát Input:** Chặn đứng câu lệnh độc hại hoặc bẫy bẻ khóa (Jailbreak) của user trước khi nó kịp tới được LLM.
* **Kiểm soát Output:** Quét và lọc lại câu trả lời của LLM để đảm bảo AI không văng tục, nói lạc đề hoặc làm lộ dữ liệu mật của hệ thống.

### 4 Tầng bảo mật "bỏ túi" của Guardrails
Khi cấu hình một Guardrail, anh em sẽ có trong tay 4 vũ khí cực mạnh để tinh chỉnh trực tiếp trên Console mà không cần động vào code:

* **Content Filters (Bộ lọc nội dung):** Tự động nhận diện và chặn đứng 6 danh mục độc hại, bao gồm cả các cuộc tấn công thay đổi câu lệnh ẩn (Prompt Attack).
* **Denied Topics (Chủ đề cấm):** Định nghĩa các chủ đề bằng ngôn ngữ tự nhiên mà bạn tuyệt đối không muốn AI tham gia (Ví dụ: Cấm AI đưa ra lời khuyên đầu tư tài chính).
* **Word Filters (Chặn từ ngữ):** Lọc từ ngữ tục tĩu hoặc các từ khóa nhạy cảm, độc quyền của doanh nghiệp.
* **Sensitive Information Filters (Mặt nạ dữ liệu PII):** Tự động phát hiện số CCCD, Email, hay Số tài khoản ngân hàng. Anh em có thể chọn chặn luôn (Block) hoặc tự động che mờ (Masking - biến số tài khoản thành *********) trước khi hiển thị cho user.

### Đánh đổi Hiệu năng và Chi phí?

* **Về Độ trễ:** Vì chạy ngầm trên hạ tầng tối ưu của Bedrock, độ trễ tăng thêm chỉ rơi vào khoảng vài mili-giây (ms), trải nghiệm người dùng vẫn mượt mà.
* **Về Chi phí:** Tính tiền theo lượng Tokens được quét với mức giá cực kỳ rẻ. Đổi lại ứng dụng của bạn được bảo mật tuyệt đối, tránh được các scandal rò rỉ dữ liệu nghiêm trọng.

Bảo mật GenAI hiện tại là bắt buộc chứ không còn là tính năng "thêm thắt" nữa rồi anh em ạ. Có anh em nào ở đây đã triển khai Guardrails cho hệ thống chạy Production của mình chưa? Cùng thảo luận nhé! 

---

### Nguồn tham khảo 
* https://aws.amazon.com/vi/blogs/machine-learning/safeguard-a-generative-ai-travel-agent-with-prompt-engineering-and-amazon-bedrock-guardrails/

![Sơ đồ minh họa](/images/blog1.png)