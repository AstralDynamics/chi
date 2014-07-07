module.exports = function() {
  return {
    restrict: 'A',
    templateUrl: 'partials/timeInput.html',
    require: '?ngModel',
    scope: {
      readFormat: '&timeFormat'
    },
    link: function(scope, element, attrs, ngModel) {
      var format = scope.readFormat() || 'mm:hh';

      scope.minutes;
      scope.hours;

      // TODO find out why ngModel is not provided

      scope.change = function() {
        ngModel.$setViewValue(scope.format());
      };

      scope.format = function() {
        return format
        .replace('mm', minutes)
        .replace('hh', hours)
      };

      scope.currentTime = function() {
        var date = new Date();
        scope.minutes = date.getMinutes();
        scope.hours = date.getHours();
      };
    }
  }
};
