# ember-cli-table [![Build Status](https://travis-ci.org/MichaelLNorth/ember-cli-table.svg)](https://travis-ci.org/MichaelLNorth/ember-cli-table) [![Code Climate](https://codeclimate.com/github/MichaelLNorth/ember-cli-table/badges/gpa.svg)](https://codeclimate.com/github/MichaelLNorth/ember-cli-table) [![npm version](https://badge.fury.io/js/ember-cli-table.svg)](http://badge.fury.io/js/ember-cli-table)

This README outlines the details of collaborating on this Ember addon.
# Use

## Installation

If you have `ember-cli` 0.1.5 or higher, you can run
```
ember install:addon ember-cli-table
```

## Use

```js
// routes/index.js
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

// controllers/index.js
import Ember from 'ember';

export default Ember.ArrayController.extend();

// views/my-custom-cell-view.js
import Ember from 'ember';
import NSTableCellView from 'ember-cli-table/ns-table-cell-view';

export default NSTableCellView.extend({
	template: Ember.Handlebars.compile('HELLO!! {{view.content}}')
});


```

```hbs
{{!-- templates/index.hbs --}}
{{#ns-table content=content class='table table-striped'}}
	{{ns-table-col valuePath='id' title="ID"}}
	{{ns-table-col valuePath='name' title="Name" cellViewClass='my-custom-cell-view'}}
	{{ns-table-col valuePath='status' title="Status"}}
{{/ns-table}}
```

# Development

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
