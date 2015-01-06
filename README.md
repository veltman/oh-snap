oh-snap
=======

Snap points to nearest point in a different set.

## Installation

Install via npm:

```
npm install oh-snap
```

## Usage

**snap(points,snapTo[,maxDistance])**

`points` is a GeoJSON feature collection of points.

`snapTo` is another GeoJSON feature collection of points.

`maxDistance` is an optional maximum distance, in meters (the default is no maximum).  If specified, a point in `points` will only be counted as being at the nearest point in `snapTo` if it's less than `maxDistance` meters away.

## Example

Let's say you have a GeoJSON collection of points where car crashes happened, and a GeoJSON collection of points for intersections, and you want to get a list of intersections with the number of crashes at/near each.

```js

var snap = require("./index.js");

//crashes is a GeoJSON FeatureCollection of points
//intersections is another GeoJSON FeatureCollection of points

var result = snap(crashes,intersections);

```

`result` will be another GeoJSON FeatureCollection with the same points as `intersections`.  Each one will have one new property, called `snapped`:

```js
snapped: {
  count: 4,
  details: [{...},{...},{...},{...}]
}
```

That means 4 points in `crashes` were closest to this intersection.  `details` is an array of those four crashes' properties, in case you want it.