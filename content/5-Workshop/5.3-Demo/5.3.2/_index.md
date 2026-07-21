---
title: "Lambda Worker Role Initialization"
date: 2026-07-05
weight: 2
chapter: false
pre: " <b> 5.3.2. </b> "
---

#### Create iam role for lambda worker (async deep analysis)

This identity management component grants necessary execution privileges to our asynchronous deep analysis lambda worker function, authorizing it to consume tracking logs from the queue and apply internal safety logic.

1. From the primary service dashboard navigation menu, click back into the main roles option directory.
2. Click the orange create role action button located on the right corner.
3. Under the step 1: select trusted entity initialization panel:
   * trusted entity type: choose aws service.
   * service or use case: select lambda from the provided technical component catalog list.
4. Under the step 2: add permissions security binding panel:
   * inside the policy search box, type the token identifier awslambdabasicexecutionrole and check its adjacent option to claim default cloudwatch logging functions.
   * click the next button.

![attach base lambda logging policies step 10](/images/5-Workshop/Images/10.jpg)

5. Under the step 3: name, review, and create metadata summary panel:
   * role name: type exactly PhishShield-LambdaWorker-Role.
   * scroll down to the absolute bottom section of the page layout and click the create role button to finalize infrastructure initialization.

---

#### Add inline policy permissions to worker role (sqs, s3, dynamodb and bedrock)

Once initialization completes, we click directly on the newly created role identifier PhishShield-LambdaWorker-Role to enter its details window, select add permissions and choose the create inline policy action. Switch the text editor panel over to the json tab, and insert the following security configuration block:

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

#### Initialize lambda router function

This computing component acts as the primary entry point to receive requests emitted from client edge agents, executing sub-millisecond status cache lookups and dispatching payloads onto the deep analysis queue when needed.

1. Within the aws lambda service control interface, locate and click on the create function action button.
2. Setup the detailed technical initialization properties for our computing function as follows:
   * selection: check the author from scratch option button
   * function name: provide the exact identity string PhishShield-LambdaRouter
   * runtime: select the language platform environment as python 3.12
   * architecture: preserve the default selection parameter which is x86_64
3. Modify the default runtime execution security permissions framework:
   * expand the configuration directory section named change default execution role
   * check the option bullet designated as use an existing role
   * inside the role selection search directory, click on the precise identifier string created earlier: PhishShield-LambdaRouter-Role
4. Scroll down to the absolute bottom of the layout structure and click the create function button to finalize infrastructure provisioning.

![initialize lambda router function step 13](/images/5-Workshop/Images/13.jpg)

---

#### Write source code for lambda router

1. Once the console workspace for function management loads up, click on the code tab layout.
2. Inside the integrated development environment file tree pane, double-click on the lambda_function.py file entry and insert the following processing business logic block:

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

#### Initialize lambda worker function (async analysis engine)

This computing component is responsible for receiving orchestrated log data from the amazon sqs queue for asynchronous processing, utilizing generative artificial intelligence to deeply analyze malicious contexts, and persisting results back to data stores.

1. Inside the management console of the aws lambda service, locate and click the create function button.
2. Setup the detailed technical initialization configurations for our core security function as follows:
   * selection: check the author from scratch option button
   * function name: type exactly PhishShield-LambdaWorker
   * runtime: select the language platform and version as python 3.12
3. Configure the secure execution role subsystem:
   * expand the configuration layout section named change default execution role
   * check the option designated as use an existing role
   * within the role selection search field, click to select the precise role identifier that has been granted full communication permissions for amazon sqs, amazon s3, amazon dynamodb, and amazon bedrock earlier: PhishShield-LambdaWorker-Role
4. Scroll down to the absolute bottom section of the console interface and click the create function button.

![initialize lambda worker function step 15](/images/5-Workshop/Images/15.jpg)

---

#### Write genai-integrated source code for lambda worker

1. Once the function infrastructure initializes successfully, click to switch over to the code tab workspace.
2. Inside the displayed source code directory tree, double-click on the lambda_function.py file entry and insert the following event-driven processing script integrated with generative artificial intelligence:

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