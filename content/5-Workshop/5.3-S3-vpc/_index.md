---
title: "Prerequisites"
date: 2026-07-05
weight: 3
chapter: false
pre: " <b> 5.3 </b> "
---

To prepare for the process of turning the phishshield ecosystem architecture from a drawing into a live running environment, we have fully set up and configured all prerequisites regarding account infrastructure, deployment regions, supporting tools, and permission hierarchies as follows:

* Regarding the aws account: We use a personal aws account that has successfully activated the free tier package for learning and lab purposes. Using this account helps us easily control costs and leverage the free tier limits of serverless services to deploy our project with the most optimized budget.
* Regarding the deployment region: All services in the system are consistently set up by us in a fixed area, ap-southeast-1 (Singapore). The choice of this region is based on two realistic factors: the geographical proximity to Vietnam helps optimize response times (latency) for link checking requests sent from the chrome extension and discord bot, and it is also a major data center that supports the latest advanced serverless features our team needs to use earliest.
* Regarding infrastructure administration and packaging tools:
    * aws cli: Installed directly on members' personal computers to execute system administration tasks and check resource statuses remotely using a command-line terminal interface without accessing the web console.
    * aws sam (serverless application model): Instead of spending too much time and making errors manually clicking to create each service on the web interface, we apply an infrastructure as code solution through the aws sam tool. This tool helps us define the entire architecture, including api gateway, lambda functions, sqs queues, and dynamodb databases, into a common structured yaml configuration file. Whenever we need to run a lab or update the system, the team only needs to run a deployment command from the terminal to automatically compile and push resources to the cloud synchronously.
* Regarding necessary iam permissions to perform labs: Since the system is packaged and initialized automatically via aws sam command lines from personal computers, our iam user account configured in the aws cli must be granted core execution permission groups, including:
    * Security structure creation permissions: including actions like iam:CreateRole, iam:DeleteRole, iam:PutRolePolicy, and iam:AttachRolePolicy so that the aws sam tool can automatically generate short-lived internal iam roles dedicated to the data-processing lambda functions.
    * Serverless service orchestration permissions: the account needs full administrative permissions distributed across the resource subsystems in the project, including apigateway:*, lambda:*, sqs:*, dynamodb:*, s3:*, and cloudwatch:* to ensure it doesn't get blocked or throw missing permission errors when initializing connection portals, databases, queues, and log storage centers.
    * Artificial intelligence model invocation permissions: adding bedrock:InvokeModel and bedrock:GetGuardrail permissions so that the lambda function performing deep analysis can interact directly with the internal amazon bedrock guardrails safety filters.