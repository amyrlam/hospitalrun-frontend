import Ember from 'ember';
import { translationMacro as t } from 'ember-i18n';
const { Component, isEmpty, run } = Ember;

export default Component.extend({
  tagName: 'span',
  showLoadingMessages: false,
  loadingMessages: [
    t('loading.messages.0'),
    t('loading.messages.1'),
    t('loading.messages.2'),
    t('loading.messages.3'),
    t('loading.messages.4'),
    t('loading.messages.5'),
    t('loading.messages.6'),
    t('loading.messages.7'),
    t('loading.messages.8'),
    t('loading.messages.9'),
    t('loading.messages.10'),
    t('loading.messages.11')
  ],

  _setRandomMessage: function() {
    let loadingMessages = this.get('loadingMessages');
    let idx = Math.floor(Math.random() * loadingMessages.length);
    this.set('message', loadingMessages[idx]);
    this.set('timer', run.later(this, this._setRandomMessage, 1000));
  },

  didInsertElement: function() {
    this._setRandomMessage();
  },

  willDestroyElement: function() {
<<<<<<< ed59f6abf4d77176b93a80e80dbfede75fb9800f
    let timer = this.get('timer');
    if (!Ember.isEmpty(timer)) {
      Ember.run.cancel(timer);
=======
    var timer = this.get('timer');
    if (!isEmpty(timer)) {
      run.cancel(timer);
>>>>>>> more of prior commit, except:
    }
  }
});
