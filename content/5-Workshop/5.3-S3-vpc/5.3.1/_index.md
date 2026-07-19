---
title: "Environment Preparation"
date: 2026-07-05
weight: 1
chapter: false
pre: " <b> 5.3.1. </b> "
---

#### Create amazon dynamodb table

This component serves as the high-speed cache storage location for both safe links (whitelist) and malicious links (blacklist) to enable low-latency system status lookups.

1. Access the amazon dynamodb service dashboard. Once the main console interface appears, look at the left navigation menu or the central pane, locate and click on the create table button.
2. Provide the exact standard configuration properties for our project as detailed below:
   * table name: enter phishshield-threatintelcache
   * partition key: type url and select the attribute type as string

![create table step 1](/images/5-Workshop/Images/1.jpg)

![configure partition key step 2](/images/5-Workshop/Images/2.jpg)

#### Create amazon s3 bucket

This component serves as the threat intel data lake repository to centralize all raw json-formatted log files containing malicious forensic evidence collected by the system.

1. Navigate to the amazon s3 service console. On the main dashboard, locate and click the orange create bucket button.
2. Provide the exact standard infrastructure settings for our project as detailed below:
   * bucket name: enter the unique name phishshield-phishing-evidence-storage
   * aws region: select the us east (n. virginia) us-east-1 zone to maintain deployment data synchronization with our previously created database.
   * object ownership: select the acls disabled (recommended) option to enforce modern policy-based object security access.
   * block public access settings for this bucket: ensure that the block all public access checkbox remains fully selected. In strict compliance with the principle of least privilege defined in our project guidelines, this resource is completely closed to the internet; the lambda function code will later leverage an internal iam role to write files rather than exposing the bucket publicly.

![create s3 bucket step 3](/images/5-Workshop/Images/3.jpg)

---

#### Create amazon sqs queue

This messaging component acts as an orchestrating buffer between the outer data ingestion layer and the inner asynchronous deep analysis layer to resolve backend system congestion issues during log data spikes.

1. Navigate to the amazon sqs service console. On the main dashboard, locate and click the orange create queue button situated in the upper right section.
2. Setup the detailed technical parameters for our messaging queue as follows:
   * type: choose the standard queue option to achieve maximum message throughput and ultra-low data delivery processing times.
   * name: type the queue identifier PhishShield-DeepAnalysisQueue
3. Under the configuration section: Leave all default time parameters provided by the platform completely unchanged (including visibility timeout set to 30 seconds, message retention period set to 4 days, etc.). Click the complete button to initialize the resource.

![create sqs queue step 4](/images/5-Workshop/Images/4.jpg)

#### Create iam role for lambda router

This identity management component grants necessary execution permissions to our lambda router function, allowing it to record transaction logs and safely interface with internal resources.

1. Navigate to the iam service console dashboard. From the left-hand navigation menu, click on the roles section, then proceed to click the create role button.
2. Under the step 1 (select trusted entity) configuration workflow:
   * trusted entity type: select the aws service option button
   * service or use case: find and choose lambda from the provided component list
   * click on the next button to proceed to the next setup stage

![select trusted entity step 1](/images/5-Workshop/Images/5.jpg)

3. Under the step 2 (add permissions) security assignment workflow:
   * inside the policy search query input box, type awslambdabasicexecutionrole and select its adjacent checkbox (this grants fundamental execution permissions for lambda to output system logging statements directly into cloudwatch)
   * for the initialization phase, we only attach this core execution baseline policy, then proceed to click the next button

![add permissions step 2](/images/5-Workshop/Images/6.jpg)

4. Under the step 3 (name, review, and create) final review workflow:
   * role name: enter the precise string identifier PhishShield-LambdaRouter-Role
   * scroll down to the absolute bottom section of the page layout and click the create role button to finalize structural initialization

![name and complete step 3](/images/5-Workshop/Images/7.jpg)

#### Add amazon dynamodb and amazon sqs access to router role

1. Within the roles list, click on PhishShield-LambdaRouter-Role.
2. Under the permissions tab, click the add permissions button and select create inline policy from the dropdown list.
3. In the policy creation interface, look at the top right corner of the editor, switch from the visual tab to the json tab, and insert the following code block:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "DynamoDBCacheAccess",
            "Effect": "Allow",
            "Action": [
                "dynamodb:GetItem"
            ],
            "Resource": "arn:aws:dynamodb:us-east-1:766443150358:table/PhishShield-ThreatIntelCache"
        },
        {
            "Sid": "SQSQueueAccess",
            "Effect": "Allow",
            "Action": [
                "sqs:SendMessage"
            ],
            "Resource": "arn:aws:sqs:us-east-1:766443150358:PhishShield-DeepAnalysisQueue"
        }
    ]
}
