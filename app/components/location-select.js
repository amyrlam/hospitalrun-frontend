import Ember from 'ember';
const { Component, run } = Ember;

export default Component.extend({
  locationPicker: null,

  _setup: function() {
    this.locationChange = this.currentLocationChanged.bind(this);
  }.on('init'),

  currentLocationChanged: function(newLocation) {
    this.get('locationPicker').set('selectedLocation', newLocation);
    run.once(this, function() {
      this.get('parentView').locationChange();
    });
  }

});
