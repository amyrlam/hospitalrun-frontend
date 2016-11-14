import Ember from 'ember';
import TypeAhead from 'hospitalrun/components/type-ahead';
const { isEmpty } = Ember;

export default TypeAhead.extend({
  classNameBindings: ['haveInventoryItems'],
  displayKey: 'name',
  showQuantity: true,
  _mapInventoryItems: function(item) {
    let returnObj = {};
    if (this.get('showQuantity') && item.quantity) {
      returnObj.name = `${item.name} - ${item.friendlyId} (${item.quantity} available)`;
    } else {
      returnObj.name = `${item.name} - ${item.friendlyId}`;
    }
    returnObj[this.get('selectionKey')] = item;
    return returnObj;
  },

  haveInventoryItems: function() {
<<<<<<< ed59f6abf4d77176b93a80e80dbfede75fb9800f
    let content = this.get('content');
    if (!Ember.isEmpty(content) && content.length > 0) {
=======
    var content = this.get('content');
    if (!isEmpty(content) && content.length > 0) {
>>>>>>> more of prior commit, except:
      return 'have-inventory-items';
    }
  }.property('content'),

  mappedContent: function() {
    let content = this.get('content');
    let mapped = [];
    if (content) {
      mapped = content.map(this._mapInventoryItems.bind(this));
    }
    return mapped;
  }.property('content'),

  contentChanged: function() {
    let bloodhound = this.get('bloodhound');
    let content = this.get('content');
    if (bloodhound) {
      bloodhound.clear();
      bloodhound.add(content.map(this._mapInventoryItems.bind(this)));
    }
  }.observes('content.[]')
});
