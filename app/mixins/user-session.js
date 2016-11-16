import Ember from 'ember';
export default Ember.Mixin.create({
  session: Ember.inject.service(),
  defaultCapabilities: {
    admin: [
      'User Administrator',
      'System Administrator'
    ],
    appointments: [
      'Data Entry',
      'Finance',
      'Hospital Administrator',
      'Medical Records Officer',
      'Patient Administration',
      'Social Worker',
      'System Administrator'
    ],
    addAppointment: [
      'Data Entry',
      'Finance',
      'Hospital Administrator',
      'Medical Records Officer',
      'Patient Administration',
      'Social Worker',
      'System Administrator'
    ],
    addCharge: [
      'Data Entry',
      'Hospital Administrator',
      'Medical Records Officer',
      'System Administrator'
    ],
    addDiagnosis: [
      'Data Entry',
      'Doctor',
      'Hospital Administrator',
      'Medical Records Officer',
      'Patient Administration',
      'System Administrator'
    ],
    addMedication: [
      'Data Entry',
      'Doctor',
      'Hospital Administrator',
      'Medical Records Officer',
      'Pharmacist',
      'System Administrator'
    ],
    addPhoto: [
      'Data Entry',
      'Hospital Administrator',
      'Medical Records Officer',
      'Patient Administration',
      'Social Worker',
      'System Administrator'
    ],
    addPatient: [
      'Data Entry',
      'Doctor',
      'Hospital Administrator',
      'Medical Records Officer',
      'Patient Administration',
      'Social Worker',
      'System Administrator'
    ],
    addPricing: [
      'Data Entry',
      'Finance',
      'Hospital Administrator',
      'Medical Records Officer',
      'System Administrator'
    ],
    addPricingProfile: [
      'Data Entry',
      'Finance',
      'Hospital Administrator',
      'Medical Records Officer',
      'System Administrator'
    ],
    addLab: [
      'Data Entry',
      'Doctor',
      'Hospital Administrator',
      'Medical Records Officer',
      'Lab Technician',
      'System Administrator'
    ],
    addImaging: [
      'Data Entry',
      'Doctor',
      'Hospital Administrator',
      'Imaging Technician',
      'Medical Records Officer',
      'System Administrator'
    ],
    addInventoryRequest: [
      'Data Entry',
      'Hospital Administrator',
      'Inventory Manager',
      'Medical Records Officer',
      'Nurse Manager',
      'Pharmacist',
      'System Administrator'
    ],
    addInventoryItem: [
      'Data Entry',
      'Hospital Administrator',
      'Inventory Manager',
      'Medical Records Officer',
      'System Administrator'
    ],
    addInventoryPurchase: [
      'Data Entry',
      'Hospital Administrator',
      'Inventory Manager',
      'Medical Records Officer',
      'System Administrator'
    ],
    addInvoice: [
      'Data Entry',
      'Hospital Administrator',
      'Medical Records Officer',
      'System Administrator'
    ],
    addPayment: [
      'Hospital Administrator',
      'Medical Records Officer',
      'System Administrator'
    ],
    addProcedure: [
      'Data Entry',
      'Doctor',
      'Hospital Administrator',
      'Medical Records Officer',
      'Nurse',
      'Nurse Manager',
      'Patient Administration',
      'System Administrator'
    ],
    addSocialwork: [
      'Hospital Administrator',
      'Medical Records Officer',
      'Social Worker',
      'System Administrator'
    ],
    addUser: [
      'User Administrator',
      'System Administrator'
    ],
    addVisit: [
      'Data Entry',
      'Doctor',
      'Hospital Administrator',
      'Medical Records Officer',
      'Nurse',
      'Nurse Manager',
      'Patient Administration',
      'Social Worker',
      'System Administrator'
    ],
    addVitals: [
      'Data Entry',
      'Doctor',
      'Hospital Administrator',
      'Medical Records Officer',
      'Nurse',
      'Nurse Manager',
      'System Administrator'
    ],
    admitPatient: [
      'Data Entry',
      'Doctor',
      'Hospital Administrator',
      'Medical Records Officer',
      'Nurse',
      'Nurse Manager',
      'Patient Administration',
      'Social Worker',
      'System Administrator'
    ],
    adjustInventoryLocation: [
      'Hospital Administrator',
      'Inventory Manager',
      'Medical Records Officer',
      'System Administrator'
    ],
    billing: [
      'Hospital Administrator',
      'Finance',
      'Finance Manager',
      'System Administrator'
    ],
    completeImaging: [
      'Imaging Technician',
      'Medical Records Officer',
      'System Administrator'
    ],
    completeLab: [
      'Lab Technician',
      'Medical Records Officer',
      'System Administrator'
    ],
    deleteAppointment: [
      'Hospital Administrator',
      'Medical Records Officer',
      'Patient Administration',
      'Social Worker',
      'System Administrator'
    ],
    deleteDiagnosis: [
      'Doctor',
      'Hospital Administrator',
      'Medical Records Officer',
      'Patient Administration',
      'System Administrator'
    ],
    deleteInventoryItem: [
      'Hospital Administrator',
      'Inventory Manager',
      'Medical Records Officer',
      'System Administrator'
    ],
    deleteImaging: [
      'Doctor',
      'Hospital Administrator',
      'Medical Records Officer',
      'System Administrator'
    ],
    deleteInvoice: [
      'Hospital Administrator',
      'System Administrator'
    ],
    deleteLab: [
      'Doctor',
      'Hospital Administrator',
      'Medical Records Officer',
      'System Administrator'
    ],
    deleteMedication: [
      'Doctor',
      'Hospital Administrator',
      'Medical Records Officer',
      'System Administrator'
    ],
    deletePhoto: [
      'Data Entry',
      'Hospital Administrator',
      'Medical Records Officer',
      'Patient Administration',
      'Social Worker',
      'System Administrator'
    ],
    deletePatient: [
      'Hospital Administrator',
      'Medical Records Officer',
      'Patient Administration',
      'System Administrator'
    ],
    deletePricing: [
      'Finance',
      'Data Entry',
      'Hospital Administrator',
      'Medical Records Officer',
      'System Administrator'
    ],
    deletePricingProfile: [
      'Finance',
      'Data Entry',
      'Hospital Administrator',
      'Medical Records Officer',
      'System Administrator'
    ],
    deleteProcedure: [
      'Doctor',
      'Hospital Administrator',
      'Medical Records Officer',
      'Nurse',
      'Nurse Manager',
      'Patient Administration',
      'System Administrator'
    ],
    deleteSocialwork: [
      'Hospital Administrator',
      'Medical Records Officer',
      'Social Worker',
      'System Administrator'
    ],
    deleteVitals: [
      'Doctor',
      'Hospital Administrator',
      'Medical Records Officer',
      'Nurse',
      'Nurse Manager',
      'System Administrator'
    ],
    deleteVisit: [
      'Doctor',
      'Hospital Administrator',
      'Medical Records Officer',
      'Nurse',
      'Nurse Manager',
      'Patient Administration',
      'Social Worker',
      'System Administrator'
    ],
    deleteUser: [
      'User Administrator',
      'System Administrator'
    ],
    dischargePatient: [
      'Data Entry',
      'Doctor',
      'Hospital Administrator',
      'Medical Records Officer',
      'Nurse',
      'Nurse Manager',
      'Patient Administration',
      'Social Worker',
      'System Administrator'
    ],
    editInvoice: [
      'Data Entry',
      'Hospital Administrator',
      'Medical Records Officer',
      'System Administrator'
    ],
    fulfillInventory: [
      'Hospital Administrator',
      'Inventory Manager',
      'Medical Records Officer',
      'Pharmacist',
      'System Administrator'
    ],
    fulfillMedication: [
      'Medical Records Officer',
      'Pharmacist',
      'System Administrator'
    ],
    imaging: [
      'Data Entry',
      'Doctor',
      'Hospital Administrator',
      'Imaging Technician',
      'Medical Records Officer',
      'System Administrator'
    ],
    invoices: [
      'Hospital Administrator',
      'Finance',
      'Finance Manager',
      'System Administrator'
    ],
    labs: [
      'Data Entry',
      'Doctor',
      'Hospital Administrator',
      'Lab Technician',
      'Medical Records Officer',
      'System Administrator'
    ],
    medication: [
      'Data Entry',
      'Doctor',
      'Hospital Administrator',
      'Medical Records Officer',
      'Pharmacist',
      'System Administrator'
    ],
    inventory: [
      'Data Entry',
      'Hospital Administrator',
      'Inventory Manager',
      'Medical Records Officer',
      'Nurse Manager',
      'Pharmacist',
      'System Administrator'
    ],
    loadDb: [
      'System Administrator'
    ],
    overrideInvoice: [
      'Hospital Administrator',
      'System Administrator'
    ],
    queryDb: [
      'System Administrator'
    ],
    patients: [
      'Data Entry',
      'Doctor',
      'Finance',
      'Finance Manager',
      'Hospital Administrator',
      'Imaging Technician',
      'Lab Technician',
      'Medical Records Officer',
      'Nurse',
      'Nurse Manager',
      'Patient Administration',
      'Social Worker',
      'System Administrator'
    ],

    patientReports: [
      'Hospital Administrator',
      'Patient Administration',
      'System Administrator'
    ],

    pricing: [
      'Data Entry',
      'Finance',
      'Hospital Administrator',
      'Medical Records Officer',
      'System Administrator'
    ],
    visits: [
      'Data Entry',
      'Doctor',
      'Hospital Administrator',
      'Medical Records Officer',
      'Nurse Manager',
      'Nurse',
      'Patient Administration',
      'Social Worker',
      'System Administrator'
    ],
    updateConfig: [
      'System Administrator'
    ],
    users: [
      'User Administrator',
      'System Administrator'
    ],
    addNote: [
      'Doctor',
      'Medical Records Officer',
      'Nurse',
      'Nurse Manager',
      'Patient Administration',
      'System Administrator'
    ],
    deleteNote: [
      'Medical Records Officer',
      'Nurse Manager',
      'Patient Administration',
      'System Administrator'
    ],
    'user_roles': [
      'System Administrator'
    ]
  },

  _getUserSessionVars: function() {
    let session = this.get('session');
    if (!Ember.isEmpty(session) && session.get('isAuthenticated')) {
      return session.get('data.authenticated');
    }
  },

  currentUserCan: function(capability) {
    let sessionVars = this._getUserSessionVars();
    if (!Ember.isEmpty(sessionVars) && !Ember.isEmpty(sessionVars.role)) {
      let userCaps = this.get('session').get('data.authenticated.userCaps');
      if (Ember.isEmpty(userCaps)) {
        let capabilities = this.get('defaultCapabilities');
        let supportedRoles = capabilities[capability];
        if (!Ember.isEmpty(supportedRoles)) {
          return supportedRoles.includes(sessionVars.role);
        }
      } else {
        return userCaps.includes(capability);
      }
    }
    return false;
  },

  /**
   * Returns the display name of the user or the username if
   * the display name is not set or if the username is explictly requested.
   * @param {boolean} returnUserName if true, always return the username instead
   * of the display name even if the display name is set.
   */
  getUserName: function(returnUserName) {
    let returnName;
    let sessionVars = this._getUserSessionVars();
    if (!Ember.isEmpty(sessionVars)) {
      if (returnUserName) {
        returnName = sessionVars.name;
      } else if (!Ember.isEmpty(sessionVars.displayName)) {
        returnName = sessionVars.displayName;
      } else if (!Ember.isEmpty(sessionVars.name)) {
        returnName = sessionVars.name;
      }
    }
    return returnName;
  }
});
