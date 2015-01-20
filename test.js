var test = require('tape');
var fs = require('fs');

var line = JSON.parse(fs.readFileSync(__dirname + '/fixtures/dc-line.geojson'));
var pts = JSON.parse(fs.readFileSync(__dirname + '/fixtures/dc-points.geojson'));

test('turf-along', function (t) {

	t.end();
});