---
title: "Blog 2: Amazon GuardDuty"
date: 2026-06-24
weight: 2
chapter: false
pre: " <b> 3.2. </b> "
---

# Amazon GuardDuty: Activating AI Silent Detective to Protect AWS Accounts 24/7

Hello everyone in AWS Study Group! 

When managing a system on the Cloud, have you ever wondered: "Is someone silently brute-forcing my EC2 server?" or "How can I know if a leaked API Key is making strange calls from another country to prepare for sabotage?"

Reviewing millions of lines of logs manually every day is impossible. To solve this problem, AWS provides a quite powerful security assistant powered by AI: Amazon GuardDuty.

### What is Amazon GuardDuty?
Simply put, GuardDuty is like a smart silent detective continuously patrolling and monitoring all activities within your AWS account.

This service uses Machine Learning to analyze behavior. It automatically recognizes what normal system activity is and what a hacker's anomalous behavior is to dispatch warning signals immediately.

### What does this silent detective monitor?
Without needing to install any software (Agent) on the server that slows down the system, GuardDuty automatically analyzes data silently from core log sources:

* **AWS CloudTrail:** Detects anomalous API calls (for example: suddenly there is a command creating a series of high-configuration EC2 instances in a Region you have never used — a sign of account hack for crypto mining).
* **VPC Flow Logs:** Detects suspicious traffic flows (for example: an EC2 server automatically connecting and exfiltrating data to malicious servers - Command and Control Server).
* **DNS Logs:** Detects malicious domain scanning behaviors or association with ransomware.

### 3 core advantages that simplify the security problem
Instead of having to build a complex SIEM system yourself, GuardDuty solves the security challenge thanks to 3 practical advantages:

* **Instant Activation:** Just go to the Console and click activate, the service will self-configure the background log scanning workflow without needing networking intervention or complex setup.
* **Zero Overhead:** Because GuardDuty collects logs directly from AWS's independent infrastructure layer, it consumes absolutely zero percent of CPU or RAM from the running application.
* **Intelligent Severity-based Alerts:** The system automatically categorizes threats into 3 levels (Low - Medium - High), helping you know exactly which critical issue needs priority handling immediately (for example: Root account login from an unusual IP address).

### Summary
The cost of GuardDuty is calculated based on the actual volume of logs it analyzes, with a 30-day free trial available for new accounts. This is a highly recommended piece of the puzzle if you want to upgrade your system to a Safe and Sustainable Operation level.

---

### Reference Link
* https://aws.amazon.com/vi/blogs/security/visualizing-amazon-guardduty-findings/

![Sơ đồ minh họa](/images/blog2.png)