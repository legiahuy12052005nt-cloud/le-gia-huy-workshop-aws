---
title: "Worklog Week 9"
date: 2026-06-15
weight: 9
chapter: false
pre: " <b> 1.9. </b> "
---

### Week 9 Objectives:

* Build and develop client edge application components including a browser extension and a social media monitoring bot.
* Establish secure connections from client applications to the real-time processing system via the api gateway deployed last week.
* Finalize the user warning interface and the logic for intercepting and retracting messages containing malicious links.

---

### Tasks to be Deployed This Week:

| Day | Task | Start Date | End Date | Resource Links |
| --- | --- | --- | --- | --- |
| 2 | - Initialize the chrome extension project structure, set up the manifest.json configuration file to grant tab access and intercept navigation flows <br> - Design the warning.html alert page interface using html and css | 15/06/2026 | 15/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 3 | - Program the javascript source code for the background script to listen to user url access events <br> - Write the api call function to push link data to amazon api gateway and handle the logic of redirecting to the warning page if a risky result is received | 16/06/2026 | 16/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 4 | - Register and initialize the discord bot application on the developer portal, configure necessary oauth2 privileges and scopes (such as reading and managing messages) <br> - Initialize the nodejs programming environment and install connection libraries | 17/06/2026 | 17/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 5 | - Program the logic for the discord bot using regular expressions (regex) to extract urls from chat channel message segments <br> - Integrate the url checking api call and execute the immediate message deletion command if data-leaking malware is detected | 18/06/2026 | 18/06/2026 | <https://cloudjourney.awsstudygroup.com/> |
| 6 | - Perform end-to-end testing across both browser and messaging application environments <br> - Thoroughly resolve errors related to cors cross-origin policies, optimize api response latency, and package the source code | 19/06/2026 | 19/06/2026 | <https://cloudjourney.awsstudygroup.com/> |

---

### Week 9 Achievements:

* Successfully developed the core of the chrome extension with the ability to directly intervene in the web browsing flow, identifying and blocking suspicious accesses before the webpage can load actual content.
* Built an intuitive warning.html page interface, clearly explaining the reasons the system initiated the interception and providing a reference identifier for the end user.
* Successfully operationalized the discord bot on a test server; the bot is capable of automatically scanning bulk messages in real time and extracting urls with high accuracy using regex tools.
* Synchronously integrated both edge application flows with the amazon api gateway analysis center; completely resolved cors security barriers to ensure seamless bidirectional data transmission.
* Validated and completed the multi-platform automated defense scenario: the extension successfully redirects malicious browser traffic, while the social network bot triggers administrative privileges to revoke and permanently delete messages containing phishing links within milliseconds.