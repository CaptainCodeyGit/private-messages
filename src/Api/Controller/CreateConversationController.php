<?php
namespace CaptainCodey\PrivateMessages\Api\Controller;

use CaptainCodey\PrivateMessages\Api\Serializer\ConversationSerializer;
use CaptainCodey\PrivateMessages\Repository\ConversationRepository;
use Flarum\Api\Controller\AbstractCreateController;
use Psr\Http\Message\ServerRequestInterface as Request;
use Tobscure\JsonApi\Document;

class CreateConversationController extends AbstractCreateController
{
   
    public $serializer = ConversationSerializer::class;

    public function __construct(ConversationRepository $conversation)
    {
        $this->conversation = $conversation;
    }

    protected function data(Request $request, Document $document)
    {
        $actor = $request->getAttribute('actor');
        $data = array_get($request->getParsedBody(), 'data.attributes');
        
        return $this->conversation->create($data, $actor);
    }

}