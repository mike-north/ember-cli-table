import Ember from 'ember';
import NSTableCellView from '../views/ns-table-cell-view';

export default Ember.Component.extend({
	tagName: 'th',

	registerToTable: function () {
		var tableComponent = this.get('parentView');
		tableComponent.registerColumn(this);
	}.on('didInsertElement'),

	cellViewClass: null
});
