---
title: "Foundational Security and Permission Solutions"
date: 2026-07-05
weight: 2
chapter: false
pre: " <b> 5.2.2 </b> "
---

The information safety factor of the defense system itself is placed as our top priority through the following design principles:

* **Minimizing public resource exposure:** In the entire system architecture, only the amazon api gateway ingestion portal is opened publicly to the internet to receive data sent from the client edge agents. All remaining components, such as the aws lambda processing functions, amazon dynamodb database, amazon sqs queue, and amazon s3 storage, are completely closed within the internal network and cannot be accessed directly from the outside.
* **Absolutely no hard-coded access keys:** We strictly comply with the regulation of not permanently storing secret credential strings like an access key or secret key inside the application source code, configuration files of the chrome extension, or the discord bot to prevent the risk of source code leaks.
* **Permissions based on iam roles:** All interaction permissions between services within the cloud system are granted through the mechanism of assigning iam roles directly to aws lambda functions. These permissions are automatically authenticated and short-lived.
* **Applying the principle of least privilege:** The iam roles are configured by us to segment permissions to the maximum extent for each specific processing function. For example, the lambda function responsible for receiving logs at the outer boundary only has the sole permission to write messages into the amazon sqs queue but does not have read or delete permissions; conversely, the deep analysis lambda function at the inner layer is granted permissions to read from the queue and write to amazon s3. This ensures that if one component is attacked, the entire system is still not affected in a chain reaction.