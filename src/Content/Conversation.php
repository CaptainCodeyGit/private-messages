<?php
namespace CaptainCodey\PrivateMessages\Content;

use Flarum\Api\Client;
use Flarum\Frontend\Document;
use Flarum\Http\Exception\RouteNotFoundException;
use Flarum\Http\UrlGenerator;
use Flarum\User\User;
use Illuminate\Contracts\View\Factory;
use Psr\Http\Message\ServerRequestInterface as Request;
use CaptainCodey\PrivateMessages\Api\Controller;

class Conversation
{
    protected $api;
    protected $url;
    protected $view;

    public function __construct(Client $api, UrlGenerator $url, Factory $view)
    {
        $this->api = $api;
        $this->url = $url;
        $this->view = $view;
    }

    public function __invoke(Document $document, Request $request)
    {
        $queryParams = $request->getQueryParams();
        
        $params = [
            'id' => $queryParams['id']
        ];

        $apiDocument = $this->getApiDocument($request->getAttribute('actor'), $params);
    
        $document->title = $apiDocument->data->attributes->title;
        // $document->payload['apiDocument'] = $apiDocument;

        return $document;
    }

    protected function getApiDocument(User $actor, array $params)
    {
        $response = $this->api->send(Controller\ShowConversationController::class, $actor, $params);
        $statusCode = $response->getStatusCode();

        if ($statusCode === 404) {
            throw new RouteNotFoundException;
        }

        return json_decode($response->getBody());
    }
}