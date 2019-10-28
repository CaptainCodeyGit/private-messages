import ComposerBody from 'flarum/components/ComposerBody';

export default class MessagesReplyComposer extends ComposerBody {
    init() {
        super.init();
    }

    static initProps(props) {
        super.initProps(props);

        props.placeholder = 'Message';
        props.submitLabel = 'Send';
        props.className = 'ComposerBody--messages';
        props.confirmExit = props.confirmExit || 'You have not sended your message. Do you wish to discard it?';
        props.user = app.session.user;
    }

    onkeydown(e) {
        if (e.which === 13) { // Return
            e.preventDefault();
            this.editor.setSelectionRange(0, 0);
        }

        m.redraw.strategy('none');
    }

    preventExit() {
        return this.content() && this.props.confirmExit;
    }

    onsubmit() {
        app.store.createRecord('captainc-pm-message').save({
            conversation_id: this.props.id,
            content: this.content(),
            relationships: {
                user: app.session.user
            },
        }).then(
            conversation => {
                app.composer.hide();

                this.props.messages.unshift(conversation);
                m.redraw();
            }
        );
    }
}