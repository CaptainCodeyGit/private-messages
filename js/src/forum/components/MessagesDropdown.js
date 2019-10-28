import NotificationsDropdown from 'flarum/components/NotificationsDropdown';

export default class MessagesDropdown extends NotificationsDropdown {
    static initProps(props) {
        props.label = 'Private Messages';
        props.icon = 'fas fa-envelope';

        super.initProps(props);
    }

    init() {
        super.init();
    }

    onclick() {
        this.goToRoute();
    }

    goToRoute() {
        m.route(app.route('messages.index'));
    }

    getUnreadCount() {
        // console.log(app.session.user.unreadMessages())
        // return app.session.unreadMessages;
    }

    getNewCount() {
        // return app.session.unreadMessages;
    }
}
