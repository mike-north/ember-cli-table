import Ember from 'ember';
import NSTableRowView from './ns-table-row-view';

export default Ember.CollectionView.extend({
	tagName: 'tbody',
	itemViewClass: NSTableRowView,
	createChildView: function (viewClass, attrs) {
    	return this._super(viewClass, Ember.$.extend(attrs, {columns: this.get('columns'), row: attrs.content}));
    }
});
