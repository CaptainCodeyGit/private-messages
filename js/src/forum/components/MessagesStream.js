import Component from 'flarum/Component';
import PostUser from 'flarum/components/PostUser';
import humanTime from 'flarum/helpers/humanTime';

export default class MessagesStream extends Component {
    init() {
        super.init();
    }

    view() {
        const message = this.props.message;
        const user = new PostUser({ post: this.props.message });

        return (
            <article class="Post CommentPost">
                <div>
                    <header class="Post-header">
                        <ul>
                            <li class="item-user">
                                {(user.render())}
                            </li>
                            <li class="item-meta">{humanTime(message.createdAt())}</li>
                        </ul>
                    </header>
                    <div class="Post-body">{message.content()}</div>
                </div>
            </article>
        )
    }
}