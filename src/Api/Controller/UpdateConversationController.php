<?php
namespace CaptainCodey\PrivateMessages\Api\Controller;

use CaptainCodey\PrivateMessages\Api\Serializer\ConversationSerializer;
use CaptainCodey\PrivateMessages\Repository\ConversationRepository;
use Flarum\Api\Controller\AbstractShowController;
use Psr\Http\Message\ServerRequestInterface as Request;
use Tobscure\JsonApi\Document;

class UpdateConversationController extends AbstractShowController
{
   
    public $serializer = ConversationSerializer::class;

    public function __construct(ConversationRepository $conversation)
    {
        $this->conversation = $conversation;
    }

    protected function data(Request $request, Document $document)
    {
        $actor = $request->getAttribute('actor');

        $data = array_get($request->getParsedBody(), 'data');
        $attr = array_get($data, 'attributes');
        
        if ($attr['action'] != 'archive' && $attr['action'] != 'delete')
            return;

        return $this->conversation->update($data['id'], $attr['action'], $actor);
    }

}