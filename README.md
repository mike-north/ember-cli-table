# ember-cli-table [![Build Status](https://travis-ci.org/MichaelLNorth/ember-cli-table.svg)](https://travis-ci.org/MichaelLNorth/ember-cli-table) [![Code Climate](https://codeclimate.com/github/MichaelLNorth/ember-cli-table/badges/gpa.svg)](https://codeclimate.com/github/MichaelLNorth/ember-cli-table) [![npm version](https://badge.fury.io/js/ember-cli-table.svg)](http://badge.fury.io/js/ember-cli-table)

This README outlines the details of collaborating on this Ember addon.
# Use

## Installation

If you have `ember-cli` 0.1.5 or higher, you can run
```
ember install:addon ember-cli-table
```

## Use

```hbs
{{#ns-table content=content class='table table-striped'}}
	{{ns-table-col valuePath='id' title="ID"}}
	{{ns-table-col valuePath='name' title="Name"}}
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
