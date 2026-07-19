---
title: "Worklog Week 11"
date: 2026-06-29
weight: 11
chapter: false
pre: " <b> 1.11. </b> "
---

### Week 11 Objectives:

* Deploy security armor layers to protect the api communication gateway and safely conceal sensitive system information.
* Review and tighten the entire access authorization system among cloud services according to the least privilege principle.
* Establish a ci/cd automation pipeline to shorten the packaging and release time of new source code updates.

---

### Tasks to be Deployed This Week:

| Day | Task | Start Date | End Date | Resource Links |
| --- | --- | --- | --- | --- |
| 2 | - Deploy the aws waf web application firewall filter to protect amazon api gateway from ddos attacks and spam requests <br> - Establish rate limiting rules for ips showing abnormal query patterns | 29/06/2026 | 29/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 3 | - Integrate the aws secrets manager password lifecycle management service <br> - Migrate all sensitive information such as discord bot tokens, api keys, and connection configurations out of the source code for secure storage | 30/06/2026 | 30/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 4 | - Build a ci/cd automation pipeline using github actions combined with aws sam <br> - Write scripts to automatically test, package, and deploy new versions of aws lambda functions whenever there are changes on the main branch | 01/07/2026 | 01/07/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 5 | - Conduct a comprehensive review of the iam role security policy list across the entire system <br> - Remove redundant access permissions for the amazon ec2 cluster and aws lambda functions, ensuring exact read/write permissions are granted only to specified resources | 02/07/2026 | 02/07/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 6 | - Perform a comprehensive security audit on the entire built infrastructure architecture <br> - Optimize operational costs by adjusting provisioned capacity parameters and collecting bandwidth metrics on amazon cloudwatch | 03/07/2026 | 03/07/2026 | <https://cloudjourney.awsstudygroup.com/> |

---

### Week 11 Achievements:

* Successfully built an aws waf steel shield at the edge layer, fully protecting the amazon api gateway portal from denial of service (ddos) attack scenarios and effectively blocking junk traffic flows that exhaust resources.
* Completely eliminated the risk of sensitive information leakage (hardcode credentials) by encrypting and centrally managing all tokens and configuration keys through the aws secrets manager service.
* Fully automated the software development lifecycle; successfully established a ci/cd pipeline allowing new source code from local environments to be automatically tested and deployed straight to the cloud environment in just a few minutes.
* Fortified the internal security environment to the highest standards; all services can only cross-communicate via lean iam role configurations, strictly adhering to the least privilege principle.
* Completed the cloud resource optimization phase, eliminating performance bottlenecks and building detailed operational cost reports, readying the system for the final acceptance documentation packaging.