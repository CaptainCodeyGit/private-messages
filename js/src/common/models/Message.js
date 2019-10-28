import Model from 'flarum/Model';
import mixin from 'flarum/utils/mixin';

export default class Message extends mixin(Model, {
  id: Model.attribute('id'),
  content: Model.attribute('content'),
  user: Model.hasOne('user'),
  createdAt: Model.attribute('created_at'),
  isHidden: Model.attribute('isHidden'),
}) {
  apiEndpoint() {
    return '/captainc/pm/messages';
  }
}