import Ember from 'ember';

export default Ember.Route.extend({

	model: function () {
		return [
			{id: 1, name: 'First', status: 'ok'},
			{id: 2, name: 'Second', status: 'ok'},
			{id: 3, name: 'Third', status: 'ok'},
			{id: 4, name: 'Fourth', status: 'ok'},
			{id: 5, name: 'Fifth', status: 'ok'},
			{id: 6, name: 'Sixth', status: 'ok'},
			{id: 7, name: 'Seventh', status: 'bad'},
			{id: 8, name: 'Eigth', status: 'bad'},
			{id: 9, name: 'Ninth', status: 'ok'},
			{id: 10, name: 'Tenth', status: 'ok'},
			{id: 11, name: 'Eleventh', status: 'ok'},
			{id: 12, name: 'Twelth', status: 'ok'},
		];
	}
});