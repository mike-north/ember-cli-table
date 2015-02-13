import Ember from 'ember';
import NSTableRowView from './ns-table-row-view';

export default Ember.CollectionView.extend({
	tagName: 'tbody',
	itemViewClass: NSTableRowView,
	createChildView: function (viewClass, attrs) {
		var keys = this.get('columns').mapBy('valuePath');
		var vals = attrs.content;
		var o = {};
		for (var i = 0; i < keys.length; i += 1) {
			o[keys[i]] = vals[i];
		}
    	return this._super(viewClass, Ember.$.extend(attrs, {columns: this.get('columns'), row: o}));
    }
});
