---
title: "Worklog Week 7"
date: 2026-06-01
weight: 7
chapter: false
pre: " <b> 1.7. </b> "
---

### Week 7 Objectives:

* Survey real-world requirements, identify business logic, and propose an overall solution architecture for the security ecosystem project.
* Analyze security data flows, draft infrastructure architecture blueprints, and model sequential data transit between components.
* Establish secure network boundaries and select optimal cloud services for malicious link inspection and interception.

---

### Tasks to be Deployed This Week:

| Day | Task | Start Date | End Date | Resource Links |
| --- | --- | --- | --- | --- |
| 2 | - Conduct comprehensive research on practical social engineering attack vectors <br> - Identify business requirements and propose an overall solution model for the phishshield ecosystem | 01/06/2026 | 01/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 3 | - Perform data flow mapping from client edge endpoints up to the centralized cloud backend <br> - Design sequence diagrams for the two core protection components: browser extension and discord bot | 02/06/2026 | 02/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 4 | - Utilize specialized design tools to draft the overall architecture diagram blueprints <br> - Configure core vpc network segmentation, dividing the infrastructure into multi-az public subnet and private subnet structures | 03/06/2026 | 03/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 5 | - Design the high-speed real-time response group aligned with the architectural blueprints <br> - Map the integration of edge protection via aws waf, secure ingestion via amazon api gateway, routing via aws lambda, and high-speed caching on dynamodb | 04/06/2026 | 04/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 6 | - Design the asynchronous deep analysis backend and content delivery network pathways <br> - Arrange load balancing flows via application load balancer to amazon ec2 virtual machine clusters, integrating s3 data lake storage and invoking ai models on amazon bedrock <br> - Verify technical notation consistency across the entire architecture blueprint | 05/06/2026 | 08/06/2026 | <https://cloudjourney.awsstudygroup.com/> |

---

### Week 7 Achievements:

* Successfully defined the practical research problem, proposing a flexible separation of responsibilities between the client edge (responsible for data collection and interception) and the cloud backend (dedicated to persistent storage and deep analysis).
* Completed standard-compliant overall architecture diagram blueprints; visually modeled the secure vpc network space, completely isolating core database services within dedicated private subnet zones.
* Established a near-zero latency real-time response solution by integrating a sequential service chain from the aws waf web application filter and secure amazon api gateway down to the high-speed dynamodb cache layer.
* Engineered a comprehensive asynchronous deep analysis solution, applying intelligent traffic distribution via application load balancer to auto-scaling amazon ec2 compute clusters, combined with the ai capabilities of amazon bedrock to identify sophisticated phishing scenarios.
* Compiled complete data flow documentation and interaction sequence diagrams, establishing a solid theoretical and architectural foundation to transition into actual infrastructure configuration and detailed component coding in the upcoming week.