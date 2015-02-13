import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'th',

	registerToTable: function () {
		var tableComponent = this.get('parentView');
		tableComponent.registerColumn(this);
	}.on('didInsertElement')
});
