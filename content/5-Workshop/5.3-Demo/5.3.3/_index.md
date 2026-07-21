---
title: "System Integration and API Gateway Configuration"
date: 2026-07-05
weight: 3
chapter: false
pre: " <b> 5.3.3. </b> "
---

#### Configure amazon sqs trigger (event-driven system integration)

To finalize the event-driven architecture of our ecosystem, we configure the amazon sqs message queue as a direct invocation source (trigger) for the internal lambda worker function. This ensures that the worker function automatically wakes up to process logs whenever a new payload arrives in the queue.

1. Inside the configuration management workspace of the PhishShield-LambdaWorker function, locate and click the + add trigger action button.
2. On the trigger configuration layout interface, specify the integration parameters as follows:
   * Select a source: click the search directory and select sqs from the available service catalog.
   * sqs queue: click inside this field for the platform to populate the list, then select the exact queue identifier PhishShield-DeepAnalysisQueue.
   * leave the remaining performance orchestration parameters like batch size (10) and batch window (0 seconds) entirely at their default values to keep infrastructure consumption optimized under the aws free tier budget boundaries.
3. Click the add button at the bottom section to conclude the asynchronous event pipeline binding.


#### Create amazon api gateway (api entry gate)

The api gateway component serves as the unique public-facing internet ingestion entry gate to receive all malicious link check request payloads sent from the chrome extension and discord bot agents.

1. Navigate to the central management console of the amazon api gateway service. On the api type selection landing page, locate the rest api protocol framework card and click the orange build button.
2. On the new api initialization setup dashboard, supply the standard property criteria for our project as detailed below:
   * choose api type: select the new api checkbox option.
   * api name: enter the descriptive string identifier PhishShield-API.
   * endpoint type: select the regional configuration parameter to maximize throughput delivery and minimize request execution latency within the southeast asia zone.
3. Click the orange create api button situated at the bottom right boundaries to finalize the perimeter gateway resource provisioning.

#### Create method and connect to lambda router

Once the perimeter gateway boundary is established, we configure the data ingestion method to route all link checking payloads directly to our computing lambda router function.

1. Inside the resources management interface of the newly created phishshield-api, click on the create method action button.
2. Configure the specific technical properties for our new method as detailed below:
   * method type: select the post option (since client edge agents will transmit url string data using a json body request structure).
   * integration type: select the lambda function option.
   * lambda proxy integration: enable this feature toggle. This is a mandatory core requirement allowing the lambda router function to capture and parse the raw incoming json payload structure transmitted from the user's browser or chat bot.
   * lambda function: select the us-east-1 region and search to locate the exact identifier string: PhishShield-LambdaRouter.
3. Click the orange create method button at the absolute bottom corner to complete the technical integration loop.

#### Deploy api and retrieve official invoke url

1. Remaining on the menu interface, click on the deploy api button.
2. A small pop-up window will appear requesting the environment (stage):
   * stage: click the dropdown box and select *new stage*.
   * stage name: type prod (representing the actual production environment).

---

#### Testing and verifying result flow at the client layer (git bash)

Open git bash and type the command to test the system immediately using this code block:

```bash
curl -X POST [https://e7202kmo0i.execute-api.us-east-1.amazonaws.com/prod](https://e7202kmo0i.execute-api.us-east-1.amazonaws.com/prod) \
  -H "Content-Type: application/json" \
  -d '{"url": "[http://signin-paypal-secure-update.com](http://signin-paypal-secure-update.com)"}'