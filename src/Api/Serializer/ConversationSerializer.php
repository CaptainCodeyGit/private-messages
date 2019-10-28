<?php

namespace CaptainCodey\PrivateMessages\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use CaptainCodey\PrivateMessages\Message;
use CaptainCodey\PrivateMessages\Api\Serializer\MessageSerializer;
use CaptainCodey\PrivateMessages\Repository\MessageRepository;
use Tobscure\JsonApi\Collection;
use Tobscure\JsonApi\Relationship;

class ConversationSerializer extends AbstractSerializer
{

    protected $type = 'captainc-pm-conversation';

    protected function getDefaultAttributes($model)
    {
        return $model->toArray();
    }

    protected function messages($conversation)
    {
        return $this->hasMany($conversation, MessageSerializer::class);
    }

}