<?php
namespace CaptainCodey\PrivateMessages\Repository;

use Illuminate\Cache\Repository;
use CaptainCodey\PrivateMessages\Conversation;
use CaptainCodey\PrivateMessages\Participant;
use CaptainCodey\PrivateMessages\Message;

class ConversationRepository
{

    private $conversations;

    public function __construct()
    {
        $this->conversations = Conversation::select(
            'messages_conversations.id',
            'messages_conversations.title',
            'messages_participants.is_archieved'
        )
            ->withCount('messages')
            ->join('messages_participants', 'messages_conversations.id', '=', 'messages_participants.conversation_id')
        ;
    }

    public function conversation($id, $actor)
    {
        return Conversation::findOrFail($id);
    }

    public function unreadMessages()
    {
        return 1;
    }

    public function sent($actor)
    {
        $this->conversations = $this->conversations->where('messages_conversations.user_id', $actor->id);
        
        return $this->conversations->get();
    }
    
    public function archieved($actor)
    {
        $this->conversations = $this->conversations
            ->where('messages_participants.user_id', $actor->id)    
            ->where('messages_participants.is_archieved', 1)
            ->where('messages_participants.is_deleted', 0)
        ;
        
        return $this->conversations->get();
    }

    public function deleted($actor)
    {
        $this->conversations = $this->conversations->where('messages_participants.user_id', $actor->id)    
            ->where('messages_participants.is_deleted', 1)
        ;
        
        return $this->conversations->get();
    }

    public function default($actor)
    {
        $this->conversations = $this->conversations->where('messages_participants.user_id', $actor->id)
            ->where('messages_participants.is_archieved', 0)
            ->where('messages_participants.is_deleted', 0)
        ;

        return $this->conversations->get();
    }

    public function create($data, $actor)
    {
        // Create a conversation
        $conversation = new Conversation;
        $conversation->title = $data['title'];
        $conversation->user_id = $actor->id;
        $conversation->created_at = date('Y-m-d H:i:s');
        $conversation->save();

        if ($conversation) {
            // Create a message assigned to a conversation
            $message = new Message;
            $message->conversation_id =  $conversation->id;
            $message->user_id = $actor->id;
            $message->type = 'comment';
            $message->content = $data['content'];
            $message->created_at = date('Y-m-d H:i:s');
            $message->save();

            // Create participant(s)
            $participant = new Participant;
            $participant->conversation_id =  $conversation->id;
            $participant->user_id = $data['reciepent'];
            $participant->joined_at = date('Y-m-d H:i:s');
            $participant->save();
        }

        return $conversation;
    }

    public function update($id, $action, $actor) 
    {
        $this->conversation = $this->conversations
            ->where('messages_conversations.id', $id)    
            ->where('messages_participants.user_id', $actor->id)    
            ->where('messages_participants.is_archieved', 0)
            ->where('messages_participants.is_deleted', 0)
        ;

        if ($this->conversation->exists()) {
            switch ($action) {
                case 'archive':
                    $this->conversation->update(['is_archieved' => 1]);
                    break;

                 case 'delete':
                    $this->conversation->update(['is_deleted' => 1]);
                    break;
            }
        }
    }
}