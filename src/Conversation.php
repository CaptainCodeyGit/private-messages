<?php

namespace CaptainCodey\PrivateMessages;

use Flarum\Database\AbstractModel;
use CaptainCodey\PrivateMessages\Message;

class Conversation extends AbstractModel
{

    protected $table = 'messages_conversations';
    
    protected $fillable = array(
        'id',
        'title',
        'user_id',
        'created_at',
    );

    public function messages()
    {
        return $this->hasMany(Message::class, 'conversation_id')->orderBy('created_at', 'DESC');
    }
}