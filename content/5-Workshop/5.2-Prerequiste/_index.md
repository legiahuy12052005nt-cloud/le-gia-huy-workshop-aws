---
title: "Solution Architecture"
date: 2026-07-05
weight: 3
chapter: false
pre: " <b> 5.2. </b> "
---

The system implements a flexible and comprehensive segregation of responsibility model between the client edge layer (proactive interception, isolation, and metadata harvesting) and the centralized cloud backend processing architecture (high-speed routing, multi-az distributed computing, persistent storage, and generative artificial intelligence deep analysis).

![PhishShield Ecosystem Architecture Diagram](/images/2-Proposal/diagram.jpg)

#### Cloud infrastructure platform services utilized

* aws waf: Web application firewall serving as the frontline validation tier to filter application-layer exploits and insulate public endpoints from malicious telemetry input.
* amazon api gateway: Central ingestion API gateway hosting edge collection entries to safely receive url metadata strings and security logs via secure https transaction protocols.
* aws lambda: Flexible serverless compute instances powering the rapid fast-path routing tier (lambda url evaluation router) and executing inner asynchronous deep computing logic loops.
* amazon dynamodb: High-performance nosql database operating as a high-speed cache cluster to return threat signature matches instantaneously, honoring low-latency system kpi constraints.
* application load balancer: Intelligent application traffic distributor managing ingress session allocation across backend compute instances evenly.
* amazon ec2: Scalable virtualized compute instances driving dedicated core api operations, deployed within robust auto-scaling multi-az frameworks spanning isolated public subnet structures.
* relational database (db): Relational data management systems hosting structured configurations, securely locked inside deep private subnet blocks to eliminate direct perimeter penetration risks.
* amazon s3: High-durability data lake object storage preserving raw json security tracking logs for audit cycles, while doubling as the content distribution origin container for static application resources.
* amazon bedrock: Advanced generative artificial intelligence runtime environment invoking foundational machine learning models to orchestrate deep asynchronous threat intelligence evaluations on hidden phishing vectors.
* amazon cloudfront: Global content distribution network providing high-speed caching and edge optimization for rapid assets delivery to client edge nodes.
* cross-cutting security & governance framework: Unified integration of enterprise-grade control suites including cryptographic key management aws secrets manager, fine-grained identity permissions access aws iam, hardware token encryption keys aws kms, fiscal budgeting matrices aws budgets, system metric tracking monitors amazon cloudwatch, and automated infrastructure provisioning aws cloudformation under strict least privilege principles.

---

#### Core component architecture specifications

* browser extension (manifest v3): Operates as a proactive local endpoint gateway layer injected into chromium-based clients, executing background service worker scripts background.js to continuously intercept transit link requests and replace malicious destinations with a localized security overlay warning.html indicating an access denied state.
* discord ingress bot: Acts as a specialized messaging channel guard monitoring communication group data streams, automatically parsing payload contents to eliminate dangerous web addresses or block unencrypted identity credential token leak attempts within milliseconds while dispatching real-time security alerts.