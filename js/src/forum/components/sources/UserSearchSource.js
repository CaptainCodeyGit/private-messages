import highlight from 'flarum/helpers/highlight';
import avatar from 'flarum/helpers/avatar';
import username from 'flarum/helpers/username';

export default class UserSearchSource {
    search(query) {
        const params = {
            filter: { q: query },
            page: { limit: 3 },
        };

        return app.store.find('users', params);
    }

    view(query) {
        query = query.toLowerCase();

        const results = app.store.all('users')
            .filter(user => user.username().toLowerCase().substr(0, query.length) === query);

        if (!results.length) return '';

        return [
            results.map(user => {
                const name = username(user);
                name.children[0] = highlight(name.children[0], query);

                return (
                    <li className='SearchResult' data-index={'users:' + user.id()}>
                        <a data-index={'users:' + user.id()}>
                            {avatar(user)}
                            {name}
                        </a>
                    </li>
                );
            })
        ];
    }
}