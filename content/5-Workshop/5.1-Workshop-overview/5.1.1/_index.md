---
title: "Context and Realistic Problem Statement"
date: 2026-07-05
weight: 2
chapter: false
pre: " <b> 5.1.1 </b> "
---

#### Realistic Context

In reality today, online phishing attacks and the spread of infostealer malware to hijack accounts are happening in highly complex ways across the internet environment. Therefore, we chose the topic of building the phishshield ecosystem. This is a multi-layered cybersecurity ecosystem that helps proactively detect, prevent, and isolate malicious trap links and phishing websites right from the user's device and browser side (client edge), preventing users from having any chance to interact with the malware.

#### Target Users and Audience

* The first group includes daily social media users (such as facebook and discord) who easily fall into traps like lottery scams, fake bank links, or malware designed to steal account tokens.
* The next group includes cybersecurity administrators (secops) in organizations and enterprises who need a centralized tool to protect their employees within the internal network, while simultaneously collecting malicious link samples for incident response.

#### Problems to be Solved

* **Overcoming the passive nature of traditional security solutions:** Usually, incidents are only handled after accounts are lost or information is leaked. Our system aims to block threats immediately when a user clicks a link in their browser via a chrome extension and an automated bot scanning discord chat channels.
* **Resolving the system overload issue during data spikes:** When a large number of users report malicious link logs simultaneously, the backend system can easily get congested. Our project resolves this by using a message queue as a buffer to orchestrate asynchronous data.
* **Centralizing forensic data:** Gathering all collected malicious sample data into a centralized repository (threat intel data lake) for deep analysis later on.