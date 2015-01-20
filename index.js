var distance = require('turf-distance');
var point = require('turf-point');
var bearing = require('turf-bearing');
var destination = require('turf-destination');

module.exports = function (line, dist, units) {
  var coords;
  if(line.type === 'Feature') coords = line.geometry.coordinates;
  else if(line.type === 'LineString') coords = line.geometry.coordinates;
  else throw new Error('input must be a LineString Feature or Geometry');

  var travelled = 0;
  for(var i = 0; i < coords.length-1; i++) {
    if(travelled >= dist) {
      var overshot = dist - travelled;
      if(!overshot) return point(coords[i]);
      else {
        var direction = bearing(point(coords[i]), point(coords[i-1])) - 180;
        var interpolated = destination(point(coords[i]), overshot, direction, units);
        return interpolated;
      }
    }
    else {
      travelled += distance(point(coords[i]), point(coords[i+1]), units);
    }
  }
  return point(coords[coords.length - 1]);
}