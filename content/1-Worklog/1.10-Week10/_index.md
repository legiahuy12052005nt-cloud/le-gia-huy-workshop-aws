---
title: "Worklog Week 10"
date: 2026-06-22
weight: 10
chapter: false
pre: " <b> 1.10. </b> "
---

### Week 10 Objectives:

* Build a cluster of background processing servers to conduct deep analysis of links that have never appeared in the database.
* Integrate cloud artificial intelligence platforms to comprehend webpage content, identifying sophisticated phishing tactics and zero-day threats.
* Establish a pipeline to store analysis results and system logs into a centralized data lake for future reporting and model training purposes.

---

### Tasks to be Deployed This Week:

| Day | Task | Start Date | End Date | Resource Links |
| --- | --- | --- | --- | --- |
| 2 | - Deploy a worker nodes compute cluster using amazon ec2 combined with an auto scaling group <br> - Configure an application load balancer to evenly distribute background analysis tasks from the system | 22/06/2026 | 22/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 3 | - Research and establish the generative artificial intelligence subsystem via the amazon bedrock service <br> - Build optimal prompt engineering templates to direct large language models (llm) in analyzing phishing indicators from webpage source code and text | 23/06/2026 | 23/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 4 | - Write web scraping scripts on amazon ec2 servers to automatically access, capture, and extract content from suspicious urls <br> - Integrate the sdk to send the newly collected raw data to amazon bedrock for risk level evaluation | 24/06/2026 | 24/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 5 | - Configure the persistent storage flow: Push all analysis result payloads and raw json logs into the data lake on amazon s3 <br> - Program the reverse update mechanism: Automatically write new malware detection results back into the blacklist table on amazon dynamodb | 25/06/2026 | 25/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 6 | - Conduct load testing and verify the integrity of the asynchronous processing flow <br> - Monitor system telemetry parameters, optimize caching, and fine-tune timeout settings to prevent process hangs | 26/06/2026 | 26/06/2026 | <https://cloudjourney.awsstudygroup.com/> |

---

### Week 10 Achievements:

* Successfully deployed a flexible compute infrastructure with amazon ec2 and application load balancer, ensuring the system can automatically scale processing resources smoothly during sudden spikes in suspicious link traffic.
* Effectively leveraged the ai power of the amazon bedrock platform; the artificial intelligence model is now capable of comprehending webpage structures, accurately identifying fake banking interfaces or credential-stealing login forms without relying on static blacklists.
* Perfected safe web scraping execution scripts within an isolated server environment, eliminating the risk of reverse malware infection from malicious websites to the core server system.
* Successfully established a closed-loop data cycle: the system automatically pushes analysis evidence into the amazon s3 cold storage repository as audit resources, while simultaneously updating new malicious urls into amazon dynamodb to protect massive numbers of other users in real time.
* Measured and validated that the asynchronous workflow operates flawlessly; deep analysis tasks running in the backend (taking 3-5 seconds) cause absolutely no impact on the high-speed web browsing experience of users at the edge layer.