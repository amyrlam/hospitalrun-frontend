import Ember from 'ember';
import SelectValues from 'hospitalrun/utils/select-values';
const { Component, isEmpty } = Ember;

export default Component.extend(SelectValues, {
  classNames: 'detail-section-content',
  fieldsByRow: function() {
    let rows = [];
<<<<<<< ed59f6abf4d77176b93a80e80dbfede75fb9800f
    let form = this.get('form');
    if (!Ember.isEmpty(form)) {
      let { fields } = form;
      let numberOfColumns = this.getWithDefault('form.columns', 1);
=======
    const form = this.get('form');
    if (!isEmpty(form)) {
      const fields = form.fields;
      const numberOfColumns = this.getWithDefault('form.columns', 1);
>>>>>>> more of prior commit, except:
      let currentRow = [];

      let colCount = 0;
      let colWidth = (12 / numberOfColumns);
      fields.forEach((field) => {
        if (!field.classNames) {
          field.classNames = '';
        }
        let colSpan = field.colSpan || 1;
        if (colCount === numberOfColumns || (colCount + colSpan) > numberOfColumns) {
          rows.push(currentRow.slice());
          currentRow = [];
          colCount = 0;
        }
        field.classNames += ` col-sm-${colWidth * colSpan}`;
        if (field.type === 'select') {
          field.mappedValues = field.values.map(this.selectValuesMap);
        }
        currentRow.push(field);
        colCount += colSpan;
      });
      if (colCount > 0) {
        rows.push(currentRow);
      }
    }
    return rows;
  }.property('form')
});
