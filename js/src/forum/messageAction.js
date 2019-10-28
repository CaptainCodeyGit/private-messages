import { extend } from 'flarum/extend';
import app from 'flarum/app';
import CommentPost from 'flarum/components/CommentPost';
import UserCard from 'flarum/components/UserCard';
import MessagesComposer from './components/MessagesComposer';

export default () => {
    // User card
    extend(UserCard.prototype, 'infoItems', function (items) {
        const user = this.props.user;
        const openComposer = (user) => {
            const component = new MessagesComposer({
                selectedRecipient: user.id()
            });

            app.composer.load(component);
            app.composer.show();
        }

        if (!app.session.user) return;

        items.add(
            'post-messages',
            (<i class="fas fa-envelope" onclick={openComposer.bind(null, user)}></i>),
            -1
        );
    });

    // Comment post
    extend(CommentPost.prototype, 'actionItems', function (items) {
        const post = this.props.post;
        
        const openComposer = (post) => {
            const component = new MessagesComposer({
                selectedRecipient: post.user().id()
            });

            app.composer.load(component);
            app.composer.show();
        }

        if (post.isHidden() || !app.session.user) return;

        items.add(
            'post-messages',
            (<i class="fas fa-envelope" onclick={openComposer.bind(null, post)}></i>),
            1
        );
    });

};
