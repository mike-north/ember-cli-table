import Ember from 'ember';
import NSTableRowsView from '../views/ns-table-rows-view';

export default Ember.Component.extend({
	tagName: 'table',
	rowValuePaths: [],
	columnComponents: [],
	rowsView: NSTableRowsView,

	registerColumn: function (columnComponent) {
		this.get('columnComponents').addObject(columnComponent);
		this.refreshRows();
	},

	refreshRows: function () {
		Ember.run.debounce(this, this.refreshRowsImpl, 100);
	},
	refreshRowsImpl: function () {
		var cols = this.get('columnComponents').map(
			function (cc) {
				return cc.get('valuePath');
			}.bind(this)
		);
		this.set('rowValuePaths', cols);
	},

	rowData: function () {
		var valPaths = this.get('rowValuePaths');

		if (Ember.isEmpty(valPaths)) {
			return [];
		}
		else {
			return this.get('content').map(
				function (rowData) {
					return valPaths.map(
						function (valPath) {
							return Ember.get(rowData, valPath);
						}.bind(this)
					);
				}.bind(this)
			);
		}
	}.property('rows', 'rowValuePaths', 'rowValuePaths.[]')
});
