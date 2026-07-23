---
title: "Week 8 Worklog"
date: 2026-07-06
weight: 8
chapter: false
pre: " <b> 1.8. </b> "
---

### Week 8 Objectives:
* Construct an asynchronous inspection engine utilizing generative AI to evaluate zero-day phishing attempts.
* Orchestrate data pipelines to update the real-time cache and build long-term data lakes.

### Weekly Tasks Details:

| Day | Task Description | Start Date | End Date | Resources |
| :--- | :--- | :---: | :---: | :--- |
| **Mon** | - Provisioned a scalable EC2 worker cluster placed behind an Application Load Balancer to handle intensive backend scraping tasks. | 2026-07-06 | 2026-07-06 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |
| **Tue** | - Engineered specialized AI prompts directed at Amazon Bedrock models to analyze extracted DOM elements for phishing patterns. | 2026-07-07 | 2026-07-07 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |
| **Wed** | - Developed isolated headless web scraping scripts on worker nodes to safely render and evaluate suspicious domains. | 2026-07-08 | 2026-07-08 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |
| **Thu** | - Automated the feedback loop, pushing AI conclusions into S3 data lakes and updating DynamoDB blacklists synchronously. | 2026-07-09 | 2026-07-09 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |
| **Fri** | - Benchmarked system limits through load testing, tuning timeout parameters to ensure edge user experience remained unimpacted. | 2026-07-10 | 2026-07-10 | [AWS Cloud Journey](https://cloudjourney.awsstudygroup.com/) |

### Week 8 Outcomes and Deliverables:
* Integrated intelligent AI capabilities directly into the security framework.
* The system can now comprehend sophisticated visual spoofing without static signatures and automatically propagate defenses globally.