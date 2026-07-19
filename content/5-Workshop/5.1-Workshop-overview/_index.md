---
title: "Introduction"
date: 2026-07-05
weight: 1
chapter: false
pre: " <b> 5.1 </b> "
---

#### Introduction to phishshield ecosystem

+ The phishshield ecosystem is a multi-layered cybersecurity solution developed by our team to proactively detect, block, and isolate phishing links as well as account-stealing malware right from the user's browser and device side (client edge).
+ The system breaks the cyber attack chain by combining a real-time fast blocking filter with an asynchronous deep analysis subsystem utilizing generative AI, providing comprehensive protection for users.

#### Workshop Overview

In this hands-on workshop, we will step-by-step implement and deploy this entire system onto the cloud environment through key components:
+ client edge side: Configure and install the chrome extension to redirect malicious links in the browser, combined with a discord bot to automatically clean up trap links on social media chat channels.
+ cloud infrastructure side: Use the aws sam packaging tool to automatically initialize a pure serverless model consisting of an api gateway ingestion portal equipped with an aws waf firewall, an amazon sqs message queue as an anti-congestion buffer, aws lambda functions for processing logic, an amazon dynamodb database for quick blacklist lookups, and an amazon s3 storage as a threat intel data lake integrated with the smart contextual analysis of amazon bedrock guardrails.