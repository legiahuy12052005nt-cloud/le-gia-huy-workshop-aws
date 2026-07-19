---
title: "Alignment with the Internship Program"
date: 2026-07-05
weight: 4
chapter: false
pre: " <b> 5.1.3 </b> "
---

#### Connection between the use-case and knowledge from the fcaj / aws program

[cite_start]We developed this project entirely based on the aws native serverless architecture—which is the core content we studied and practiced throughout our training in the First Cloud AI Journey (fcaj) program[cite: 26, 27]. [cite_start]Instead of renting traditional amazon ec2 servers which waste resources and require complex operating system configuration, we apply modern cloud-native thinking by combining services like amazon api gateway, aws lambda, and amazon sqs so that the system automatically scales (scalability) based on the actual load of incoming logs[cite: 28].

#### [cite_start]Tight integration with cloud and ai topics [cite: 29]

* [cite_start]**Regarding the cloud aspect:** The project applies the shared responsibility model, implementing multi-layered security from the public internet with aws waf down to tight internal permissions between services using aws iam following the principle of least privilege[cite: 30].
* [cite_start]**Regarding the ai aspect:** We integrated the amazon bedrock guardrails service into the asynchronous deep analysis subsystem[cite: 31]. [cite_start]This module utilizes the power of Generative AI (GenAI) to scan deeply into the context of suspicious command strings or links, helping discover sophisticated phishing behaviors, thereby cleaning and optimizing the threat intel data lake stored on amazon s3[cite: 32].