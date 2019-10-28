<?php
namespace CaptainCodey\PrivateMessages\Api\Controller;

use CaptainCodey\PrivateMessages\Api\Serializer\MessageSerializer;
use CaptainCodey\PrivateMessages\Repository\MessageRepository;
use Flarum\Api\Controller\AbstractCreateController;
use Psr\Http\Message\ServerRequestInterface as Request;
use Tobscure\JsonApi\Document;

class ReplyConversationController extends AbstractCreateController
{
   
    public $serializer = MessageSerializer::class;

    public function __construct(MessageRepository $message)
    {
        $this->message = $message;
    }

    protected function data(Request $request, Document $document)
    {
        $actor = $request->getAttribute('actor');
        $data = array_get($request->getParsedBody(), 'data.attributes');
        
        return $this->message->create($data, $actor);
    }

}