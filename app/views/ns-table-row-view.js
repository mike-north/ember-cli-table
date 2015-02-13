import Ember from 'ember';
import NSTableCellView from './ns-table-cell-view';

export default Ember.CollectionView.extend({
	tagName: 'tr',
    itemViewClass: NSTableCellView
});