<?php
namespace CaptainCodey\PrivateMessages\Api\Controller;

use CaptainCodey\PrivateMessages\Api\Serializer\ConversationSerializer;
use CaptainCodey\PrivateMessages\Repository\ConversationRepository;
use Flarum\Api\Controller\AbstractShowController;
use CaptainCodey\PrivateMessages\Message;
use CaptainCodey\PrivateMessages\Conversation;
use Psr\Http\Message\ServerRequestInterface as Request;
use Tobscure\JsonApi\Document;

class ShowConversationController extends AbstractShowController
{

    public $serializer = ConversationSerializer::class;

    public $include = [
        'messages',
        'messages.user',
        'messages.user.groups',
    ];

    public function __construct(ConversationRepository $conversation)
    {
        $this->conversation = $conversation;
    }
    
    protected function data(Request $request, Document $document)
    {
        $conversationId = array_get($request->getQueryParams(), 'id');
        $actor = $request->getAttribute('actor');

        return $this->conversation->conversation($conversationId, $actor);
    }
}