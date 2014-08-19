// useful time constants
var SECOND = 1000,
    MINUTE = SECOND * 60,
    HOUR = MINUTE * 60,
    DAY = HOUR * 24,
    WEEK = DAY * 7;

module.exports = angular.module('time', [])

.directive('timeSince', function() {
  return {
    restrict: 'A',
    scope: {
      since: '=timeSince'
    },
    link: function(scope, element) {
      var since = scope.since;
      render();

      function render() {
        var now, delta, quantity, interval, text;

        now = Date.now();
        delta = now - since;

        if(delta > WEEK) {
          text = Math.floor(delta / WEEK) + 'w';
          interval = WEEK;
        } else if(delta > DAY) {
          text = Math.floor(delta / DAY) + 'd';
          interval = DAY;
        } else if(delta > HOUR) {
          text = Math.floor(delta / HOUR) + 'h';
          interval = HOUR;
        } else if(delta > MINUTE) {
          text = Math.floor(delta / MINUTE) + 'm';
          interval = MINUTE;
        } else {
          text = Math.floor(delta / SECOND) + 's';
          interval = SECOND;
        }

        element.html(text);
        setTimeout(render, interval);
      }
    }
  };
})

.directive('date', function() {
  return {
    restrict: 'A',
    scope: {
      date: '=',
      format: '@'
    },
    link: function(scope, element) {
      var format, date, text;

      format = scope.format || 'd/m/y';
      date = new Date(scope.date);
      console.log(date);

      text = format
        .replace('d', date.getDate())
        .replace('m', date.getMonth() + 1)
        .replace('y', date.getYear() + 1900);

      element.html(text);

    }
  };
});
