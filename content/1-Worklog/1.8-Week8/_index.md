---
title: "Worklog Week 8"
date: 2026-06-08
weight: 8
chapter: false
pre: " <b> 1.8. </b> "
---

### Week 8 Objectives:

* Initialize the isolated cloud network infrastructure foundation and establish baseline access security rules.
* Build the high-speed database component to serve real-time blacklist storage and rapid querying capabilities.
* Develop serverless processing functions and deploy api communication gateways to receive telemetry data from edge applications.

---

### Tasks to be Deployed This Week:

| Day | Task | Start Date | End Date | Resource Links |
| --- | --- | --- | --- | --- |
| 2 | - Deploy and initialize the core amazon vpc virtual network environment for the system <br> - Configure network segmentation into public subnet and private subnet zones, establishing internet gateway and nat gateway components to route network traffic securely | 08/06/2026 | 08/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 3 | - Design an optimal key-value data structure (schema) to accommodate high-speed query operations <br> - Provision a data table on amazon dynamodb to store the blacklist repository of malicious links, setting up automatic expiration mechanisms for stale records | 09/06/2026 | 09/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 4 | - Program serverless execution functions using aws lambda to implement the logic of extracting links from payloads and cross-referencing them against the database <br> - Establish iam role permission policies authorizing the lambda function to read data securely from amazon dynamodb | 10/06/2026 | 10/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 5 | - Deploy the edge communication layer using amazon api gateway as the endpoint to receive inbound rest api requests <br> - Integrate the api gateway router to trigger the corresponding aws lambda processing function at the backend | 11/06/2026 | 11/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 6 | - Conduct end-to-end integration testing of the real-time data flow using request simulation tools like postman <br> - Measure latency, append exception handling blocks (try-catch), and configure system monitoring log pushes to amazon cloudwatch | 12/06/2026 | 12/06/2026 | <https://cloudjourney.awsstudygroup.com/> |

---

### Week 8 Achievements:

* Successfully built a robust cloud network infrastructure foundation with amazon vpc, clearly separating public access flows and private secure zones, ensuring core storage services are not directly exposed to the internet.
* Successfully initialized nosql storage space on the amazon dynamodb platform, optimizing partition key configurations to achieve link status lookup speeds of just a few milliseconds, perfectly meeting real-time processing requirements.
* Completed the logic source code for the instant link verification cluster; compiled and deployed the aws lambda function to operate stably and smoothly interact with the datastore through strictly limited iam role privileges.
* Successfully routed external command invocation flows through the amazon api gateway network, creating secure url endpoints ready for integration with browser extensions and social network bots.
* Evaluated and validated that the real-time processing flow operates exactly as initially designed; the system records and classifies errors effectively, while the entire query history is centrally managed and strictly monitored through the amazon cloudwatch interface.