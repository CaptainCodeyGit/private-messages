<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        $schema->create('messages_posts', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->integer('conversation_id');
            $table->integer('number');
            $table->string('type');
            $table->text('content');
            $table->dateTime('created_at');	
        });
    },

    'down' => function (Builder $schema) {
        $schema->drop('messages_posts');
    }
];
