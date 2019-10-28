<?php
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        $schema->table('messages_participants', function (Blueprint $table) {
            $table->integer('is_archieved');
            $table->integer('is_pinned');
            $table->integer('is_deleted');
        });
    },

    'down' => function (Builder $schema) {
        $schema->table('messages_participants', function (Blueprint $table) {
            $table->dropColumn('is_archieved');
            $table->dropColumn('is_pinned');
            $table->dropColumn('is_deleted');
        });
    }
];
