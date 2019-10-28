<?php

namespace CaptainCodey\PrivateMessages\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use Flarum\Api\Serializer\UserSerializer;
use Flarum\User\User;

class MessageSerializer extends AbstractSerializer
{

    protected $type = 'captainc-pm-message';

    protected function getDefaultAttributes($model)
    {
        return [
            'id' => $model->id,
            'conversation_id' => $model->conversation_id,
            'content' => $model->content,
            'created_at' => $model->created_at,
        ];
    }

    protected function user($post)
    {
        return $this->hasOne($post, UserSerializer::class);
    }

}