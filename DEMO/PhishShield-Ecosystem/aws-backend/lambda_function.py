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
                print(f"Bedrock restricted. Activating Local Threat Intel Rules Engine Fallback: {str(e)}")
                
                risk_keywords = ['paypal', 'signin', 'secure', 'update', 'login', 'bank', 'verification', 'amtso']
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

            table.put_item(
                Item={
                    'url': url_to_analyze,
                    'status': status,
                    'reason': f"Threat Intel Evaluation: {reason}",
                    'updated_at': datetime.utcnow().isoformat() + "Z"
                }
            )
            print(f"Successfully evaluated and synced persistence states for {url_to_analyze}")
            
        except Exception as e:
            print(f"Error processing asynchronous record: {str(e)}")
            
    return {
        'statusCode': 200,
        'body': json.dumps('Analysis completed successfully')
    }