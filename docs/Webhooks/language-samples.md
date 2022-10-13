---
sidebar_position: 5
---
# Language Samples

## Python (Django)
```py
import os
from django.http import HttpResponse, HttpResponseForbidden, HttpResponseBadRequest
from apps.users.models import User


def process_member_changed_webhook(req_body):
    user = User.objects.get(cid=req_body.get('resource'))
    for update in req_body.get('updates'):
        for delta in update.get('deltas'):
            # Depending on your schema, you may need to do some custom mapping of
            # VATSIM fields to your own fields.
            setattr(user, delta.get('field'), delta.get('after'))


def receive_webhook(request):
    """
    Endpoint where webhooks get sent to.

    Determines if the authorization token is valid and figures out which
    helper function to call to deal with the webhook.
    """
    if request.META.get('Authorization') != os.getenv('WEBHOOK_API_TOKEN'):
        return HttpResponseForbidden('Invalid webhook token')

    match request.body.get('action'):
        case 'member_changed_action':
            process_member_changed_webhook(request)
        # Rinse and repeat for other webhook actions
        default:
            return HttpResponseBadRequest('Invalid webhook action')

    # 200 OK response indicates to the API that webhook was recieved and processed
    return HttpResponse()
```