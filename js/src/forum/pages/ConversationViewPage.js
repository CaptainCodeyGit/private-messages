import Page from 'flarum/components/Page';
import MessagesStream from '../components/MessagesStream';
import MessagesSidebar from '../components/MessagesSidebar';
import MessagesReplyComposer from '../components/MessagesReplyComposer';

export default class ConversationViewPage extends Page {
    init() {
        super.init();

        this.conversation = null;
        this.messages = [];

        this.loadConversation();
    }

    view() {
        return (
            <div className="MessagesPage">
                <header class="Hero DiscussionHero DiscussionHero--colored">
                    <div class="container">
                        <ul class="DiscussionHero-items">
                            <li class="item-title">
                                {/* <h2 class="DiscussionHero-title">{this.conversation ? this.conversation.title() : ''}</h2> */}
                            </li>
                            <li class="item-autor">
                                <h4>There are 2 people in this conversation</h4>
                                <img class="Avatar" src="http://localhost:8888/project/gargoyle/assets/avatars/bGjGozcj6EqQWNDk.png" />
                                <img class="Avatar" src="http://localhost:8888/project/gargoyle/assets/avatars/uJK3jUK595EIN3bB.png" />
                            </li>
                        </ul>
                    </div>
                </header>
                <div class="container">
                    <div class="sideNavContainer">
                        <nav class="MessagesPage-nav sideNav">
                            {MessagesSidebar.component()}
                        </nav>
                        <div class="IndexPage-results sideNavOffset">

                            <div class="PostStream">
                                {this.messages.map(message => (
                                    <div>
                                        {MessagesStream.component({ 'message': message })}
                                    </div>
                                ))}
                                <div class="PostStream-item">
                                    <article class="Post ReplyPlaceholder" onclick={this.replyComposer.bind(this)}>
                                        <header class="Post-header">
                                            <img class="Avatar PostUser-avatar" src="http://localhost:8888/project/gargoyle/assets/avatars/bGjGozcj6EqQWNDk.png" /> Write a Reply...
                                        </header>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    replyComposer() {
        const component = new MessagesReplyComposer({ id: this.conversation.id(), messages: this.messages });
        app.composer.load(component);
        app.composer.show();
    }

    showConversation(conversation) {
        this.conversation = conversation;

        this.conversation.messages().map(message => {
            this.messages.push(message);
        });

        m.redraw();
    }

    loadConversation() {
        const paramId = m.route.param('id');
        return app.store.find('captainc/pm/conversations', paramId).then(this.showConversation.bind(this));
    }

}