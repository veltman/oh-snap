var fs = require("fs"),
    distance = require("turf-distance");

module.exports = function(points,base,range) {

  if (typeof range !== "number") {
    range = Infinity;
  } else {
    range = +range;
  }

  points.features.forEach(function(p1){

    var min = Infinity,
        match;

    base.features.forEach(function(p2,i){
      var d = distance(p1,p2,"kilometers")*1000;
      if (d <= range && d < min) {
        min = d;
        match = p2;
      }
    });

    if (match) {
      if (!("snapped" in match.properties)) {
        match.properties.snapped = {
          "count": 0,
          "details": []
        };
      }
      match.properties.snapped.count++;
      match.properties.snapped.details.push(p1.properties);
    }

  });

  return base;

};