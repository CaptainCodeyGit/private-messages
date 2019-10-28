import Model from 'flarum/Model';
import mixin from 'flarum/utils/mixin';

export default class Conversation extends mixin(Model, {
  id: Model.attribute('id'),
  title: Model.attribute('title'),
  messagesCount: Model.attribute('messages_count'),
  messages: Model.hasMany('messages'),
}) {
  apiEndpoint() {
    return '/captainc/pm/conversations';
  }
}