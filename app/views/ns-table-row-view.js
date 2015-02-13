import Ember from 'ember';
import NSTableCellView from '../views/ns-table-cell-view';

export default Ember.CollectionView.extend({
	tagName: 'tr',
	defaultItemViewClass: NSTableCellView,
	columns: [],
    createChildView: function (viewClass, attrs) {
    	var columnModel = this.get('columns')[attrs.contentIndex];
    	debugger;
    	return this._super(columnModel.get('cellViewClass') || this.get('defaultItemViewClass'), Ember.$.extend(attrs, {row: this.get('row')}));
    }
});