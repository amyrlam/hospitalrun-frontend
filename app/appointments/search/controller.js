import AppointmentIndexController from 'hospitalrun/appointments/index/controller';
import AppointmentStatuses from 'hospitalrun/mixins/appointment-statuses';
import Ember from 'ember';
import SelectValues from 'hospitalrun/utils/select-values';
import VisitTypes from 'hospitalrun/mixins/visit-types';
const { computed, inject, isEmpty } = Ember;

export default AppointmentIndexController.extend(AppointmentStatuses, VisitTypes, {
  appointmentsController: inject.controller('appointments'),
  appointmentType: null,
  physicians: computed.alias('appointmentsController.physicianList.value'),
  physicianList: function() {
    return SelectValues.selectValues(this.get('physicians'), true);
  }.property('physicians'),

  provider: null,
  queryParams: ['appointmentType', 'provider', 'status', 'startKey', 'startDate'],
  selectedProvider: null,
  selectedStatus: null,
  sortProperties: null,
  startDate: null,
  startKey: [],
  status: null,
  visitTypesList: computed.alias('appointmentsController.visitTypesList'),

  actions: {
    search: function() {
      let appointmentType = this.get('model.selectedAppointmentType');
      let fieldsToSet = {
        startKey: [],
        previousStartKey: null,
        previousStartKeys: []
      };
      let provider = this.get('model.selectedProvider');
      let status = this.get('model.selectedStatus');
      let startDate = this.get('model.selectedStartingDate');

      if (isEmpty(appointmentType)) {
        fieldsToSet.appointmentType = null;
      } else {
        fieldsToSet.appointmentType = appointmentType;
      }
      if (isEmpty(provider)) {
        fieldsToSet.provider = null;
      } else {
        fieldsToSet.provider = provider;
      }
      if (isEmpty(status)) {
        fieldsToSet.status = null;
      } else {
        fieldsToSet.status = status;
      }
      if (!isEmpty(startDate)) {
        fieldsToSet.startDate = startDate.getTime();
      }
      if (!isEmpty(fieldsToSet)) {
        this.setProperties(fieldsToSet);
      }
    }
  }
});
