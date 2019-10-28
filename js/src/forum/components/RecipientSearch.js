import Search from 'flarum/components/Search';
import ItemList from 'flarum/utils/ItemList';
import UserSearchSource from './sources/UserSearchSource';

export default class RecipientSearch extends Search {

    config(isInitialized) {
        if (isInitialized)
            return;

        const self = this;
        const searchResult = document.getElementsByClassName('Search-results')[1];

        // Events

        if (searchResult) {
            searchResult.addEventListener('click', function () {
                const target = searchResult.getElementsByClassName('SearchResult active')[0];

                self.addRecipient(target.dataset.index);
            });

            searchResult.addEventListener('touchstart', function (e) {
                const target = e.target.parentNode;

                self.addRecipient(target.dataset.index);
            });
        }

        this.selectedRecipient = this.props.selectedRecipient;
        this.recipientsList = this.props.recipientsList;

        // Select a recipient
        if (this.selectedRecipient)
            self.addRecipient('users:' + this.selectedRecipient);

        super.config(isInitialized);
    }

    view() {
        if (typeof this.value() === 'undefined')
            this.value('');

        if (!this.sources)
            this.sources = this.sourceItems().toArray();

        const loading = this.value() && this.value().length >= 3;

        return (
            <h3>
                {typeof this.recipientsList == 'function' ? (
                    <div>
                        {this.recipientsList().toArray().map(recipient =>
                            <div class="MessageComposer-reciepent">
                                {recipient.username()}
                                <i onclick={this.removeRecipient.bind(this, recipient)} class="fas fa-user-times MessageComposer-reciepentRemove"></i>
                            </div>
                        )}

                    </div>
                ) : ''}

                {!this.selectedRecipient ?
                    (<div>
                        <input class="FormControl" placeholder="Reciepents" value={this.value()} oninput={m.withAttr('value', this.value)} />
                        <div class={'Search' + (loading ? ' open' : '')}>
                            <div class="Dropdown-menu Search-results Search-results--messages fade in">
                                {this.value() ? (this.loadingSources ? 'loading' : this.sources.map(source => source.view(this.value()))) : ''}
                            </div>
                        </div>
                    </div>) : (<div></div>)}
            </h3>
        );
    }

    sourceItems() {
        const items = new ItemList();

        items.add('users', new UserSearchSource());

        return items;
    }

    clear() {
        this.value('');

        m.redraw();
    }

    addRecipient(value) {
        let values = value.split(':'),
            type = values[0],
            id = values[1];

        let recipient = this.findRecipient(type, id);

        this.recipientsList().add(value, recipient);
        this.clear();
    }

    removeRecipient(recipient) {
        this.recipientsList().remove('users' + ":" + recipient.id());

        m.redraw();
    }

    findRecipient(store, id) {
        return app.store.getById(store, id);
    }
}