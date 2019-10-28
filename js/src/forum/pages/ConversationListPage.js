import Page from 'flarum/components/Page';

import MessagesSidebar from '../components/MessagesSidebar';
import MessageListItem from '../components/MessageListItem';

export default class ConversationListPage extends Page {
    init() {
        super.init();

        this.loadResults();
    }

    view() {
        const conversations = app.cache.conversations || [];

        return (
            <div className="MessagesPage">
                <header class="Hero MessagesHero MessagesHero--colored">
                    <div class="container">
                        <div class="containerNarrow">
                            <h2 class="Hero-title">Inbox</h2>
                        </div>
                    </div>
                </header>
                <div class="container">
                    <div class="sideNavContainer">
                        <nav class="MessagesPage-nav sideNav">
                            {MessagesSidebar.component()}
                        </nav>
                        <div class="MessagesPage-results sideNavOffset">
                            {conversations.length ? conversations.map(conversation => MessageListItem.component({ conversation: conversation, page: 'inbox' })) : !this.loading ? (
                                <div class="MessagesPage-error">
                                    <div class="MessagesPage-empty">
                                        <img width="100" src="https://image.flaticon.com/icons/svg/189/189058.svg" />
                                        <span class="MessagesPage-emptyTitle">Oh snap!</span> Your inbox is empty.
                                    </div>
                                </div>
                            ) : (<div>Loading...</div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    loadResults() {
        this.loading = true;

        return app.store.find('captainc/pm/conversations')
            .then(results => {
                app.cache.conversations = results;
                m.redraw();
            })
            .then(() => {
                this.loading = false;
                m.redraw();
            });
    }
}