<?php

namespace CaptainCodey\PrivateMessages;

use Flarum\Database\AbstractModel;
use Flarum\User\User;

class Message extends AbstractModel
{

    protected $table = 'messages_posts';

    protected $fillable = array(
        'id',
        'content',
    );

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

}