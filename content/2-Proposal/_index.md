---
title: "Project Proposal"
date: 2026-07-05
weight: 2
chapter: false
pre: " <b> 2. </b> "
---

# PhishShield Ecosystem  
## A Unified AWS Serverless Solution for Proactive Client-Edge Social Engineering & Phishing Interception  

### 1. Executive Summary  
The **PhishShield Ecosystem** is a multi-layered cybersecurity platform designed to proactively detect, intercept, and isolate social engineering tactics and credential-harvesting threats. By enforcing a strict Zero-Trust model, the system integrates control mechanisms directly at the user boundary (Client-Edge via a Chrome Extension Manifest V3 and a Discord Ingress Bot) coupled with an asynchronous backend architecture powered by **AWS Serverless**. The project optimizes digital forensics investigation, centralizes malicious artifact telemetry (Threat Intel Data Lake), and dispatches real-time alerts while keeping operational overhead near $0.

### 2. Problem Statement  
* **Current Challenges:** Phishing links and social engineering vectors distributed across communication channels (Facebook, Discord) are becoming increasingly sophisticated, easily bypassing traditional static filters. Enterprise security teams often operate in a reactive posture—remediating threats only after a data breach or credential leak has occurred. Furthermore, collecting distributed forensic indicators for analysis remains highly inefficient.  
* **The Solution:** PhishShield establishes a proactive defense boundary at the client edge. The Chrome Extension monitors network events (`webNavigation`), halting connection handshakes to malicious sites before the browser executes harmful payloads. Concurrently, the Discord Bot audits channels to identify leaked session credentials or weaponized URLs. Malicious metadata artifacts are asynchronously pushed to Amazon API Gateway, ingestion-decoupled via Amazon SQS, and processed by AWS Lambda functions for persistent storage into an Amazon S3 Data Lake and indexed into Amazon DynamoDB for rapid threat query capabilities.  
* **Benefits and ROI:** The solution eliminates identity theft hazards directly at the client browser boundary. The aggregated datasets hosted within the S3 Data Lake function as a valuable asset (Threat Intel Artifacts) for training predictive AI/ML classifiers. Capitalizing on Serverless primitives minimizes resource allocation expenses to $0 during development (well within the AWS Free Tier framework), yielding superior ROI compared to licensing commercial SIEM/EDR alternatives.

### 3. Solution Architecture

The system implements a flexible and comprehensive segregation of responsibility model between the client edge layer (proactive interception, isolation, and metadata harvesting) and the centralized cloud backend processing architecture (high-speed routing, multi-az distributed computing, persistent storage, and generative artificial intelligence deep analysis).

![PhishShield Ecosystem Architecture Diagram](/images/2-Proposal/diagram.jpg)

* **Cloud infrastructure platform services utilized:**
  * **aws waf:** Web application firewall serving as the frontline validation tier to filter application-layer exploits and insulate public endpoints from malicious telemetry input.
  * **amazon api gateway:** Central ingestion API gateway hosting edge collection entries to safely receive url metadata strings and security logs via secure https transaction protocols.
  * **aws lambda:** Flexible serverless compute instances powering the rapid fast-path routing tier (lambda url evaluation router) and executing inner asynchronous deep computing logic loops.
  * **amazon dynamodb:** High-performance nosql database operating as a high-speed cache cluster to return threat signature matches instantaneously, honoring low-latency system kpi constraints.
  * **application load balancer:** Intelligent application traffic distributor managing ingress session allocation across backend compute instances evenly.
  * **amazon ec2:** Scalable virtualized compute instances driving dedicated core api operations, deployed within robust auto-scaling multi-az frameworks spanning isolated public subnet structures.
  * **relational database (db):** Relational data management systems hosting structured configurations, securely locked inside deep private subnet blocks to eliminate direct perimeter penetration risks.
  * **amazon s3:** High-durability data lake object storage preserving raw json security tracking logs for audit cycles, while doubling as the content distribution origin container for static application resources.
  * **amazon bedrock:** Advanced generative artificial intelligence runtime environment invoking foundational machine learning models to orchestrate deep asynchronous threat intelligence evaluations on hidden phishing vectors.
  * **amazon cloudfront:** Global content distribution network providing high-speed caching and edge optimization for rapid assets delivery to client edge nodes.
  * **cross-cutting security & governance framework:** Unified integration of enterprise-grade control suites including cryptographic key management `aws secrets manager`, fine-grained identity permissions access `aws iam`, hardware token encryption keys `aws kms`, fiscal budgeting matrices `aws budgets`, system metric tracking monitors `amazon cloudwatch`, and automated infrastructure provisioning `aws cloudformation` under strict least privilege principles.

* **Core component architecture specifications:**
  * **browser extension (manifest v3):** Operates as a proactive local endpoint gateway layer injected into chromium-based clients, executing background service worker scripts `background.js` to continuously intercept transit link requests and replace malicious destinations with a localized security overlay `warning.html` indicating an access denied state.
  * **discord ingress bot:** Acts as a specialized messaging channel guard monitoring communication group data streams, automatically parsing payload contents to eliminate dangerous web addresses or block unencrypted identity credential token leak attempts within milliseconds while dispatching real-time security alerts.

### 4. Technical Implementation  
* **Deployment Phases:** 1. *Research and Architecture Modeling:* Analyzing modern evading browser exploit matrices and engineering decoupled data pipelines using Serverless design patterns.  
  2. *Cloud Resource Provisioning:* Structuring NoSQL schemas, setting up S3 Object parameters, orchestrating SQS dead-letter queues, and initializing IAM role mapping policies.  
  3. *Core Logic Engineering:* Programing internal handler code inside AWS Lambda, mapping API Gateway proxy rules, and developing client-edge system utilities.  
  4. *Rigorous Testing and Verification:* Simulating localized DNS spoofing vectors through targeted `hosts` file records, spinning up dummy frontend endpoints with Python HTTP servers to validate intercept sequences, and refining script compilation.

* **Technical Specifications:** * Node.js runtime environment (v24+) powering the Discord engine framework; pure Chrome Manifest V3 compliance for the extension asset directory.  
  * Cloud handler processes engineered within AWS Lambda utilizing minimal footprints to guarantee API execution overhead clocks below 3 seconds.

### 5. Roadmap & Milestones  
* **Weeks 1 - 3:** Reviewing AWS security reference manuals; initializing basic cloud repository engines (DynamoDB, S3, SQS).  
* **Weeks 4 - 6:** Crafting precise IAM isolation profiles; deploying central AWS Lambda computing modules and exposing public API Gateway routes.  
* **Weeks 7 - 9:** Assembling edge protection applications consisting of the Manifest V3 browser client and the discord logging agent.  
* **Weeks 10 - 12:** Executing end-to-end integration cycles, running production-grade exploitation tests, compiling analytical dashboard values, and pushing code optimizations.

### 6. Budget Estimation  
The project is strictly optimized to function entirely within the boundaries of the **AWS Free Tier**, ensuring zero cloud resource expenditure during research cycles.

* **Projected Operational Scaling Costs:** * *Amazon API Gateway:* ~$0.01 / month (assuming roughly 3,000 investigative analytics transactions).  
  * *AWS Lambda & Amazon SQS:* $0.00 (well within the baseline 1 million compute requests free allotment).  
  * *Amazon S3 & DynamoDB:* ~$0.10 / month for logs and table indices totaling under 5GB.  
* **Total Estimated Infrastructure Expenses:** Approximates ~$0.11 / month, highlighting extreme cost efficiency for institutional cybersecurity labs.

### 7. Risk Assessment  
* **Risk 1 (API Gateway Abuse/DDoS):** Attackers attempting to flood telemetry endpoints to increase transactional backend compute costs.  
  * *Mitigation:* Implementing strict Throttling Rates and Quota Limits directly at the API Gateway Stage settings.  
* **Risk 2 (Credential Inadvertent Exposure):** Accidentally committing the Discord agent's `.env` configuration keys into open repositories.  
  * *Mitigation:* Strict inclusion of `.gitignore` parameters, utilizing short-lived local testing variables within a controlled lab workspace, and transitioning toward AWS Secrets Manager for production runs.

### 8. Expected Outcomes  
* **Technical Achievements:** Delivery of a production-ready, unified Monorepo cybersecurity system, successfully routing malicious client requests away from endpoints to threat isolation buffers with a 100% success rate.  
* **Research Contributions:** Establishing a clean, JSON-structured Threat Intelligence Data Lake on Amazon S3, creating a highly organized telemetry asset library primed for training future predictive AI behavior models.