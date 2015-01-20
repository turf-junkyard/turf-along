turf-along
---
[![Build Status](https://travis-ci.org/Turfjs/turf-along.svg?branch=master)](https://travis-ci.org/Turfjs/turf-along)

Returns a point at a specified distance along a line.

###Install

```sh
npm install turf-along
```

###Parameters

|name|description|
|---|---|
|line|LineString feature or geometry|
|distance|distance to move|
|units|'miles', 'kilometers', 'degrees' or 'radians'|

###Usage

```js
along(line, distance, units)
```

###Example

```javascript
var line = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        -77.0316696166992,
        38.878605901789236
      ],
      [
        -77.02960968017578,
        38.88194668656296
      ],
      [
        -77.02033996582031,
        38.88408470638821
      ],
      [
        -77.02566146850586,
        38.885821800123196
      ],
      [
        -77.02188491821289,
        38.88956308852534
      ],
      [
        -77.01982498168944,
        38.89236892551996
      ]
    ]
  }
}

console.log(turf.along(line, 1, 'miles'));
```
