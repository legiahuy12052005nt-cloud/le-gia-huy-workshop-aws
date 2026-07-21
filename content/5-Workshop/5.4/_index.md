---
title: "Future Development and References"
date: 2026-07-09
weight: 4
chapter: false
pre: " <b> 5.4. </b> "
---

#### Future Development Plans

Although the system has successfully met the core requirements of this lab, there are several key areas where the project can be upgraded and expanded in the future:

1. **Infrastructure as Code (IaC) Automation:**
   * In this lab, several services were manually configured via the AWS Management Console. Moving forward, I plan to automate the entire infrastructure deployment using **AWS SAM** or **Terraform**, allowing the complete stack (WAF, API Gateway, Lambda, DynamoDB) to be initialized with a single command.

2. **Enhanced Phishing Link Detection:**
   * Integrate public Threat Intelligence feeds to update malicious URL lists in real time.
   * Refine prompt engineering and guardrail rules in **Amazon Bedrock Guardrails** to better analyze message context, preventing false positives on safe links.

3. **Automated Incident Alerting Channels:**
   * Forward logs from SQS/CloudWatch to a **Telegram Bot** or **Discord Webhook** for the admin team, triggering immediate alerts whenever malicious links are detected.

4. **Multi-Platform Expansion:**
   * Expand integration modules or bots to enterprise collaboration tools like **Microsoft Teams** and **Slack**, going beyond the browser extension and Discord bot.

---
#### Complete Demo Source Code

  Link: https://drive.google.com/drive/folders/1vt9pVlMj7ENpgvMAqSrnh33uKejuwQBf?usp=sharing

#### References

* **Official Technical Documentation from Amazon Web Services:**
  * [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) - Guide for configuring Web Application Firewall, Rule Groups, and Web ACLs on AWS.
  * [Amazon API Gateway Developer Guide](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html) - Guide for setting up REST APIs and integrating with AWS Lambda.
  * [AWS Lambda Developer Guide](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html) - Configuration guide for serverless functions handling backend logic.
  * [Amazon Bedrock Guardrails User Guide](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html) - Implementing safety guardrails and content filters for AI models.
  * [Amazon DynamoDB Developer Guide](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html) - Guide for NoSQL data storage on AWS.
* **Security Standards & Frameworks:**
  * [OWASP Top 10 for Large Language Model Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/) - Top cybersecurity risks in AI/LLM-integrated applications.
* **UI & Site Generation Tools:**
  * [Hugo Learn Theme GitHub Repository](https://github.com/matcornic/hugo-theme-learn) - Open-source repository and documentation for the Hugo Learn theme.