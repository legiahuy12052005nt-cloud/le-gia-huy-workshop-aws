---
title: "Khởi tạo quyền hạn lambda worker"
date: 2026-07-05
weight: 2
chapter: false
pre: " <b> 5.3.2. </b> "
---

#### Tạo iam role cho lambda worker (async deep analysis)

Thành phần này chịu trách nhiệm cấp quyền cho hàm xử lý phân tích sâu bất đồng bộ lambda worker có thể tự động tiêu thụ tin nhắn từ hàng đợi dữ liệu log và thực thi các logic an ninh vòng trong.

1. Ở menu thanh điều hướng quản trị của dịch vụ, bấm quay lại mục roles.
2. Nhấn nút create role màu cam ở góc phải màn hình.
3. Tại cấu phần step 1: select trusted entity:
   * trusted entity type: chọn aws service.
   * service or use case: chọn lambda trong danh sách hiển thị.
4. Tại cấu phần step 2: add permissions:
   * tại ô tìm kiếm policy, gõ chuỗi từ khóa awslambdabasicexecutionrole và tích chọn nó (để lấy quyền ghi log cloudwatch cơ bản).
   * bấm chọn nút next.

![thêm quyền cơ bản cho worker bước 10](/images/5-Workshop/Images/10.jpg)

5. Tại cấu phần step 3: name, review, and create:
   * role name: gõ chính xác tên định danh là PhishShield-LambdaWorker-Role.
   * cuộn xuống dưới cùng và nhấn nút create role để hệ thống hoàn tất.

---

#### Gán quyền inline cho worker role (sqs, s3, dynamodb và bedrock)

Sau khi tạo xong, chúng em click thẳng vào tên role PhishShield-LambdaWorker-Role vừa tạo để vào trang cấu hình chi tiết, chọn add permissions rồi chọn tiếp mục create inline policy từ danh sách hiển thị. Chuyển sang tab json và tiến hành cấu hình dòng code phân quyền dưới đây:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "SQSQueuePoller",
            "Effect": "Allow",
            "Action": [
                "sqs:ReceiveMessage",
                "sqs:DeleteMessage",
                "sqs:GetQueueAttributes"
            ],
            "Resource": "arn:aws:sqs:us-east-1:766443150358:PhishShield-DeepAnalysisQueue"
        },
        {
            "Sid": "S3EvidenceStorage",
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:PutObjectAcl"
            ],
            "Resource": "arn:aws:s3:::phishshield-phishing-evidence-storage/*"
        },
        {
            "Sid": "DynamoDBCacheUpdate",
            "Effect": "Allow",
            "Action": [
                "dynamodb:PutItem",
                "dynamodb:UpdateItem"
            ],
            "Resource": "arn:aws:dynamodb:us-east-1:766443150358:table/PhishShield-ThreatIntelCache"
        },
        {
            "Sid": "BedrockGenAIInference",
            "Effect": "Allow",
            "Action": [
                "bedrock:InvokeModel"
            ],
            "Resource": "arn:aws:bedrock:us-east-1::foundation-model/*"
        }
    ]
}

#### Khởi tạo hàm lambda router

Thành phần này đóng vai trò tiếp nhận yêu cầu từ các agent phía client edge gửi về, thực hiện tra cứu nhanh trên bộ đệm cache và điều phối dữ liệu sang hàng đợi phân tích chuyên sâu khi cần thiết.

1. Tại giao diện điều khiển của dịch vụ aws lambda, tìm và nhấn chọn vào nút create function.
2. Tiến hành cấu hình chi tiết các thông số kỹ thuật khởi tạo cho hàm xử lý dữ liệu như sau:
   * lựa chọn: tích chọn mục author from scratch (tạo từ đầu)
   * function name: nhập chính xác tên gọi định danh là PhishShield-LambdaRouter
   * runtime: lựa chọn ngôn ngữ và phiên bản là python 3.12
   * architecture: giữ nguyên cấu hình mặc định là x86_64
3. Thay đổi cấu hình quyền hạn role thực thi mặc định:
   * bấm mở rộng phân hệ mục change default execution role
   * tích chọn tùy chọn sử dụng role có sẵn use an existing role
   * tại ô danh sách tìm kiếm role, click chọn đúng tên vai trò bảo mật đã tạo trước đó là PhishShield-LambdaRouter-Role
4. Cuộn trang xuống góc dưới cùng màn hình giao diện và nhấn chọn nút create function để hệ thống thiết lập hạ tầng.

![khởi tạo hàm lambda router bước 13](/images/5-Workshop/Images/13.jpg)

---

#### Viết mã nguồn cho lambda router

1. Sau khi giao diện quản lý cấu hình hàm hiện ra, click chuột chuyển sang tab code.
2. Tại cây thư mục của trình soạn thảo mã nguồn, nhấp đúp vào tệp tin lambda_function.py và tiến hành dán đoạn mã lập trình xử lý logic điều phối dưới đây:

```python
import json
import boto3
import os

dynamodb = boto3.resource('dynamodb')
sqs = boto3.client('sqs')

TABLE_NAME = 'PhishShield-ThreatIntelCache'
QUEUE_URL = '[https://sqs.us-east-1.766443150358.amazonaws.com/766443150358/PhishShield-DeepAnalysisQueue](https://sqs.us-east-1.766443150358.amazonaws.com/766443150358/PhishShield-DeepAnalysisQueue)'

def lambda_handler(event, context):
    try:
        body = json.loads(event.get('body', '{}'))
        url_to_check = body.get('url')
    except Exception:
        url_to_check = None
        
    if not url_to_check:
        return {
            'statusCode': 400,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Missing URL parameter in request body'})
        }
        
    table = dynamodb.Table(TABLE_NAME)
    try:
        response = table.get_item(Key={'url': url_to_check})
        if 'Item' in response:
            status = response['Item'].get('status', 'UNKNOWN')
            reason = response['Item'].get('reason', 'Cached entry')
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json'},
                'body': json.dumps({
                    'url': url_to_check,
                    'status': status,
                    'decision': 'BLOCK' if status == 'MALICIOUS' else 'ALLOW',
                    'source': 'High-Speed Cache',
                    'reason': reason
                })
            }
            
        sqs.send_message(
            QueueUrl=QUEUE_URL,
            MessageBody=json.dumps({'url': url_to_check})
        )
        return {
            'statusCode': 202,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({
                'url': url_to_check,
                'status': 'PROCESSING',
                'decision': 'HOLD_AND_EVALUATE',
                'source': 'Asynchronous Queue Triggered',
                'reason': 'URL is being analyzed by Bedrock GenAI AI Engine'
            })
        }
        
    except Exception as e:
        print(f"Error occurred: {str(e)}")
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Internal server error processing request'})
        }
    
#### Khởi tạo hàm lambda worker (async analysis engine)

Thành phân này chịu trách nhiệm nhận các dữ liệu log điều phối từ hàng đợi amazon sqs để xử lý bất đồng bộ, sử dụng trí tuệ nhân tạo tạo sinh để phân tích sâu ngữ cảnh độc hại và lưu kết quả về kho lưu trữ dữ liệu.

1. Tại giao diện quản lý của dịch vụ aws lambda, tìm và nhấn chọn nút create function.
2. Tiến hành cấu hình chi tiết các thông số kỹ thuật cho hàm xử lý an ninh lõi như sau:
   * lựa chọn: tích chọn mục author from scratch (tạo từ đầu)
   * function name: gõ chính xác tên định danh là PhishShield-LambdaWorker
   * runtime: lựa chọn ngôn ngữ và phiên bản là python 3.12
3. Cấu hình phân hệ execution role bảo mật:
   * bấm mở rộng phân hệ mục change default execution role
   * tích chọn tùy chọn sử dụng vai trò có sẵn use an existing role
   * tại ô danh sách tìm kiếm role, click chọn đúng tên vai trò đã gán đầy đủ quyền tương tác amazon sqs, amazon s3, amazon dynamodb và amazon bedrock trước đó là PhishShield-LambdaWorker-Role
4. Cuộn trang xuống góc dưới cùng màn hình và nhấn chọn nút create function.

![khởi tạo hàm lambda worker bước 15](/images/5-Workshop/Images/15.jpg)

---

#### Viết mã nguồn tích hợp genai cho lambda worker

1. Sau khi hạ tầng hàm khởi tạo thành công, click chuột chuyển sang tab code.
2. Tại cây thư mục mã nguồn hiện ra, nhấp đúp vào tệp tin lambda_function.py và tiến hành dán đoạn mã nguồn hướng sự kiện kết hợp trí tuệ nhân tạo tạo sinh dưới đây:

```python
import json
import boto3
from datetime import datetime

bedrock = boto3.client('bedrock-runtime', region_name='us-east-1')
s3 = boto3.client('s3')
dynamodb = boto3.resource('dynamodb')

TABLE_NAME = 'PhishShield-ThreatIntelCache'
BUCKET_NAME = 'phishshield-phishing-evidence-storage' 

def lambda_handler(event, context):
    table = dynamodb.Table(TABLE_NAME)
    
    for record in event.get('Records', []):
        try:
            message_body = json.loads(record['body'])
            url_to_analyze = message_body.get('url')
            
            if not url_to_analyze:
                continue
                
            print(f"Starting analysis for URL: {url_to_analyze}")
            prompt = (
                f"Analyze this URL for potential phishing, social engineering, or infostealer distribution threats: {url_to_analyze}. "
                f"Reply ONLY in a strict JSON format with keys: 'status' (either 'MALICIOUS' or 'SAFE') and 'reason' (a concise explanation text)."
            )
            
            try:
                body = json.dumps({
                    "anthropic_version": "bedrock-2023-05-31",
                    "max_tokens": 500,
                    "messages": [{"role": "user", "content": prompt}]
                })
                response = bedrock.invoke_model(
                    modelId='us.anthropic.claude-sonnet-4-5-20250929-v1:0',
                    contentType='application/json',
                    accept='application/json',
                    body=body
                )
                response_body = json.loads(response.get('body').read())
                ai_text = response_body['content'][0]['text']
                ai_result = json.loads(ai_text)
                status = ai_result.get('status', 'SAFE').upper()
                reason = ai_result.get('reason', 'Analyzed by Bedrock GenAI Engine')
            except Exception as e:
                print(f"Bedrock restricted by AWS Academy platform. Activating Local Threat Intel Rules Engine Fallback: {str(e)}")
                
                risk_keywords = ['paypal', 'signin', 'secure', 'update', 'login', 'bank', 'verification']
                if any(keyword in url_to_analyze.lower() for keyword in risk_keywords):
                    status = 'MALICIOUS'
                    reason = 'Local Rules Fallback: Detected high-risk spoofing keywords mimicking financial/authentication institutions.'
                else:
                    status = 'SAFE'
                    reason = 'Local Rules Fallback: No obvious high-risk brand spoofing keywords detected.'

            report_content = {
                "url": url_to_analyze,
                "status": status,
                "analysis_timestamp": datetime.utcnow().isoformat() + "Z",
                "evidence_reason": reason
            }
            
            safe_file_name = f"reports/{url_to_analyze.replace('://', '_').replace('/', '_').replace('.', '_')}.json"
            s3.put_object(
                Bucket=BUCKET_NAME,
                Key=safe_file_name,
                Body=json.dumps(report_content, indent=4),
                ContentType='application/json'
            )
            print(f"Saved threat intel report to S3: {safe_file_name}")

            table.put_item(
                Item={
                    'url': url_to_analyze,
                    'status': status,
                    'reason': f"Threat Intel Evaluation: {reason}",
                    'updated_at': datetime.utcnow().isoformat() + "Z"
                }
            )
            print(f"Successfully updated DynamoDB Threat Intel Cache for {url_to_analyze}")
            
        except Exception as e:
            print(f"Error processing asynchronous record: {str(e)}")
            
    return {
        'statusCode': 200,
        'body': json.dumps('Analysis completed successfully')
    }