import Ember from 'ember';
import NSTableRowView from './ns-table-row-view';

export default Ember.CollectionView.extend({
	tagName: 'tbody',
	itemViewClass: NSTableRowView
});
