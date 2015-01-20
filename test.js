var test = require('tape');
var fs = require('fs');
var along = require('./');
var featurecollection = require('turf-featurecollection');

var line = JSON.parse(fs.readFileSync(__dirname + '/fixtures/dc-line.geojson'));

test('turf-along', function (t) {
	var pt1 = along(line, 1, 'miles')
	var pt2 = along(line, 1.2, 'miles')
	var pt3 = along(line, 1.4, 'miles')
	var pt4 = along(line, 1.6, 'miles')
	var pt5 = along(line, 1.8, 'miles')
	var pt6 = along(line, 2, 'miles')
console.log(JSON.stringify(featurecollection([pt1,pt2,pt3,pt4,pt5,pt6])))
	t.end();
});