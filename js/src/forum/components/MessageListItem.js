import Component from 'flarum/Component';
import ItemList from 'flarum/utils/ItemList';

export default class MessageListItem extends Component {
    init() {
        this.conversation = this.props.conversation;
        this.page = this.props.page;
    }

    view() {
        const actions = this.actionItems().toArray();

        return (
            <div class="DiscussionListItem">
                <div class="DiscussionListItem-content Slidable-content">
                    <div class="DiscussionListItem-read MessagesListItem-read">
                        <i class="fas fa-envelope-open-text"></i>
                    </div>

                    <a href={app.route('messages.view', { id: this.conversation.id() })} class="DiscussionListItem-main">
                        <h3 class="DiscussionListItem-title">{this.conversation.title()}</h3>
                        <ul class="DiscussionListItem-info">
                            <li class="item-terminalPost">
                                <i class="icon fas fa-reply"></i>&nbsp;
                                <span class="username">Shahiem</span> replied&nbsp;
                                <time>17 days ago</time>
                            </li>
                        </ul>
                    </a>
                    <span class="DiscussionListItem-count">{this.conversation.messagesCount()}</span>
                </div>

                <div class="ButtonGroup Dropdown dropdown DiscussionListItem-controls itemCount1">
                    <button class="Dropdown-toggle Button Button--icon Button--flat Slidable-underneath Slidable-underneath--right" data-toggle="dropdown" aria-expanded="true">
                        <i class="icon fas fa-ellipsis-v Button-icon"></i><span class="Button-label"></span>
                        <i class="icon fas fa-caret-down Button-caret"></i>
                    </button>

                    <ul class="Dropdown-menu dropdown-menu Dropdown-menu--bottom">
                        {actions.map(action => (
                            <li class={'item-' + action.type} onclick={this.onMouseClick.bind(this, action.type)}>
                                <button class="hasIcon" type="button">
                                    <i class={'icon fas fa-' + action.icon + ' Button-icon'}></i>
                                    <span class="Button-label">{action.label}{''}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }

    actionItems() {
        const items = new ItemList();

        if (this.page && this.page != 'trash') {
            items.add('trash', {
                icon: 'trash',
                type: 'delete',
                label: 'Delete',
            }, 1);
        }

        if (this.page && this.page != 'archive' && this.page != 'trash') {
            items.add('archive', {
                icon: 'archive',
                type: 'archive',
                label: 'Archive',
            }, 2);
        }

        return items;
    }

    onMouseClick(actionType) {
        // Todo animation
        if (this.conversation) {
            this.element.remove();
            this.conversation.save({ action: actionType });
        }
    }
}