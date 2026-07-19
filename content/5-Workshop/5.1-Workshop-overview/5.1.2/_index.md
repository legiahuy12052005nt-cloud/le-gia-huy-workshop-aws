---
title: "Specific Project Objectives"
date: 2026-07-05
weight: 3
chapter: false
pre: " <b> 5.1.2 </b> "
---

#### Desired Deliverables (Outputs)

* client edge side: Completing a chrome extension (following the manifest v3 standard) capable of automatically redirecting malicious links to a safe warning page; an automated discord bot that scans, revokes messages containing trap links or exposed tokens, and fires warning alerts to the admin.
* cloud infrastructure: Building an api gateway ingestion portal equipped with an aws waf firewall to filter traffic, combined with an amazon sqs message queue acting as an anti-congestion buffer for aws lambda processing functions.
* storage and administration: Establishing a centralized json log file repository on amazon s3 and an amazon dynamodb database system to store blacklist indicators and block counts (blockcount) in real time.

#### Success Evaluation Criteria

* The system operates accurately, successfully detecting and redirecting test phishing links to an isolated safe page within the lab environment.
* The processing speed and response latency from the cloud system back to the user's browser must be smooth, keeping response times under 500ms so it does not interfere with regular web browsing experiences.
* The system does not hang or crash when simulating log spike scenarios thanks to the intelligent queue coordination mechanism.
* The infrastructure maintenance cost is optimized to the lowest possible level (utilizing the aws free tier package to keep costs close to 0 usd during the testing phase).