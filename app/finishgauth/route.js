import Ember from 'ember';
import SetupUserRole from 'hospitalrun/mixins/setup-user-role';

export default Ember.Route.extend(SetupUserRole, {
  config: Ember.inject.service(),
  database: Ember.inject.service(),
  session: Ember.inject.service(),
  model: function(params) {
    if (params.k && params.s1 && params.s2 && params.t) {
      this.get('session').authenticate('authenticator:custom', {
        googleAuth: true,
        params: params
      });
      let oauthConfigs = {
        configConsumerKey: params.k,
        configConsumerSecret: params.s1,
        configOauthToken: params.t,
        configTokenSecret: params.s2
      };
      return this.get('config').saveOauthConfigs(oauthConfigs)
        .then(function() {
          oauthConfigs.configUseGoogleAuth = true;
          return this.get('database').setup(oauthConfigs).then(() => {
            return this.setupUserRole();
          });
        }.bind(this));
    }
  }
});
