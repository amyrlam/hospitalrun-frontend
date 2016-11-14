import Ember from 'ember';
import HtmlInput from 'ember-rapid-forms/components/html-input';
const { Binding, computed, isEmpty, run } = Ember;

export default HtmlInput.extend({
  _picker: null,

  _shouldSetDate: function(currentDate, picker) {
<<<<<<< ed59f6abf4d77176b93a80e80dbfede75fb9800f
    return (picker && (Ember.isEmpty(currentDate)
      || Ember.isEmpty(picker.getDate())
      || (currentDate.getTime && picker.getDate().getTime() !== currentDate.getTime())));
  },

  currentDateChangedValue: function() {
    let currentDate = this.get('currentDate');
    let picker = this.get('_picker');
    if (!Ember.isEmpty(currentDate) && this._shouldSetDate(currentDate, picker)) {
=======
    return (picker && (isEmpty(currentDate) ||
    isEmpty(picker.getDate()) ||
    (currentDate.getTime && picker.getDate().getTime() !== currentDate.getTime())));
  },

  currentDateChangedValue: function() {
    var currentDate = this.get('currentDate'),
      picker = this.get('_picker');
    if (!isEmpty(currentDate) && this._shouldSetDate(currentDate, picker)) {
>>>>>>> more of prior commit, except:
      picker.setDate(currentDate);
    }
  },

  format: function() {
    let showTime = this.get('showTime');
    if (showTime) {
      return 'l h:mm A';
    } else {
      return 'l';
    }
  }.property('mainComponent.showTime'),

  showTimeChanged: function() {
    let picker = this.get('_picker');
    if (picker) {
      picker.destroy();
      this.didInsertElement();
    }
  }.observes('mainComponent.showTime'),

  dateSet: function() {
    let currentDate = this.get('currentDate');
    let picker = this.get('_picker');
    if (this._shouldSetDate(currentDate, picker)) {
      this.set('currentDate', picker.getDate());
    }
  },

  didInsertElement: function() {
    let currentDate = this.get('currentDate');
    let $input = this.$('input');
    let picker = null;
    let props = this.getProperties('format', 'yearRange', 'showTime');

    props.onSelect = this.dateSet.bind(this);

    if (!isEmpty(this.get('minDate'))) {
      props.minDate = this.get('minDate');
      if (props.minDate === 'now') {
        props.minDate = new Date();
      }
    }
    if (!isEmpty(this.get('maxDate'))) {
      props.maxDate = this.get('maxDate');
      if (props.maxDate === 'now') {
        props.maxDate = new Date();
      }
    }
    props.field = $input[0];
    picker = new Pikaday(props);
    run.next(this, function() {
      picker.setDate(currentDate);
    });
    this.set('_picker', picker);
  },

  didReceiveAttrs(/* attrs */) {
    this._super(...arguments);
    let dateProperty = this.get('mainComponent.property');
    let displayPropertyName = `display_${dateProperty}`;
    this.set('mainComponent.property', displayPropertyName);
<<<<<<< ed59f6abf4d77176b93a80e80dbfede75fb9800f
    this.currentDate = Ember.computed.alias(`mainComponent.model.${dateProperty}`);
    this.selectedValue = Ember.computed.alias(`mainComponent.model.${displayPropertyName}`);
    this.minDate = Ember.computed.alias('mainComponent.minDate');
    this.maxDate = Ember.computed.alias('mainComponent.maxDate');
    this.showTime = Ember.computed.alias('mainComponent.showTime');
    this.yearRange = Ember.computed.alias('mainComponent.yearRange');
    this.addObserver(`mainComponent.model.${dateProperty}`, this, this.currentDateChangedValue);
    Ember.Binding.from(`mainComponent.model.errors.${dateProperty}`).to(`mainComponent.model.errors.${displayPropertyName}`).connect(this);
=======
    this.currentDate = computed.alias('mainComponent.model.' + dateProperty);
    this.selectedValue = computed.alias('mainComponent.model.' + displayPropertyName);
    this.minDate = computed.alias('mainComponent.minDate');
    this.maxDate = computed.alias('mainComponent.maxDate');
    this.showTime = computed.alias('mainComponent.showTime');
    this.yearRange = computed.alias('mainComponent.yearRange');
    this.addObserver('mainComponent.model.' + dateProperty, this, this.currentDateChangedValue);
    Binding.from('mainComponent.model.errors.' + dateProperty).to('mainComponent.model.errors.' + displayPropertyName).connect(this);
>>>>>>> more of prior commit, except:
  },

  willDestroyElement: function() {
    let picker = this.get('_picker');
    if (picker) {
      picker.destroy();
    }
    this.set('_picker', null);
  }

});
