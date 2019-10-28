<?php
namespace CaptainCodey\PrivateMessages\Repository;

use Illuminate\Cache\Repository;
use CaptainCodey\PrivateMessages\Message;
use CaptainCodey\PrivateMessages\Conversation;
use CaptainCodey\PrivateMessages\Participant;

class MessageRepository
{

    protected $message;
    protected $cache;
  
    public function __construct(Participant $participant, Conversation $conversation, Message $message, Repository $cache)
    {
        $this->message = $message;
        $this->conversation = $conversation;
        $this->participant = $participant;
        $this->cache = $cache;
    }
  
    protected function checkStarterParticapant($conversationId)
    {
        // Check if the conversation starter is a participant in this conversation.
        return $this->conversation
            ->newQuery()
            ->join('messages_participants', 'messages_conversations.id', '=', 'messages_participants.conversation_id')
            ->where('messages_conversations.id', '=', $conversationId)
            ->whereColumn('messages_conversations.user_id', 'messages_participants.user_id')
            ->count()
        ;
    }

    protected function query()
    {
        return $this->message
            ->newQuery()
            ->orderBy('created_at', 'desc')
        ;
    }

    public function all()
    {
        return $this->query()->get();
    }

    public function create($data, $actor)
    {
        $conversation = $this->conversation->find($data['conversation_id']);

        if ($conversation) {
            //TODO: Add security check; Check if the current user is allowed to see this conversation 
            $this->message->user_id = $actor->id;
            $this->message->type = 'comment';
            $this->message->content = $data['content'];
            $this->message->conversation_id = $conversation->id;
            $this->message->created_at = date('Y-m-d H:i:s');
            $this->message->save();

            // Add conversation starter as participant after sending a message
            // This won't work if the conversation starter is the message sender.
            if (!$this->checkStarterParticapant($conversation->id) 
                && $actor->id != $conversation->user_id) {
                $this->participant->user_id = $conversation->user_id;
                $this->participant->conversation_id = $conversation->id;
                $this->participant->joined_at = date('Y-m-d H:i:s');
                $this->participant->save();
            }
        }
        
        return $this->message;
    }
}