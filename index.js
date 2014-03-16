

var request = require('request');
var csv = require('csv-stream');
var csvStream = csv.createStream({enclosedChar : '"'});
var streamToMongo = require('stream-to-mongo')({ db: 'mongodb://127.0.0.1:27017/pathfinder-db', collection: 'spells' });

request('https://spreadsheets.google.com/pub?key=0AhwDI9kFz9SddG5GNlY5bGNoS2VKVC11YXhMLTlDLUE&output=csv')
	.pipe(csvStream)
	.pipe(streamToMongo);