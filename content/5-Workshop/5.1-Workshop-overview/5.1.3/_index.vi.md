---
title: "Sự phù hợp với chương trình thực tập"
date: 2026-07-05
weight: 4
chapter: false
pre: " <b> 5.1.3 </b> "
---

#### Mối liên hệ giữa use-case và kiến thức từ chương trình fcaj / aws

[cite_start]Đề tài này được chúng em phát triển hoàn toàn dựa trên nền tảng kiến trúc thuần serverless của aws – đây cũng chính là nội dung cốt lõi mà chúng em đã được học và thực hành trong suốt thời gian tham gia khóa huấn luyện First Cloud AI Journey (fcaj)[cite: 26, 27]. [cite_start]Thay vì thuê máy chủ amazon ec2 truyền thống gây lãng phí tài nguyên và tốn công cấu hình hệ điều hành, chúng em ứng dụng tư duy cloud native hiện đại bằng cách kết hợp các dịch vụ như amazon api gateway, aws lambda và amazon sqs để hệ thống tự động co giãn (scalability) theo lượng tải thực tế của log gửi về[cite: 28].

#### [cite_start]Gắn kết chặt chẽ với chủ đề cloud và ai [cite: 29]

* [cite_start]**Về khía cạnh cloud:** Dự án áp dụng mô hình trách nhiệm chung, triển khai bảo mật đa tầng từ vòng ngoài internet với aws waf cho đến việc phân quyền nội bộ chặt chẽ giữa các dịch vụ bằng aws iam theo nguyên tắc đặc quyền tối thiểu[cite: 30].
* [cite_start]**Về khía cạnh ai:** Chúng em tích hợp dịch vụ amazon bedrock guardrails ở phân hệ phân tích sâu bất đồng bộ (asynchronous deep analysis)[cite: 31]. [cite_start]Phân hệ này sẽ dùng sức mạnh của trí tuệ nhân tạo tạo sinh (GenAI) để quét sâu ngữ cảnh các chuỗi lệnh hoặc liên kết đáng ngờ, giúp phát hiện các hành vi lừa đảo tinh vi, từ đó làm sạch kho dữ liệu threat intel data lake lưu trên amazon s3[cite: 32].