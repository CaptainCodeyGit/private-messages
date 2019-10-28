<?php
 /**
 * Private Messages - 
 *
 * @package  Private Messages
 * @author   CaptainCodey
 */
namespace CaptainCodey\PrivateMessages;

use Flarum\Extend;
use Flarum\Forum\Content as FlarumContent;
use Illuminate\Contracts\Events\Dispatcher;
use CaptainCodey\PrivateMessages\Listener;
use CaptainCodey\PrivateMessages\Api\Controller;
use CaptainCodey\PrivateMessages\Content;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less')
        ->route('/messages', 'messages.index', FlarumContent\AssertRegistered::class)
        ->route('/messages/sent', 'messages.sent', FlarumContent\AssertRegistered::class)
        ->route('/messages/archieved', 'messages.archieved', FlarumContent\AssertRegistered::class)
        ->route('/messages/pinned', 'messages.pinneee', FlarumContent\AssertRegistered::class)
        ->route('/messages/trash', 'messages.trash', FlarumContent\AssertRegistered::class)
        ->route('/m/{id}', 'messages.view', Content\Conversation::class),
    (new Extend\Routes('api'))
        ->get('/captainc/pm/conversations', 'captainc.pm.conversations.index', Controller\ListConversationsController::class)
        ->get('/captainc/pm/conversations/{id}', 'captainc.pm.conversations.show', Controller\ShowConversationController::class)
        ->post('/captainc/pm/conversations', 'captainc.pm.conversations.create', Controller\CreateConversationController::class)
        ->patch('/captainc/pm/conversations', 'captainc.pm.conversations.update', Controller\UpdateConversationController::class)

        // Messages
        ->post('/captainc/pm/messages', 'captainc.pm.messages.create', Controller\ReplyConversationController::class),
    function (Dispatcher $events) {
        $events->subscribe(Listener\AddForumMessagesRelationship::class);
    },
];