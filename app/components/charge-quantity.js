import Ember from 'ember';
const { Component, computed, inject, isEmpty } = Ember;

export default Component.extend({
  i18n: inject.service(),
  classNames: ['col-xs-2', 'form-group'],
  classNameBindings: ['hasError'],
  tagName: 'td',
  pricingItem: null,

  didReceiveAttrs(/* attrs */) {
    this._super(...arguments);
    this.quantitySelected = Ember.computed.alias(`model.${this.get('pricingItem.id')}`);
  },

  hasError: function() {
    let quantitySelected = this.get('quantitySelected');
    return (!isEmpty(quantitySelected) && isNaN(quantitySelected));
  }.property('quantitySelected'),

  quantityHelp: function() {
    if (this.get('hasError')) {
      return this.get('i18n').t('errors.invalidNumber');
    }
  }.property('hasError')

});
