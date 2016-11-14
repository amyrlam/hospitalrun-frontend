import Ember from 'ember';
import SelectOrTypeahead from 'hospitalrun/components/select-or-typeahead';
const { computed, defineProperty, isArray, isEmpty, get, K } = Ember;

export default SelectOrTypeahead.extend({
  checkboxesPerRow: 5,
  model: null,

  _getLabelFromContent: function(object) {
<<<<<<< ed59f6abf4d77176b93a80e80dbfede75fb9800f
    let optionLabelPath = this.get('optionLabelPath');
    return Ember.get(object, optionLabelPath);
  },

  _getValueFromContent: function(object) {
    let optionValuePath = this.get('optionValuePath');
    return Ember.get(object, optionValuePath);
=======
    var optionLabelPath = this.get('optionLabelPath');
    return get(object, optionLabelPath);
  },

  _getValueFromContent: function(object) {
    var optionValuePath = this.get('optionValuePath');
    return get(object, optionValuePath);
>>>>>>> more of prior commit, except:
  },

  _mapCheckboxValues: function(value) {
    return {
      label: this._getLabelFromContent(value),
      value: this._getValueFromContent(value)
    };
  },

  _setup: function() {
<<<<<<< ed59f6abf4d77176b93a80e80dbfede75fb9800f
    let property = this.get('property');
    Ember.defineProperty(this, 'errors', Ember.computed(`model.errors.${property}`, function() {
      let property = this.get('property');
      let errors = this.get(`model.errors.${property}`);
      if (!Ember.isEmpty(errors)) {
=======
    var property = this.get('property');
    defineProperty(this, 'errors', computed('model.errors.' + property, function() {
      var property = this.get('property'),
        errors = this.get('model.errors.' + property);
      if (!isEmpty(errors)) {
>>>>>>> more of prior commit, except:
        return errors[0];
      }
    }));
  }.on('init'),

  checkboxRows: function() {
    let checkboxRows = [];
    let checkboxesPerRow = this.get('checkboxesPerRow');
    let content = this.get('content');
    let allValues = content.copy();
    while (allValues.length > 0) {
      let checkBoxRowValues = allValues.splice(0, checkboxesPerRow).map(this._mapCheckboxValues.bind(this));
      checkboxRows.push(checkBoxRowValues);
    }
    return checkboxRows;
  }.property('content', 'checkboxesPerRow'),

  actions: {
    checkboxChanged: function(value, checked) {
<<<<<<< ed59f6abf4d77176b93a80e80dbfede75fb9800f
      let property = this.get('property');
      let propertyName = `model.${property}`;
      let selectedValues = this.get(propertyName);
      if (!Ember.isArray(selectedValues)) {
=======
      var property = this.get('property'),
        propertyName = 'model.' + property,
        selectedValues = this.get(propertyName);
      if (!isArray(selectedValues)) {
>>>>>>> more of prior commit, except:
        selectedValues = [];
      }
      if (checked && !selectedValues.includes(value)) {
        selectedValues.addObject(value);
      } else if (!checked && selectedValues.includes(value)) {
        selectedValues.removeObject(value);
      }
      this.set(propertyName, selectedValues);
      this.set('selection', selectedValues);
      this.get('model').validate().catch(K);
    }
  }

});
