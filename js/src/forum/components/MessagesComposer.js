import ComposerBody from 'flarum/components/ComposerBody';
import ItemList from 'flarum/utils/ItemList';
import UserSearchSource from './sources/UserSearchSource';
import RecipientSearch from './RecipientSearch';

export default class MessagesComposer extends ComposerBody {
    init() {
        super.init();

        this.title = m.prop('');
        this.participent = m.prop('');

        this.recipientSearch = RecipientSearch.component({
            recipientsList: m.prop(new ItemList),
            selectedRecipient: this.props.selectedRecipient
        });
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
        return (this.title() || this.content()) && this.props.confirmExit;
    }

    headerItems() {
        const items = super.headerItems();

        items.add('participentId', this.recipientSearch);
        items.add('messageTitle', (
            <h3>
                <input className="FormControl"
                    value={this.title()}
                    oninput={m.withAttr('value', this.title)}
                    placeholder="Title"
                    disabled={!!this.props.disabled}
                />
            </h3>
        ));

        return items;
    }

    data() {
        let reciepent = null;

        this.recipientSearch.props.recipientsList().toArray().map(user => {
            reciepent = user.id();
        })

        return {
            title: this.title(),
            content: this.content(),
            reciepent: reciepent,
        };
    }

    onsubmit() {
        const data = this.data();

        app.store.createRecord('captainc-pm-conversation').save(data).then(
            conversation => {
                app.composer.hide();
                m.route(app.route('messages.view', { id: conversation.id() }))
            }
        );
    }
}