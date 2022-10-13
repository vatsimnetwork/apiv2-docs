---
sidebar_position: 4
---
# Structure

```json
{
    "action": "member_changed_action",
    "resource": 1612400,
    "updates": [
        {
            "authority": "Terminal",
            "comment": "pilotrating changed from 0 to 1",
            "deltas": [
                {
                    "field": "pilotrating",
                    "before": 0,
                    "after": 1
                }
            ],
            "timestamp": 1665490153.562588
        }
    ]
}
```

## `action`
The `action` field describes what kind of webhook is being emitted. Below is a list of the possible actions and their presecribed function, along with any other relevant information.

| Action                  | `resource` Field                        | Function                        |
|-------------------------|-----------------------------------------|---------------------------------|
| `member_changed_action` | [`Member.id`](./Models/member#memberid) | Emitted when a user is modified |

More webhooks will be added throughout various testing phases to facilitate user creation, GDPR deletion requests, and events.

## `resource`
The `resource` field denotes the unique identifier of the database object being changed. The underlying database field varys by action, and the mapping is provided in the [actions table](#action).

## `updates`
When a change is made to a database model, a single, timestamped **update** is generated with all of the [deltas](#deltas) associated with that update contained within.
:::info
Generally, the length of this field will be 1; however in the event your service is unable to accept webhooks, this field will accumulate all updates that have occurred since the last successful webhook. In this event, the `updates` field is pre-sorted from the earliest to latest.
:::

### `authority`
The `authority` field simply denotes the organization or service responsible for the changes enclosed in the webhook.

### `deltas`
A **delta** simply represents a change in a single field's value, and thus includes the previous and new value. Multiple deltas can be bundled up into an [update](#updates) if multiple fields are changed with a single action.

In webhooks that report the *creation* of a model, the `before` field will be set to `null`.

In webhooks that report the *deletion* of a model, the `after` field will be set to `null`.