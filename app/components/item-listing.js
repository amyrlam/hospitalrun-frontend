import Ember from 'ember';
import PagingActions from 'hospitalrun/mixins/paging-actions';
const { Component } = Ember;

export default Component.extend(PagingActions, {
  classNames: ['panel', 'panel-primary']
});
