import Ember from 'ember';
const { Component, isArray } = Ember;

export default Component.extend({
  isArray: function() {
    let content = this.get('content');
    return Ember.isArray(content);
  }.property('content')
});
