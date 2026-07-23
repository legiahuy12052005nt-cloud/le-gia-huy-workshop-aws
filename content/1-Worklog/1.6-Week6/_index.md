---
title: "Week 6 Worklog"
date: 2026-06-22
weight: 6
chapter: false
pre: " <b> 1.6. </b> "
---

### Week 6 Objectives:
* Construct an ultra-low latency query pipeline to cross-reference URLs against malicious blacklists.
* Expose secure API endpoints to receive telemetry payloads from external edge applications.

### Weekly Tasks Details:

| Day | Task Description | Start Date | End Date | Resources |
| :--- | :--- | :---: | :---: | :--- |
| **Mon** | - Configured a high-speed NoSQL schema on Amazon DynamoDB to house the malicious link repository with TTL auto-expiration. | 2026-06-22 | 2026-06-22 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |
| **Tue** | - Coded AWS Lambda functions tasked with parsing incoming URLs and rapidly verifying their status against the database. | 2026-06-23 | 2026-06-23 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |
| **Wed** | - Assigned strictly scoped IAM policies enabling Lambda to execute DynamoDB read queries securely. | 2026-06-24 | 2026-06-24 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |
| **Thu** | - Configured Amazon API Gateway to act as the primary ingress router, mapping REST calls directly to Lambda targets. | 2026-06-25 | 2026-06-25 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |
| **Fri** | - Conducted API integration testing via Postman, resolving cross-origin issues and streaming runtime logs to CloudWatch. | 2026-06-26 | 2026-06-26 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |

### Week 6 Outcomes and Deliverables:
* Achieved millisecond response times for link verification.
* Forged a secure, scalable serverless backend ready to ingest traffic from browser extensions and chat bots.