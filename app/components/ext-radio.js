import Ember from 'ember';
const { Component, isEmpty } = Ember;

export default Component.extend({
  includeOtherOption: false,
  otherOptionLabel: null,
  showInline: false,

  haveLabel: function() {
<<<<<<< ed59f6abf4d77176b93a80e80dbfede75fb9800f
    let firstRadio = this.get('content.firstObject');
    return !Ember.isEmpty(firstRadio.label);
=======
    var firstRadio = this.get('content.firstObject');
    return !isEmpty(firstRadio.label);
>>>>>>> more of prior commit, except:
  }.property('content'),

  radioClass: function() {
    if (this.get('showInline')) {
      return 'radio-inline';
    } else {
      return 'radio';
    }
  }.property('showInline')
});
