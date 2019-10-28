<?php

namespace CaptainCodey\PrivateMessages\Listener;

use CaptainCodey\PrivateMessages\Repository\ConversationRepository;
use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\UserSerializer;

class AddForumMessagesRelationship
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'prepareApiAttributes']);
    }

    public function prepareApiAttributes(Serializing $event)
    {
        if ($event->isSerializer(UserSerializer::class)) {
            $conversation = new ConversationRepository;
            $event->attributes['unreadMessages'] = $conversation->unreadMessages();
        }
    }
}