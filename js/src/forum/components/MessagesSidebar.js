import Component from 'flarum/Component';
import MessagesComposer from './MessagesComposer';

export default class MessagesSidebar extends Component {
    init() {
    }

    openComposer() {
        const component = new MessagesComposer();

        app.composer.load(component);
        app.composer.show();
    }

    view() {
        return (
            <div>
                <button onclick={this.openComposer.bind(this)} class="Button Button--primary MessagesPage-button">
                    <i class="icon fas fa-paper-plane Button-icon"></i>
                    <span class="Button-label">New Conversation</span>
                </button>

                <ul>
                    <li><a href={app.route('messages.index')}><i class="icon fas fa-inbox Button-icon"></i> Inbox</a></li>
                    <li><a href={app.route('messages.sent')}><i class="icon fas  fa-paper-plane Button-icon"></i> Sent</a></li>
                    {/* <li><a href={app.route('messages.pinned')}><i class="icon fas fa-thumbtack Button-icon"></i> Pins</a></li> */}
                    <li><a href={app.route('messages.archieved')}><i class="icon fas fa-archive Button-icon"></i> Archive</a></li>
                    <li><a href={app.route('messages.trash')}><i class="icon fas fa-trash Button-icon"></i> Trash</a></li>
                </ul>
            </div>
        );
    }
}