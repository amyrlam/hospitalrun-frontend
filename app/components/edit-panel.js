import Ember from 'ember';
const { Component } = Ember;

export default Component.extend({
  editPanelProps: null,
  cancelAction: 'cancel',

  actions: {
    cancel: function() {
      this.sendAction('cancelAction');
    },
    disabledAction: function() {
      this.sendAction('editPanelProps.disabledAction');
    },
    fireButtonAction: function(buttonAction) {
      this.set(buttonAction, buttonAction);
      this.sendAction(buttonAction);
    },
    updateButtonAction: function() {
      this.sendAction('editPanelProps.updateButtonAction');
    }
  }
});
