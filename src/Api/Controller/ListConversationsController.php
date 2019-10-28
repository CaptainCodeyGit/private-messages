<?php
namespace CaptainCodey\PrivateMessages\Api\Controller;

use CaptainCodey\PrivateMessages\Api\Serializer\ConversationSerializer;
use CaptainCodey\PrivateMessages\Repository\ConversationRepository;
use Flarum\Api\Controller\AbstractListController;
use Psr\Http\Message\ServerRequestInterface as Request;
use Tobscure\JsonApi\Document;

class ListConversationsController extends AbstractListController
{
    public $serializer = ConversationSerializer::class;

    public function __construct(ConversationRepository $conversation)
    {
        $this->conversation = $conversation;
    }
    
    protected function data(Request $request, Document $document)
    {
        $actor = $request->getAttribute('actor');
        $type = array_get($request->getQueryParams(), 'type');

        switch ($type) {
            case 'sent':
                $conversation = $this->conversation->sent($actor);
                break;

            case 'archieved':
                $conversation = $this->conversation->archieved($actor);
                break;
            
            case 'deleted':
                $conversation = $this->conversation->deleted($actor);
                break;

            default:
                $conversation = $this->conversation->default($actor);
                break;
        }

        return $conversation;
    }
}