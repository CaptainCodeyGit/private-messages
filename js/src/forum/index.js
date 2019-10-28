import { extend } from 'flarum/extend';
import HeaderSecondary from 'flarum/components/HeaderSecondary';
import MessagesDropdown from './components/MessagesDropdown';
import Conversation from '../common/models/Conversation';
import Message from '../common/models/Message';
import ConversationListPage from './pages/ConversationListPage';
import ConversationSentPage from './pages/ConversationSentPage';
import ConversationTrashPage from './pages/ConversationTrashPage';
import ConversationArchivePage from './pages/ConversationArchivePage';
import ConversationViewPage from './pages/ConversationViewPage';
import messageAction from './messageAction';

import User from 'flarum/models/User';
import Model from 'flarum/models/Model';


app.initializers.add('captaincodey-private-messages', app => {
    // Relationships
    app.store.models['captainc-pm-conversation'] = Conversation;
    app.store.models['captainc-pm-message'] = Message;

    // User.prototype.unreadMessages = Model.attribute('username');

    // Routes
    const extendRoutes = {
        'messages.index': { path: '/messages', component: ConversationListPage.component() },
        'messages.sent': { path: '/messages/sent', component: ConversationSentPage.component() },
        'messages.pinned': { path: '/messages/pinned', component: ConversationSentPage.component() },
        'messages.archieved': { path: '/messages/archieved', component: ConversationArchivePage.component() },
        'messages.trash': { path: '/messages/trash', component: ConversationTrashPage.component() },
        'messages.view': { path: '/m/:id', component: ConversationViewPage.component() },
    }

    Object.assign(app.routes, extendRoutes);

    // Actions
    extend(HeaderSecondary.prototype, 'items', function (items) {
        if (app.session.user)
            items.add('messages', <MessagesDropdown />, 15);
    });

    messageAction();
}, -50);
