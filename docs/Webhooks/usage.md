---
sidebar_position: 2
---
# Usage

:::info
After processing the webhook data, you must respond to the request with a `200 OK` response. This signals to the API that you received the webhook; otherwise, the same payload will be sent again under the assumption that your service is unable to receive webhooks.
:::