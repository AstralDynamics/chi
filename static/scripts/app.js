(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
angular.module('sbri', ['ngRoute', 'firebase'])

.value({
  resources: require('./services/resources')
})

.factory({

})

.controller({

})

.directive({

})

.config(function($routeProvider) {

});

},{"./services/resources":4}],2:[function(require,module,exports){
module.exports={
  "__default__": "#555",
  "black": "#3b3b3b",
  "red": "#cf6a4c",
  "green": "#99ad6a",
  "yellow": "#d8ad4c",
  "blue": "#597bc5",
  "purple": "#a037b0",
  "cyan": "#71b9f8"
}

},{}],3:[function(require,module,exports){
module.exports={
  "__default__": "fa fa-circle",
  "ambulance": "fa fa-ambulance",
  "hospital": "fa fa-hospital-o",
  "medkit": "fa fa-medkit",
  "plus": "fa fa-plus-square",
  "stethoscope": "fa fa-stethoscope",
  "staff": "fa fa-user-md",
  "wheelchair": "fa fa-wheelchair",
  "document": "fa fa-file-o",
  "patient": "fa fa-user",
  "patients": "fa fa-users",
  "star": "fa fa-star",
  "heart": "fa fa-heart",
  "steam": "fa fa-steam",
  "coffee": "fa fa-coffee",
  "clock": "fa fa-clock",
  "chart": "fa fa-chart",
  "circle": "fa fa-circle"
}

},{}],4:[function(require,module,exports){
module.exports = function() {
  return {
    icons: require('../resources/icons.json'),
    colors: require('../resources/colors.json')
  }
};

},{"../resources/colors.json":2,"../resources/icons.json":3}]},{},[1])