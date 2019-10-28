<?php

namespace CaptainCodey\PrivateMessages;

use Flarum\Database\AbstractModel;

class Participant extends AbstractModel
{

    protected $table = 'messages_participants';
    
    protected $fillable = array(
        'conversation_id',
        'user_id',
        'joined_at',
        'is_archieved',
    );

}