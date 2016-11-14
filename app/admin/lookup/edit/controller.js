import Ember from 'ember';
import IsUpdateDisabled from 'hospitalrun/mixins/is-update-disabled';
const { Controller, inject, isEmpty } = Ember;

export default Controller.extend(IsUpdateDisabled, {
  editController: inject.controller('admin/lookup'),
  showUpdateButton: true,

  updateButtonAction: 'update',
  updateButtonText: function() {
    let i18n = this.get('i18n');
    if (this.get('model.isNew')) {
      return i18n.t('buttons.add');
    } else {
      return i18n.t('buttons.update');
    }
  }.property('model.isNew'),

  actions: {
    cancel: function() {
      this.send('closeModal');
    },

    update: function() {
      if (!isEmpty(this.get('model.value'))) {
        this.get('editController').send('updateValue', this.get('model'));
        this.send('closeModal');
      }
    }
  }
});
