<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        $schema->create('messages_conversations', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->integer('folder_id');
            $table->string('title');
            $table->dateTime('created_at');	
        });
    },

    'down' => function (Builder $schema) {
        $schema->drop('messages_conversations');
    }
];
