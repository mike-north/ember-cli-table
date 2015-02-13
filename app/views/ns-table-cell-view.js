import Ember from 'ember';

export default Ember.View.extend({
	template: Ember.Handlebars.compile('{{view.content}}')
});
