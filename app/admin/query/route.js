import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import Ember from 'ember';
import UserSession from 'hospitalrun/mixins/user-session';
const { Route } = Ember;

export default Route.extend(UserSession, AuthenticatedRouteMixin, {
  beforeModel: function() {
    if (!this.currentUserCan('query_db')) {
      this.transitionTo('application');
    }
  }
});
