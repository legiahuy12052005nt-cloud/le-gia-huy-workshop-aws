---
title: "Blog 1: Amazon Bedrock Guardrails"
date: 2026-06-05
weight: 1
chapter: false
pre: " <b> 3.1. </b> "
---

# Amazon Bedrock Guardrails: A "Firewall" Against Prompt Injection and PII Leakage for LLM Applications

Hello AWS Study Group fellow members! 

Integrating LLMs as Chatbots or AI Agents is currently booming. However, there is a fatal flaw that many development teams are overlooking: Security for GenAI. How do we prevent users from "social engineering" the AI, forcing it to break system rules (Prompt Injection), or accidentally leaking sensitive personally identifiable information (PII)?

If you are still sitting around writing Regex or coding manual filters yourself, stop right there. AWS already has an enterprise-grade solution that perfectly handles this challenge: Amazon Bedrock Guardrails.

### What is Bedrock Guardrails?
Simply put, Guardrails acts as an independent, bidirectional firewall standing between your application and the Foundation Model (such as Claude 3.5, Amazon Nova):

* **Input Control:** Intercepts malicious commands or user jailbreak traps before they can even reach the LLM.
* **Output Control:** Scans and filters the LLM's responses to ensure the AI does not use profanity, go off-topic, or expose confidential system data.

### 4 "Essential" Security Layers of Guardrails
When configuring a Guardrail, you will have 4 powerful weapons at your disposal to fine-tune directly on the Console without touching a single line of code:

* **Content Filters:** Automatically detects and blocks 6 categories of harmful content, including hidden prompt attacks (Prompt Injection).
* **Denied Topics:** Defines topics in natural language that you absolutely do not want the AI to engage in (For example: Banning the AI from giving financial investment advice).
* **Word Filters:** Filters out profane language or sensitive, proprietary keywords of the enterprise.
* **Sensitive Information Filters (PII Masking):** Automatically detects government ID numbers, Emails, or Bank Account numbers. You can choose to block them entirely (Block) or automatically obscure them (Masking - turning account numbers into *********) before displaying them to the user.

### Performance vs. Cost Trade-offs?

* **About Latency:** Because it runs natively on Bedrock's optimized infrastructure, the additional latency added is only about a few milliseconds (ms), keeping the user experience completely seamless.
* **About Cost:** Pricing is based on the volume of Tokens scanned at an extremely affordable rate. In return, your application is absolutely secured, avoiding severe data leak scandals.

Securing GenAI is now a must-have requirement, no longer just a "nice-to-have" feature. Has anyone here deployed Guardrails for their running Production systems yet? Let's discuss!

---

### Reference Link
* https://aws.amazon.com/vi/blogs/machine-learning/safeguard-a-generative-ai-travel-agent-with-prompt-engineering-and-amazon-bedrock-guardrails/

![Sơ đồ minh họa](/images/blog1.png)