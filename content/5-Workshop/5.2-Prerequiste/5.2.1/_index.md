---
title: "Rationale for Infrastructure Service Selection"
date: 2026-07-05
weight: 1
chapter: false
pre: " <b> 5.2.1 </b> "
---

To build the system, we prioritized choosing fully managed services following a pure serverless architecture model. The specific reasons include:

* amazon api gateway: This service acts as the gateway to receive https requests sent from the chrome extension and discord bot. We chose this service because of its simplicity in configuration and its ability to automatically scale when there is a large volume of traffic without needing to install or configure traditional web proxy servers. The cost of the service is also highly optimized since it only charges based on the actual number of processed requests.
* aws lambda: This is the core logic processing component of the system. We use this service to run the source code for link checking and log processing according to an event-driven mechanism. Using this service helps us completely eliminate server operating system management; the code only runs and incurs charges for each millisecond of execution, helping us make the most of the free tier.
* amazon sqs: This message queue acts as a buffer between the data ingestion layer and the asynchronous deep analysis layer. We included this service in the architecture to solve the system congestion problem during log spikes, ensuring that requests are queued and processed sequentially without dropping any data.
* amazon dynamodb: This nosql database was chosen thanks to its extremely fast read and write speeds with a latency of just a few milliseconds. This service is highly suitable for quickly looking up the status of links to see if they are in the blacklist (blacklist indicators) or not to respond immediately to users.
* amazon s3: We use this object storage to serve as the raw data storage subsystem (threat intel data lake). This service has extremely cheap file storage costs and a nearly infinite expanding capacity, which is ideal for saving json-formatted log files for subsequent digital forensic investigations.
* amazon bedrock guardrails: Instead of having to manually write highly complex and error-prone filters ourselves, we chose this service to apply pre-existing artificial intelligence models. The service helps deeply scan and accurately recognize malicious contexts without the effort of developing from scratch.